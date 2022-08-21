const Snake = require('./snake')


const Matrix = {
    toString: xsxs => xsxs.map(xs => xs.join(' ')).join('\r\n'),
    make: table => rep(rep('.')(table.cols))(table.rows),
    fromState: state => pipe(
        Matrix.make,
    )(state)
}

let State = Snake.initialState()

const show = () => console.log('\x1Bc' + Matrix.toString(Matrix.fromState(State)))

setInterval(() => {
    show()
}, 100)