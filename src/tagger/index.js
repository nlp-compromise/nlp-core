const lexicon_step = require('./lexicon-step')
const lexicon_multi = require('./lexicon-multi')
const regex_step = require('./regex-step')

module.exports = function(ts) {
  ts = regex_step(ts)
  ts = lexicon_step(ts)
  ts = lexicon_multi(ts)
  return ts
}
