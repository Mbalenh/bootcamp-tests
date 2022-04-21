describe("The findItemOver20 function" , function(){
    it("should  be able to count list of items to be over 20", function(){
        assert.deepEqual([],findItemsOver20(results2))    ;
    });
    it("should  be able to count list of items to be over 20", function(){
        assert.deepEqual([ {name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver20(results));
    });
    it("should  be able to count list of items to be over 20", function(){
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], findItemsOver20(results3));
    });
    
    
    
    });