describe("The isFromBellville function", function(){
    it("should the regNums.startsWith('CY')" , function(){
        assert.equal(isFromBellville('CY 123'), true)
    });
    it("The registration number from Bellville should startsWith('CY')" , function(){
        assert.equal(isFromBellville('CY 143'), true)
    });
    it("The registration number from Bellville should not startsWith('CJ')" , function(){
        assert.equal(isFromBellville('CJ 123'), false)
    });
    it("The registration number from Bellville should not startsWith('NUZ')" , function(){
        assert.equal(isFromBellville('NUZ 123'), false)
    });
    it("The registration number from Bellville should not startsWith('')" , function(){
        assert.equal(isFromBellville(''), false)
    });
});



