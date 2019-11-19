const _ = require('lodash')
const {
    PLACE_CARD,
    REMOVE_CARDS,
    GAME_OVER,
    WINNER,

    createInitialState,
    playTurn,
    isFaceCard,
    getAllValidMoves,
    playGame
} = require('../src/game')

it('should create a new instance of the game', () => {
    const state = createInitialState({shuffleTimes: 0})
    expect(state.board).toEqual(Array(16).fill(null))
    expect(state.deck.length).toBe(52)
    expect(state.removedCards.length).toBe(0)
    expect(state.phase).toBe(PLACE_CARD)
})

it('should play PLACE_CARD action', () => {
    const initialState = createInitialState({shuffleTimes: 0})
    const action = {
        type: PLACE_CARD,
        index: 0
    }
    const state = playTurn(initialState, action)
    expect(state.board[0]).toEqual(_.last(initialState.deck))
    expect(state.deck.length).toBe(51)
    expect(state.removedCards.length).toBe(0)
    expect(state.phase).toBe(PLACE_CARD)
})

// it('should resolve state to GAME_OVER', () => {
//     const state = {
//         "board": [
//             {
//                 "suit": "clubs",
//                 "value": "K"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "Q"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "6"
//             },
//             null,
//             {
//                 "suit": "hearts",
//                 "value": "J"
//             },
//             null,
//             {
//                 "suit": "clubs",
//                 "value": "5"
//             },
//             {
//                 "suit": "spades",
//                 "value": "A"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "2"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "6"
//             },
//             null,
//             {
//                 "suit": "clubs",
//                 "value": "J"
//             },
//             {
//                 "suit": "spades",
//                 "value": "K"
//             },
//             {
//                 "suit": "spades",
//                 "value": "Q"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "Q"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "7"
//             }
//         ],
//         "deck": [
//             {
//                 "suit": "spades",
//                 "value": "J"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "3"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "9"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "9"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "8"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "8"
//             },
//             {
//                 "suit": "spades",
//                 "value": "2"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "9"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "Q"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "2"
//             },
//             {
//                 "suit": "spades",
//                 "value": "5"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "A"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "7"
//             },
//             {
//                 "suit": "spades",
//                 "value": "7"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "3"
//             },
//             {
//                 "suit": "spades",
//                 "value": "3"
//             },
//             {
//                 "suit": "spades",
//                 "value": "4"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "7"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "K"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "10"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "4"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "A"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "K"
//             },
//             {
//                 "suit": "spades",
//                 "value": "8"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "3"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "J"
//             }
//         ],
//         "removedCards": [
//             {
//                 "suit": "hearts",
//                 "value": "4"
//             },
//             {
//                 "suit": "spades",
//                 "value": "6"
//             },
//             {
//                 "suit": "spades",
//                 "value": "10"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "2"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "8"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "A"
//             },
//             {
//                 "suit": "spades",
//                 "value": "9"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "5"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "5"
//             },
//             {
//                 "suit": "clubs",
//                 "value": "10"
//             },
//             {
//                 "suit": "diamonds",
//                 "value": "4"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "6"
//             },
//             {
//                 "suit": "hearts",
//                 "value": "10"
//             }
//         ],
//         "phase": "PLACE_CARD"
//     }
//     const moves = getAllValidMoves(state)
//     expect(moves.length).toBeGreaterThan(0)
// })

//[
//   {
//     "type": "PLACE_CARD",
//     "index": 5
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 8
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 15
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 1
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 4
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 2
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 7
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 9
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 13
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 14
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 12
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 3
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 6
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 11
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 0
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 10
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 5
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 0
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 6,
//     "index2": 13
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 8,
//     "index2": 10
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 0
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 13
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 10
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 5
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 8
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 6
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 8,
//     "index2": 13
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 10,
//     "index2": 15
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 0
//   },
//   {
//     "type": "REMOVE_CARDS",
//     "index1": 5,
//     "index2": 7
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 7
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 5
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 8
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 15
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 0
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 13
//   },
//   {
//     "type": "PLACE_CARD",
//     "index": 10
//   }
// ]

it('should resolve state to GAME_OVER', () => {
    const state = {
        "board": [
            {
                "suit": "clubs",
                "value": "A"
            },
            {
                "suit": "clubs",
                "value": "Q"
            },
            {
                "suit": "diamonds",
                "value": "A"
            },
            {
                "suit": "clubs",
                "value": "K"
            },
            {
                "suit": "diamonds",
                "value": "J"
            },
            {
                "suit": "diamonds",
                "value": "2"
            },
            {
                "suit": "spades",
                "value": "4"
            },
            {
                "suit": "clubs",
                "value": "2"
            },
            {
                "suit": "hearts",
                "value": "A"
            },
            {
                "suit": "diamonds",
                "value": "4"
            },
            null,
            {
                "suit": "spades",
                "value": "2"
            },
            {
                "suit": "hearts",
                "value": "K"
            },
            {
                "suit": "hearts",
                "value": "Q"
            },
            {
                "suit": "spades",
                "value": "Q"
            },
            {
                "suit": "spades",
                "value": "K"
            }
        ],
        "deck": [
            {
                "suit": "clubs",
                "value": "7"
            },
            {
                "suit": "clubs",
                "value": "6"
            },
            {
                "suit": "hearts",
                "value": "9"
            },
            {
                "suit": "diamonds",
                "value": "6"
            },
            {
                "suit": "clubs",
                "value": "3"
            },
            {
                "suit": "clubs",
                "value": "J"
            },
            {
                "suit": "diamonds",
                "value": "9"
            },
            {
                "suit": "hearts",
                "value": "7"
            },
            {
                "suit": "spades",
                "value": "A"
            },
            {
                "suit": "hearts",
                "value": "4"
            },
            {
                "suit": "diamonds",
                "value": "8"
            },
            {
                "suit": "spades",
                "value": "9"
            },
            {
                "suit": "clubs",
                "value": "9"
            },
            {
                "suit": "spades",
                "value": "5"
            },
            {
                "suit": "spades",
                "value": "10"
            },
            {
                "suit": "hearts",
                "value": "6"
            },
            {
                "suit": "diamonds",
                "value": "K"
            },
            {
                "suit": "spades",
                "value": "J"
            },
            {
                "suit": "diamonds",
                "value": "Q"
            },
            {
                "suit": "hearts",
                "value": "J"
            },
            {
                "suit": "spades",
                "value": "8"
            },
            {
                "suit": "hearts",
                "value": "8"
            },
            {
                "suit": "hearts",
                "value": "5"
            },
            {
                "suit": "diamonds",
                "value": "3"
            }
        ],
        "removedCards": [
            {
                "suit": "clubs",
                "value": "10"
            },
            {
                "suit": "diamonds",
                "value": "10"
            },
            {
                "suit": "diamonds",
                "value": "7"
            },
            {
                "suit": "hearts",
                "value": "3"
            },
            {
                "suit": "spades",
                "value": "7"
            },
            {
                "suit": "spades",
                "value": "3"
            },
            {
                "suit": "clubs",
                "value": "4"
            },
            {
                "suit": "spades",
                "value": "6"
            },
            {
                "suit": "clubs",
                "value": "8"
            },
            {
                "suit": "hearts",
                "value": "2"
            },
            {
                "suit": "hearts",
                "value": "10"
            },
            {
                "suit": "clubs",
                "value": "5"
            },
            {
                "suit": "diamonds",
                "value": "5"
            }
        ],
        "phase": "PLACE_CARD"
    }
    const nextState = playTurn(state, {
        type: PLACE_CARD,
        index: 10
    })
    expect(nextState.phase).toBe(GAME_OVER)
})

it('should resolve state to WINNER', () => {
    const randomNextAction = state => {
        const moves = getAllValidMoves(state)
        return moves[_.random(moves.length - 1)]
    }

    const state = createInitialState({shuffleTimes: 0})
    state.deck = _.sortBy(state.deck, card => isFaceCard(card) ? 1 : 0)

    const result = playGame(randomNextAction, state)

    expect(result.finalState.phase).toBe(WINNER)
})