var s9a = require("./s9a")
var assert = require("assert")
var variants = "synesthesia|synaesthesia|sinestesia|synesthésie|synesth&eacute;sie".split("|")
var digit = "1"
var letter = "a"
var dot = "."
var space = " "

assert.equal(s9a(""), "")
assert.equal(s9a(space), space)
assert.equal(s9a(letter), letter)

function test(v) {
  assert.equal(s9a(v), "s9a")
  assert.equal(s9a(dot + v), dot + "s9a")
  assert.equal(s9a(v + dot), "s9a" + dot)
  assert.equal(s9a(letter + v), letter + v)
  assert.equal(s9a(digit + v), digit + v)
  assert.equal(s9a(v + letter), v + letter)
  assert.equal(s9a(v + digit), v + digit)
  assert.equal(s9a(space + v), space + "s9a")
  assert.equal(s9a(v + space), "s9a" + space)
  assert.equal(s9a(v + space + v), "s9a" + space + "s9a")
}

variants.forEach(function(v) {
  test(v)
  test(v.toLowerCase())
  test(v.toUpperCase())
})
