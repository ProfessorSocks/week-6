class Card{
    constructor(suit,num){
        this.suit = suit
        this.num = num

    }
}

suits = ['Hearts ', 'Diamonds ', 'Spades ', 'Clubs '];
values = ['Ace','King', 'Queen', 'Jack', '10' , '9', '8', '7', '6', '5', '4', '3', '2'];

class Deck{
    constructor(){
        this.deck = []
    }

    addCard(){
        for(let suit of suits){
            for(let value of values){
                this.deck.push(suit + value);
            }
        }
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.cards = [];// leaves it blank to be filled in by givePlayerCards
    }

    addCardFromDeck(){

    }

}

class Game{
    constructor(numOfPlayer){//change players in start to numOfPlayer
        this.numOfPlayer = numOfPlayer
        this.players = []
    }
    

    start(){
        let deck = new Deck
        deck.addCard
        this.numOfPlayer = prompt('Enter number of players')
        if(this.numOfPlayer <= 4 && this.numOfPlayer > 0){
            for(let i = 1;i <= this.numOfPlayer; i++ ){
                let namePlayer = prompt(`Enter name of player ${i}`);
                this.players.push(new Player(namePlayer));
            }
            //I need to shuffle the cards before I give out the cards to players
            this.shuffleCards(deck.deck);
            

            
        }

    }

    shuffleCards(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }      
        return array;
    }


    givePlayerCards(){
        // trying determine how many cards to each player
        eachPlayerCards = 52 / this.numOfPlayer
        Math.floor(eachPlayerCards)
        

        //now I need to determine how to give out cards to each players 
        for(let player of players){
            for(i = 0; i < eachPlayerCards; i++){
                player.cards.push(deck.deck[Math.random()*52])
            }
        }
        
         

    }


}

let game = new Game()
game.start()


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
