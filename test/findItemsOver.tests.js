describe("The findItemOver function" , function(){
    it("should  be able to count list of items to be over", function(){
        assert.deepEqual([], findItemsOver(results2, 20));
    });
    it("should  be able to count list of items to be over ", function(){
        assert.deepEqual([ {name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver(results, 20));
    });
    it("should  be able to count list of items to be over 20", function(){
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], findItemsOver(results3, 20));;
    });
    
    
    
    });