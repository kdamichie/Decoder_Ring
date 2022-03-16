const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests", () => {
    describe("functionality tests", () => {
        it("should correctly encode / decode a message", () => {
            const actual1 = substitution("awesome", "qwertyuiopasdfghjklzxcvbnm", true);
            expect(actual1).to.equal("qvtlgdt");
            const actual2 = substitution("qvtlgdt", "qwertyuiopasdfghjklzxcvbnm", false);
            expect(actual2).to.equal("awesome");
        });
        it("should preserve spaces", () => {
            const actual1 = substitution("double awesome", "qwertyuiopasdfghjklzxcvbnm", true);
            expect(actual1).to.equal("rgxwst qvtlgdt");
            const actual2 = substitution("rgxwst qvtlgdt", "qwertyuiopasdfghjklzxcvbnm", false);
            expect(actual2).to.equal("double awesome");
        });
    });

    describe("test errors", () => {
        it("should return false if alphabet is missing", () => {
            const actual = substitution("awesome");
            expect(actual).to.be.false;
        });
        it("should return false if alphabet length is not 26 char", () => {
            const actual = substitution("awesome", "abcdefghijklmnopqrstuvwxy", true);
            expect(actual).to.be.false;
        });
        it("should return 'false' if each char is not unique", () => {
            const actual = substitution("awesome", "abcabcabcabcabcabcabcabcab");
            expect(actual).to.be.false;
        });
    });
});