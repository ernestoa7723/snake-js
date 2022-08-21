const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

let state = initialState()

const x = cols => Math.round(cols * canvas.width / state.cols)
const y = rows => Math.round(rows * canvas.height / state.rows)

const draw = () => {
    context.fillStyle = '#373737'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = '#00ff37'
    state.snake.map(p => context.fillRect(x(p.x), y(p.y), x(1), y(1)))
}

const step = t1 => t2 => {
    if (t2 - t1 > 150) {
        draw()
        window.requestAnimationFrame(step(t2))
    } else {
        window.requestAnimationFrame(step(t1))
    }
}

window.requestAnimationFrame(step(0))