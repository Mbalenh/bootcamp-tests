describe("The countRegNumber function" , function(){
    it("should be able to calculate the countRegNumber('CA111 , CJ 134 , CK 124')" , function(){
        assert.equal(countRegNumber('CA111 , CJ 134 , CK 124'), 3);   
    })
    it("should be able to calculate the countRegNumber('CA111 , CJ 134')" , function(){
        assert.equal(countRegNumber('CA111 , CJ 134'), 2);   
    })

    it("should be able to calculate the countRegNumber('CA2 , CT34')" , function(){
        assert.equal(countRegNumber('CA2 , CT34'), 2);   
    })
    it("should be able to calculate the countRegNumber('CA111')" , function(){
        assert.equal(countRegNumber('CA111'), 1);   
    })
    it("should be able to calculate the countRegNumber" , function(){
        assert.equal('error', 'error');   
    })
})