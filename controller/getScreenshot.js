import expressAsyncHandler from "express-async-handler";
import puppeteer from "puppeteer";
import { resolve } from "path";

// @desc    Fetch Screenshot of particular website
// @route   GET /api/screenshot/:url
// @access  Public
const getScreenshot = expressAsyncHandler(async (req, res) => {
  const url = req.params.url;
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      ignoreDefaultArgs: ["--disable-extensions"],
    });
    const page = await browser.newPage();
    await page.goto(`https://${url}`);
    await page.screenshot({ path: `${url}.png` });
    await browser.close();
    res.sendFile(resolve(`${url}.png`));
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
export { getScreenshot };
