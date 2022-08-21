const Snake = require('./snake')

const Matrix = {
    toString: xsxs => xsxs.map(xs => xs.join(' ')).join('\r\n'),
    make: table => rep(rep('.')(table.cols))(table.rows),

    set: val => pos => adjust(pos.y)(adjust(pos.x)(k(val))),
    addSnake: state => pipe(...map(Matrix.set('X'))(state.snake)),
    addApple: state => Matrix.set('o')(state.apple),

    fromState: state => pipe(
        Matrix.make,
        Matrix.addSnake(state),
        Matrix.addApple(state),
    )(state)
}

let State = Snake.initialState()

const show = () => console.log('\x1Bc' + Matrix.toString(Matrix.fromState(State)))

setInterval(() => {
    show()
}, 100)