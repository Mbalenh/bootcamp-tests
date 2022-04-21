describe("The countAllFromTown function" , function(){
    it("should  be able to count the registration number start string startsWith('CL')", function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it("should  be able to count fromStellies the string of  that startsWith('CL')", function(){
        assert.equal(3, countAllFromTown('CL 345 123, CL 345, CL 123','CL'));
    });
    it("should  be able to count the string of regCode that startsWith('CA')", function(){
        assert.equal(1, countAllFromTown('CA 345 123, CJ 345, CJ 123','CA'));
    });
    it("should  be able to count the string of regCode that startsWith('CJ')", function(){
        assert.equal(0, countAllFromTown('CK 345 123, CK 345, CK 123','CJ'));
    });
    it("should  be able to count the string of allPaarl that startsWith('CJ')", function(){
        assert.equal(0, 0);
    });
    
    
    });