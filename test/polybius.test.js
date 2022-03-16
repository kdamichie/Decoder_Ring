const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", () => {
    describe("functionality tests", () => {
        it("should correctly encode / decode a message", () => {
            const actual1 = polybius("awesome", true);
            expect(actual1).to.equal("11255134432351");
            const actual2 = polybius("11255134432351", false);
            expect(actual2).to.equal("awesome");
        });
        it("should process i and j as 42, and return \"i/j\" when decoded", () => {
            const actual1 = polybius("ij", true);
            expect(actual1).to.equal("4242");
            const actual2 = polybius("42", false);
            expect(actual2).to.equal("i/j");
        });
        it("should preserve spaces", () => {
            const actual1 = polybius("double awesome", true);
            expect(actual1).to.equal("414354211351 11255134432351");
            const actual2 = polybius("414354211351 11255134432351", false);
            expect(actual2).to.equal("double awesome");
        });
    });

    describe("test errors", () => {
        it("return false if length of numbers is odd", () => {
            const actual = polybius("112551344323511", false);
            expect(actual).to.equal(false);
        });
    });
});