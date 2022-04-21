describe("The yearsAgo function" , function(){
    it("should be able to calculate the how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976)); 
    });
    it("should be able to calculate the how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - 1970), yearsAgo(1970)); 
    });
    it("should be able to calculate the how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000)); 
    });
    it("should be able to calculate the how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - 2), yearsAgo(2)); 
    });

    it("should be able to calculate the how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - ''), yearsAgo('')); 
    });

});