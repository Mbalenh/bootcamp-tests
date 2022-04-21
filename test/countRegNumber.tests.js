describe("The countRegNumber function" , function(){
    it("should return  the total of the  regNumber in string " , function(){
        assert.equal(countRegNumber('CA111 , CJ 134 , CK 124'), 3);   
    })
    it("should return  the total of the  regNumber in string ('CA111 , CJ 134')" , function(){
        assert.equal(countRegNumber('CA111 , CJ 134'), 2);   
    })

    it("return  the total of the  regNumber in string ('CA2 , CT34')" , function(){
        assert.equal(countRegNumber('CA2 , CT34'), 2);   
    })
    it("return  the total of the  regNumber in string ('CA111')" , function(){
        assert.equal(countRegNumber('CA111'), 1);   
    })
    it("sreturn  the total of the  regNumber in string" , function(){
        assert.equal('error', 'error');   
    })
})