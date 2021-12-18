const hello = (req, res) => {
  const name = req.params.name ?? "world";
  console.log(name);
  res.send(`Hello ${name}!`);
};
module.exports = hello;
