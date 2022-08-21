const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

let state = initialState()

const x = cols => Math.round(cols * canvas.width / state.cols)
const y = rows => Math.round(rows * canvas.height / state.rows)

const draw = () => {
    context.fillStyle = '#373737'
    context.fillRect(0, 0, canvas.width, canvas.height)
}

draw()