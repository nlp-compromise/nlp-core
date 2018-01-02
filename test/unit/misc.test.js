var test = require('tape')
var nlp = require('./lib/nlp')

//make sure it can handle garbage inputs
test('garbage:', function(t) {
  var garbage = ['', '  ', null, '\n\n', [], {}]
  garbage.forEach(function(g, i) {
    var num = nlp(g).list.length
    var msg = typeof g + ' text input #' + i
    t.equal(num, 0, msg)
  })
  var str = nlp(2).out()
  t.equal(str, '2', 'integer-casted')
  str = nlp(2.2).out()
  t.equal(str, '2.2', 'float-casted')

  //garbage in lexicon too
  str = nlp('hello', null).out()
  t.equal(str, 'hello', 'null-lexicon')

  str = nlp('hello', 2).out()
  t.equal(str, 'hello', 'int-lexicon')
  t.end()
})

test('extra exports:', function(t) {
  t.ok(nlp.version, 'version number exported')

  t.doesNotThrow(function() {
    nlp.verbose(true)
    nlp.verbose(false)
  }, 'can set verbosity')

  t.end()
})
