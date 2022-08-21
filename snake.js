const west = {x: -1, y: 0}
const north = {x: 0, y: -1}
const east = {x: 1, y: 0}
const south = {x: 0, y: 1}

const initialState = () => ({
    rows: 20,
    cols: 20,
    snake: [{
        x: 10,
        y: 10
    }],
    moves: [
        east
    ],
    apple: {
        x: rnd(0)(20),
        y: rnd(0)(20)
    },
})

const nextHead = state => state.snake.length === 0
    ? rndPos(state)
    : {
        x: mod(state.cols)(state.snake[0].x + state.moves[0].x),
        y: mod(state.rows)(state.snake[0].y + state.moves[0].y)
    }

const willCrash = state => {
    if (state.snake.find(pointEq(nextHead(state)))) {
        try {
            alert('You lost!\nYour score is ' + (state.snake.length - 1).toString())
        } catch (e) {

        }
    }
    return state.snake.find(pointEq(nextHead(state)))
}

const nextSnake = state => willCrash(state)
    ? []
    : (willEat(state)
        ? [nextHead(state)].concat(state.snake)
        : [nextHead(state)].concat(dropLast(state.snake)))

const nextMoves = state => state.moves.length > 1
    ? dropFirst(state.moves)
    : state.moves

const pointEq = p1 => p2 => p1.x === p2.x && p1.y === p2.y

const willEat = state => pointEq(nextHead(state))(state.apple)

const rndPos = table => ({
    x: rnd(0)(table.cols - 1),
    y: rnd(0)(table.rows - 1)
})

const nextApple = state => willEat(state)
    ? rndPos(state)
    : state.apple

const next = spec({
    rows: prop('rows'),
    cols: prop('cols'),
    snake: nextSnake,
    moves: nextMoves,
    apple: nextApple
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