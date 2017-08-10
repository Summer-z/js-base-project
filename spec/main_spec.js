"use strict";
let _ = require("lodash");
let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
let expect = chai.expect;
chai.use(sinonChai);

let getEntireLyrics = require("../lib/main.js");
let lyrics = require("../lib/lyrics.js");

describe("Print out the lyrics of '99 bottles of beer on the wall' song", function(){
    sinon.spy(console, 'log');

    it("Test the last paragraph of the lyrics", function(){
        let num = 0;
        let result = getEntireLyrics(num);
        let expect_string = lyrics.lastLyrics();
        expect(expect_string).to.be.equal(result);
    });

    it("Test the last two paragraph of the lyrics", function(){
        let num = 1;
        let result = getEntireLyrics(num);
        let expect_string = lyrics.lastTwoLyrics();
        expect(expect_string).to.be.equal(result);
    });

    it("Test the entire lyrics of the song '99 bottles of beer on the wall'", function(){
        let num = 99;
        let result = getEntireLyrics(num);
        let expect_string = lyrics.entireLyrics();
        expect(expect_string).to.be.equal(result);
    });
});