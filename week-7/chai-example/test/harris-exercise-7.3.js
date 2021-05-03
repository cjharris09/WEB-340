var fruits = require("../harris-fruits");
var chai = require("chai");
var assert = chai.assert;
describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f = fruits('apple,orange,mango');
        assert(Array.isArray(f));
    });
});