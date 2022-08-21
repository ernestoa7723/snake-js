const Snake = require('./snake')
const readline = require('readline');

const Matrix = {
    toString: xsxs => xsxs.map(xs => xs.join(' ')).join('\r\n'),
    make: table => rep(rep('.')(table.cols))(table.rows),

    set: val => pos => adjust(pos.y)(adjust(pos.x)(k(val))),
    addSnake: state => pipe(...map(Matrix.set('X'))(state.snake)),
    addApple: state => Matrix.set('O')(state.apple),

    addCrash: state => state.snake.length === 0 ? map(map(k('#'))) : id,

    fromState: state => pipe(
        Matrix.make,
        Matrix.addSnake(state),
        Matrix.addApple(state),
        Matrix.addCrash(state),
    )(state)
}

let State = Snake.initialState()

const show = () => console.log('\x1Bc' + Matrix.toString(Matrix.fromState(State)))

const step = () => State = Snake.next(State)

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') process.exit()
    switch (key.name.toUpperCase()) {
        case 'A': case 'LEFT': State = Snake.enqueue(State, Snake.west); break
        case 'W': case 'UP': State = Snake.enqueue(State, Snake.north); break
        case 'D': case 'RIGHT': State = Snake.enqueue(State, Snake.east); break
        case 'S': case 'DOWN': State = Snake.enqueue(State, Snake.south); break
    }
});

setInterval(() => {
    show()
    step()
}, 100)