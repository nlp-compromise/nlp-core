//patterns are .match() statements to be run after the tagger
const patterns_step = function(ts) {
  const patterns = ts.world.patterns;
  Object.keys(patterns).forEach((k) => {
    ts.match(k).tag(patterns[k], 'patterns-step: ' + k);
  });
  return ts;
};

module.exports = patterns_step;
