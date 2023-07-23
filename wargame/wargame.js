

suits = ['Hearts ', 'Diamonds ', 'Spades ', 'Clubs '];
ranks = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

class Deck {
    constructor() {
        this.deck = []
    }

    addCard() {
        for (let i = 0; i < suits.length; i++) { // iterate through suits
            for (let x = 0; x < ranks.length; x++) { // iterate through ranks
                let card = {
                    suit: suits[i],
                    rank: ranks[x],
                    value: x // assigns a value so I can use it to play the game
                }
                this.deck.push(card)
            }
        }

    }
    shuffleCards(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
}



class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];// leaves it blank to be filled in by givePlayerCards
    }

}

class Game {
    constructor() {
        this.player1 = new Player(prompt('P1 name:'))
        this.player2 = new Player(prompt('P2 name:'))
    }




    givePlayersCards() {
        for (let i = 0; i < 26; i++) { // gathers cards from first 26 of deck
            this.player1.cards.unshift(deck.deck[i]);
        }
        console.log(this.player1.cards)
        for (let i = 26; i < 52; i++) {// gather cards from second 26 of deck
            this.player2.cards.unshift(deck.deck[i]);
        }
        console.log(this.player2.cards)

    }





    playGame() {
        // I want to make a system to randomly select from the players cards and compare them to each other
        //then add that card to the winners pile
        //it must loop till one player has no cards
        //let player1Cards = this.player1.cards
        console.log(this.player1.cards)
        // let player2Cards = this.player2.cards


        /**
         * anywhere you use player1Cards
         * or player2Cards
         * reference the correct place of their cards
         * this.player1.cards
         * this.player2.cards
         * 
         */
        //outside so it can be accessed outside of the loop
        let player1points = 0
        let player2points = 0

        while (this.player1.cards.length > 1 && this.player2.cards.length > 1) {
            let card1 = this.player1.cards.shift()
            let card2 = this.player2.cards.shift()
            console.log(card1.value)
            if (card1.value === card2.value) {
                console.log("It's a tie");
            } else if (card1.value < card2.value) {
                console.log(`${this.player1.name} won this round!`)
                player1points += 1
                console.log(player1points)
            } else {
                player2points += 1
                console.log(player2points)
                console.log(`${this.player2.name} won this round!`)
            }


        }
        //runs after the while loop to gather info from it
        if (this.player1.cards.length > 0) {
            console.log(`${this.player1.name} won the game with ${player1points} points!!!!`);
        } else {
            console.log(`${this.player2.name} won the game with ${player2points} points!!!!`);
        }


    }


}




let deck = new Deck
deck.addCard()
deck.shuffleCards(deck.deck)
console.log(deck.deck)


let game = new Game()
//game.start()
//game.getCard(0)
game.givePlayersCards()
game.playGame()

// let card1 = game.getCard(0)
// let card2 = game.getCard(1)
// console.log(card1.value)


//I need to gather the names of every card
/*
The ranking for cards in War from highest to lowest is
A K Q J T (10) 9 8 7 6 5 4 3 2. 
Nothing beats an Ace and a 2 beats nothing.


compare which card is higher

war happens when cards are the same.
when war happens you flip over 4 cards and the highest fourth card wins


when someone get all the cards they win

*/
