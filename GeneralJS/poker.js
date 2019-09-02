/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 * Full house - 3 cards of the same number + 2 cards of the same number
 * A-K-Q-J-10 straight ([10,11,12,13,14])
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  const h1 = {};
  const h2 = {};
  let sum1 = sum2 = 0;
  let high1 = high2 = 0;
  for (let i = 0; i < 5; i++) {
    if (!h1.hasOwnProperty(hand1[i])) h1[hand1[i]] = 0;
    ++h1[hand1[i]]
    sum1 += hand1[i]
    if (hand1[i] > high1) high1 = hand1[i]

    if (!h2.hasOwnProperty(hand2[i])) h2[hand2[i]] = 0;
    ++h2[hand2[i]]
    sum2 += hand2[i]
    if (hand2[i] > high2) high2 = hand2[i]
  }
  console.log(h1, h2)
  console.log(sum1, sum2)
  console.log(high1, high2)
  console.log(Object.keys(h1).reduce((a, b) => parseInt(a)+parseInt(b)))
  console.log(Object.keys(h2).reduce((a, b) => parseInt(a)+parseInt(b)))
  console.log(Math.max(...Object.values(h1)))
  console.log(Math.max(...Object.values(h2)))
  //4-of-a-kind
  if (Math.max(...Object.values(h1)) === 4 && Math.max(...Object.values(h2)) < 4) return "Player 1 wins"
  if (Math.max(...Object.values(h2)) === 4 && Math.max(...Object.values(h1)) < 4) return "Player 2 wins"
  if (Math.max(...Object.values(h1)) === 4 && Math.max(...Object.values(h2)) === 4) {
    Object.entries(h1)
  }

  //full house

  //straight

  //3-of-a-kind

  //2-pair

  //1-pair

  //high card

}

// console.log(poker([3, 5, 5, 5, 2], [4, 6, 7, 8, 8])) //player 1
// console.log(poker([3, 5, 5, 5, 2], [10,11,12,13,14])) //player 2
console.log(poker([3, 5, 5, 5, 5], [10,11,12,13,14])) //player 1
console.log(poker([3, 5, 5, 5, 5], [10,10,10,10,14])) //player 2

module.exports = poker;
