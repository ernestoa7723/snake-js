const rnd = min => max => Math.floor(Math.random() * max) + min

const objOf = k => v => ({[k]: v})
const map = f => xs => xs.map(f)
const spec = o => x => Object.keys(o).map(k => objOf(k)(o[k](x))).reduce((acc, o) => Object.assign(acc, o))
const prop = k => o => o[k]

module.exports = {
    rnd,

    objOf,
    map,
    spec,
    prop,
}