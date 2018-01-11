const lexicon_step = require('./lexicon-step')
const lexicon_multi = require('./lexicon-multi')
const regex_step = require('./regex-step')
const patterns_step = require('./patterns-step')

module.exports = function(ts) {
  ts = regex_step(ts)
  ts = lexicon_step(ts)
  ts = lexicon_multi(ts)
  //any ad-hoc stuff to do before patterns-step
  if (ts.world.preProcess) {
    ts = ts.world.preProcess(ts)
  }
  //do 'patterns' markov-step here..
  ts = patterns_step(ts)

  //any stuff to do afterwards..
  if (ts.world.postProcess) {
    ts = ts.world.postProcess(ts)
  }
  return ts
}
