const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", () => {
    describe("functionality tests", () => {
        it("should correctly encode / decode a message based on shift value", () => { 
            const actual1 = caesar("awesome", 3, true); 
            expect(actual1).to.equal("dzhvrph");
            const actual2 = caesar("dzhvrph", 3, false);
            expect(actual2).to.equal("awesome");
        });
        it("should preserve spaces and special characters", () => {
             const actual1 = caesar("dude, you did it!", 5, true);
             expect(actual1).to.equal("izij, dtz ini ny!");
             const actual2 = caesar("izij, dtz ini ny!", 5, false);
             expect(actual2).to.equal("dude, you did it!");
        });
        it("should ignore capital letters", () => {
            const actual = caesar("AWESOME", 3);
            expect(actual).to.equal("dzhvrph");
        });
        it("shift should rollover to begining of alphabest, and back again when decoded", () => {
            const actual1 = caesar("xyz", 3, true); 
            expect(actual1).to.equal("abc");
            const actual2 = caesar("abc", 3, false);
            expect(actual2).to.equal("xyz");
        });
    });

    describe("test shift errors", () => {
        it("return 'false'  if shift value is not present", () => {
            const actual = caesar("awesome");
            expect(actual).to.be.false;
        });
        it("return 'false'  if shift value is > 25", () => {
            const actual = caesar("awesome", 26);
            expect(actual).to.be.false;
       });
        it("return 'false'  if shift value is < -25", () => {
            const actual = caesar("awesome", -26);
            expect(actual).to.be.false;
        });
        it("return 'false'  if shift value is 0", () => {
            const actual = caesar("awesome", 0);
            expect(actual).to.be.false;
        });
    });
});