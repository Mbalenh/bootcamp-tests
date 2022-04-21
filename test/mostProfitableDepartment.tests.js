describe("The mostProfitableDepartment function" , function(){
    it("should  be able to tell which day of the week is the most profitable", function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });
    it("should  be able to tell which day of the week is the most profitable", function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
    it("should  be able to tell which day of the week is the most profitable", function(){
        assert.equal('carpentry', mostProfitableDepartment(salesData3), "Most profitable department is 'carpentry' for dataset 3");
    });
    it("should  be able to tell which day of the week is the most profitable", function(){
        assert.equal('youtube', mostProfitableDepartment(salesData4), "Most profitable department is 'youtube' for dataset 4");
    });

    });