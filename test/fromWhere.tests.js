describe("The fromWhere function" , function(){
    it("should be able to tell where you from if startsWith('CY')", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it("should be able to tell where you from if startsWith('CJ')", function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it("should be able to tell where you from if startsWith('CA')", function(){
        assert.equal(fromWhere('CA'), 'Cape Town');

    });
    it("should be able to tell where you from or otherwise return Some other place! ", function(){
        assert.equal(fromWhere('CK'), 'Some other place!');

    });
    
    });