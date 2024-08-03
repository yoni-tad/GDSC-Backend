// npm install --save-dev mocha chai
// test first them code

import { assert, expect } from "chai";
import add from "./modules/calc.js";

describe("add function testing", function(){
    it("testing the addition of 2 and 3 should return 5", function() {
        const result = add(2, 3);
        assert.equal(result, 5);
    });

    it("should return 12 after addition of 3, 4, 2, 1, 1  and 1", function() {
        const result = add(3, 4, 2, 1, 1, 1)
        expect(result).to.be.equal(12);
    });

    it("should return 0 if there are no nums", function(){
        const result = add();
        assert.equal(result, 0);
    });
});
