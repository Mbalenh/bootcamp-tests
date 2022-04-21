describe("greet function", function(){
    it("should greet Mbali with 'Hello, Mbali'" , function(){
        assert.equal(greet('Mbali'), 'Hello, Mbali')
    });
    it("should greet khanya with 'Hello, Khanya'" , function(){
        assert.equal(greet('Khanya'), 'Hello, Khanya')
    });
    it("should greet you with 'Hello, you'" , function(){
        assert.equal(greet('you'), 'Hello, you')
    });
    it("should greet  with 'Hello,you '" , function(){
        assert.equal(greet('you'), 'Hello, you')
    });
});
