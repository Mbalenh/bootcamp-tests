describe("The transportFee function" , function(){
    it("should return R20, if you are working a 'morning' shift ", function(){
        assert.equal(transportFee('morning') , 'R20');
    });
    it("should return R10, If you are working 'afternoon' shift", function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });
    it("should  should return free,  If you are working 'night' shift", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
        
    });
    it("should return 0 If you are not working ", function(){
        assert.equal(0 , 0);
        
    });
    
    
    });