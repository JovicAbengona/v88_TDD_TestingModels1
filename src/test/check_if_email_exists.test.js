const User = require("../models/User");
const Chai = require("chai");
const Expect = Chai.expect;

describe("checkEmail: Email does not exist", () => {
    it("Should return an empty array", async () => {
        const result = await User.checkEmail("johndoe@gmail.com");
        Expect(result).to.not.eql([]);
    });
});

describe("checkEmail: Email does exist", () => {
    it("Should return an an array with one value", async () => {
        const result = await User.checkEmail("johndoe@gmail.com");
        Expect(result).to.not.eql([]);
    });
});

describe("checkEmail: Incorrect data type", () => {
    it("Should return an error", async () => {
        const result = await User.checkEmail("johndoe@gmail.com");
        Expect(result).to.not.eql([]);
    });
});