// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polibius function", () => {
    describe("Encoding a message", () => {
        it("Should encode a message by translating each letter to its number pair", () => {
            const message = "Gorilla";
            const actual = polybius(message);
            const expected = "22432442131311";

            expect(actual).to.equal(expected);
        });
        it("should translate both 'i' and 'j' to 42", () => {
            const message = "Javascript";
            const actual = polybius(message);
            const expected = "42111511343124425344";

            expect(actual).to.equal(expected);
        });
        it("Should leave the spaces in the input", () => {
            const message = "my message";
            const actual = polybius(message);
            const expected = "2345 23513434112251";

            expect(actual).to.equal(expected)
        });
        it("Should ignore capital letters", () => {
            const message = "CapiTal";
            const actual = polybius(message);
            const expected = "31115342441113";

            expect(actual).to.equal(expected);
        });
        it("Should return a string when encoding", () => {
            const message = "user name";
            const actual = polybius(message);
            expect(actual).to.be.a("string");
        })
    })
    describe("Decoding a message", () => {
        it("Should decode a message by translating each number pair to its letter", () => {
            const message = "22432442131311";
            const actual = polybius(message, false);

            expect(actual).to.equal(actual);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("should translate both 'i' and 'j' to 42", () => {
            const message = "42111511343124425344";
            const actual = polybius(message, false);

            expect(actual).to.equal(actual);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("Should leave the spaces in the input", () => {
            const message = "2345 23513434112251";
            const actual = polybius(message, false);
            const expected = "my message";

            expect(actual).to.equal(expected)
        });
        it("Should return false if the length of all numbers is odd", () =>{
            const message = "2345 235134341122514";
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        });
    });
});