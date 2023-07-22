class Card {
    constructor(suit, value) {
        this.suit = suit
        this.rank = rank
        this.value = value

    }
}

suits = ['Hearts ', 'Diamonds ', 'Spades ', 'Clubs '];
ranks = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

class Deck {
    constructor() {
        this.deck = []
    }

    addCard() {
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < ranks.length; x++) {
                let card = {
                    suit: suits[i],
                    rank: ranks[x],
                    value: x
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

    addCardFromDeck() {
    }

}

class Game {
    constructor() {
        this.player1 = new Player(prompt('P1 name:'))
        this.player2 = new Player(prompt('P2 name:'))
    }


    start() {
        // for (let i = 1; i < 3; i++) {///gathers name of players by using a loop till all names are gathered
        //     let player = prompt(`Enter name of Player ${i}`)
        //     this.players.push(new Player(player))
        // }
        //now I need to give out cards

        this.givePlayersCards()
    }




    givePlayersCards() {
        // let player1 = this.players[0].cards
        for (let i = 0; i < 26; i++) {
            this.player1.cards.push(deck.deck[i]);
        }
        console.log(this.player1.cards)
        // let player2 = this.players[1].cards
        for (let i = 27; i < 53; i++) {
            this.player2.cards.push(deck.deck[i]);
        }
        console.log(this.player2.cards)
        //now to start the game
        this.playGame()
    }

    // getCard(playerIndex) {
    //     let x = Math.floor(Math.random() * this.players[playerIndex].cards.length);
    //     let card = this.players[playerIndex].cards[x];
    //     return card;
    // }s






    playGame() {
        // I want to make a systcem to randomly select from the players cards and compare them to each other
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


        while (this.player1.cards.length > 1 && this.player2.cards.length > 1) {
            let card1 = this.player1.cards.shift()
            let card2 = this.player2.cards.shift()
            console.log(card1.value)
            if (card1.value == card2.value) {
                console.log("It's a tie");
                console.log(this.player1.name + this.player1.cards)
                console.log(this.player2.name + this.player2.cards)
            } else if (card1.value < card2.value) {
                //player2Cards = player2Cards.filter(item => item !== card2)
                console.log(`${this.player1.name} won this round!`)
                console.log(this.player1.name + this.player1.cards)
                console.log(this.player2.name + this.player2.cards)
            } else {
                //player1Cards = player1Cards.filter(item => item !== card1)
                console.log(`${this.player2.name} won this round!`)
                console.log(this.player1.name + this.player1.cards)
                console.log(this.player2.name + this.player2.cards)
            }


        }
        if (this.player1.cards.length > this.player2.cards.length) {
            console.log(`${this.player1.name} won the game!!!!`);
        } else {
            console.log(`${this.player2.name} won the game!!!!`);
        }

    }

    // removeCardFrom1() {
    //     let player1Cards = this.player1.cards
    //     player1Cards = player1Cards.filter(item => item !== card1)
    //     console.log(`${this.player1.name} won this round!`)
    // }

    // removeCardFrom2() {
    //     let player2Cards = this.player2.cards
    //     player2Cards = player2Cards.filter(item => item !== card2)
    //     console.log(`${this.player2.name} won this round!`)
    // }

}




let deck = new Deck
deck.addCard()
deck.shuffleCards(deck.deck)
console.log(deck.deck)


let game = new Game()
game.start()
//game.getCard(0)
//game.playGame()

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
