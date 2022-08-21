const initialState = () => ({
    rows: 20,
    cols: 20,
    snake: [
        {
            x: rnd(0)(20),
            y: rnd(0)(20)
        }
    ],
})

module.exports = {
    initialState,
}