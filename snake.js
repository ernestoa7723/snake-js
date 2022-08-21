const west = {x: -1, y: 0}
const north = {x: 0, y: -1}
const east = {x: 1, y: 0}
const south = {x: 0, y: 1}

const initialState = () => ({
    rows: 20,
    cols: 20,
    snake: [
        {
            x: 10,
            y: 10
        }
    ],
    moves: [east],
})

const nextHead = state => ({
        x: mod(state.cols)(state.snake[0].x + state.moves[0].x),
        y: mod(state.rows)(state.snake[0].y + state.moves[0].y)
    })

const nextSnake = state => [nextHead(state)].concat(dropLast(state.snake))

const nextMoves = state => state.moves.length > 1
    ? dropFirst(state.moves)
    : state.moves

const next = spec({
    rows: prop('rows'),
    cols: prop('cols'),
    snake: nextSnake,
    moves: nextMoves,
})

const validMove = move => state => state.moves[0].x + move.x !== 0 || state.moves[0].y + move.y !== 0

const enqueue = (state, move) => validMove(move)(state)
    ? merge(state)({moves: state.moves.concat([move])})
    : state

module.exports = {
    initialState,

    next,
    enqueue,
    west,
    north,
    east,
    south,
}