var expect = chai.expect;

describe('MyFunction', function(){
    describe('doSomething',function(){
        it('should join two parameters', function(){
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });

        it('should throw an error if first parameter is not a string', function() {
            expect(function() {
                doSomething(5,5);
            }).to.throw(Error);
        });
    });
});