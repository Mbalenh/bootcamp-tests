describe("The transportFee function" , function(){
    it("should  be able to  If you are working 'morning' shift", function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it("should  be able to  If you are working 'afternoon' shift", function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });
    it("should  be able to  If you are working 'night' shift", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
        
    });
    it("should  be able to  If you are not working ", function(){
        assert.equal(0 , 0);
        
    });
    
    
    });