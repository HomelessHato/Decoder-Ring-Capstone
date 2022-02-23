const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution module", () => {
    describe("error handling",() => {
        it("Should return false if there is no substitution alphabet parameter", () => {
            const message = "yoinks";
            const actual = substitution(message);
            expect(actual).to.be.false;
          });
        it("Should return false if the length of the input alphabet is not 26 characters", () => {
            const message = "scoob";
            const alphabet= "bcdefghijklmnopqrstuvwxy";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
        it("Should return false if each character in the input alphabet is not unique.", () => {
            const message = "this will not work";
            const alphabet = "abcabcabcabcabcabcabcabcab";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("encoding a string with substitution", () => {
        it("Should encode a message by utilizing a given valid substitution alphabet", () => {
            const message = "wow";
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "xpx";
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Should work with any combination of 26 unique characters as the substitution alphabet", () => {
            const message = "still works";
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "tujmm xp%lt";
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Should preserve spaces", () => {
            const message = "spaced out man";
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "tqbdfe pvu nbo";
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Should allow the input to have special characters", () => {
            const message = "$hmoney man#1"
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "$inpofz nbo#1"
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
        });
        it("Should ignore capital letters", () => {
            const message = "I AM YELLING AT THE TOP OF MY LUNGS";
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "j bn zfmmjoh bu uif upq pg nz mvoht";
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
        })
    });
    describe("Decoding a message with substitution", () => {
        it("Should encode a message by utilizing a given valid substitution alphabet", () => {
            const message = "xpx";
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "wow";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("Should work with any combination of 26 unique characters as the substitution alphabet", () => {
            const message = "tujmm xp%lt"; 
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "still works";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("Should preserve spaces", () => {
            const message = "tqbdfe pvu nbo";
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "spaced out man";  
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
        });
        it("Should allow the input to have special characters", () => {
            const message = "$inpofz nbo#1"
            const alphabet = "bcdefghijklmnopqr%tuvwxyza";
            const expected = "$hmoney man#1"
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
        });
    });
})
