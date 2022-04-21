describe("The countAllPaarl function" , function(){
it("should  be able to count the string of allPaarl that startsWith('CJ')", function(){
    assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
});
it("should  be able to count the string of allPaarl that startsWith('CJ')", function(){
    assert.equal(1, countAllPaarl('CK 345 123, CK 345, CJ 123'));
});
it("should  be able to count the string of allPaarl that startsWith('CJ')", function(){
    assert.equal(3, countAllPaarl('CJ 345 123, CJ 345, CJ 123'));
});
it("should  be able to count the string of allPaarl that startsWith('CJ')", function(){
    assert.equal(0, countAllPaarl('CK 345 123, CK 345, CK 123'));
});
it("should  be able to count the string of allPaarl that startsWith('CJ')", function(){
    assert.equal(0, 0);
});


});