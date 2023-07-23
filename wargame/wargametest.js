var expect = chai.expect;

describe('player', function () {
    describe('Check player name', function () {
        it('should check if player name is george', function () {
            var x = new Player('george');
            expect(x.name).to.equal('george');
        })
    })
})