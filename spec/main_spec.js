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
        let expect_string = 'No more bottles of beer on the wall, no more bottles of beer.\n'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(expect_string).to.be.equal(result);
    });

    it("Test the last two paragraph of the lyrics", function(){
        let num = 1;
        let result = getEntireLyrics(num);
        let expect_string = '1 bottle of beer on the wall, 1 bottle of beer.\n'+
            'Take one down and pass it around, no more bottles of beer on the wall.\n'+
            'No more bottles of beer on the wall, no more bottles of beer.\n'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(expect_string).to.be.equal(result);
    });

    it("Test the entire lyrics of the song '99 bottles of beer on the wall'", function(){
        let num = 99;
        let result = getEntireLyrics(num);
        let expect_string = lyrics();
        expect(expect_string).to.be.equal(result);
    });

    // it("测试用例2", function(){
    //
    //     main();
    //     let result = _.flatten(console.log.args).join("\n");
    //     let expect_string = '';
    //
    //     expect(expect_string).to.equal(result);
    // });
});