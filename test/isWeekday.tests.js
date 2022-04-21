describe("The isWeekday function" , function(){
    it("should the day of week be 'Monday'" , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it("should not be the day of week be 'Saturday'" , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it("should not be the day of week be 'Sunday'" , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it("should the day of week be 'Thursday'" , function(){
        assert.equal(isWeekday('Thursday'), true);

    });

    it("should the day of week be ''" , function(){
        assert.equal(isWeekday(''), false);

    });

})