$(document).ready(function() {
  var deck = [];
  var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
  var cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  
  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      deck.push(card + " of " + suit);
    });
  });
  
  deck.forEach(function(order) {
    $(".cards").append("<li>" + order);
  });
  alert("Let's view the deck!");
});