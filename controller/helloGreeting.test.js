const hello = require("./helloGreeting.js");

describe("Test Handlers", function () {
  test("responds to /hello/:name", () => {
    const req = { params: { name: "Bob" } };

    const res = {
      text: "",
      send: function (input) {
        this.text = input;
      },
    };
    hello(req, res);

    expect(res.text).toEqual("Hello Bob!");
  });
});
