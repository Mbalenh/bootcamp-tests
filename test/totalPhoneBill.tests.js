describe("The totalPoneBill function" , function(){
    it("should be able to calculate the total of callBill & smsBill" , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("should be able to calculate the total of smsBill" , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
    it("should be able to calculate the total of callBill & smsBill" , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    // it("should be able to calculate the total of callBill" , function(){
    //     assert.equal('R3.40', totalPhoneBill('call, call'));
    // });
    
    
})