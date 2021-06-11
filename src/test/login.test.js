const User = require("../models/User");
const Chai = require("chai");
const Expect = Chai.expect;

describe("Login: Incorrect username or password", () => {
    it("Should return an error", async () => {
        const result = await User.login("johndoe@gmail.com", "123123");
        Expect(result).to.eql([]);
    });
});

describe("Login: Account exists", () => {
    it("Should return an array of user data", async () => {
        const result = await User.login("johndoe@gmail.com", "qweasdzxc");
        Expect(result).to.not.eql([]);
    });
});


describe("Login: No email or password provided", () => {
    it("Should return an empty array", async () => {
        const result = await User.login("", "");
        Expect(result).to.eql([]);
    });
});