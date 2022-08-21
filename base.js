const rnd = min => max => Math.floor(Math.random() * max) + min

const objOf = k => v => ({[k]: v})
const map = f => xs => xs.map(f)
const spec = o => x => Object.keys(o).map(k => objOf(k)(o[k](x))).reduce((acc, o) => Object.assign(acc, o))
const prop = k => o => o[k]

const mod = x => y => ((y % x) + x) % x
const dropLast  = xs => xs.slice(0, xs.length - 1)
const dropFirst = xs => xs.slice(1)
const merge     = o1 => o2 => Object.assign({}, o1, o2)

module.exports = {
    rnd,

    objOf,
    map,
    spec,
    prop,

    mod,
    dropLast,
    dropFirst,
    merge,
}