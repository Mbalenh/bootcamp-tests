describe("The regCheck function", function(){
    it("should the regNums.endsWith(regEnd)" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it("should the regNums.endsWith(L)" , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it("The registration number should not end with 'M'" , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it("should the regNums.endsWith()" , function(){
        assert.equal(isFromBellville(''), false)
    });
    it("should not the regNums.endsWith(ND 123-456)" , function(){
        assert.equal(isFromBellville('ND 123-456'), false)
    });
});