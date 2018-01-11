'use strict';
//apply the regexes from the plugin (in ts.world)
const punctuation_step = function(ts) {
  let rules = ts.world.regex || [];
  ts.terms.forEach((t, o) => {
    let str = t.text;
    //ok, normalise it a little,
    str = str.replace(/[,\.\?]$/, '');
    //do punctuation rules (on t.text)
    for (let i = 0; i < rules.length; i++) {
      let r = rules[i];
      if (r.reg.test(str) === true) {
        //don't over-write any other known tags
        if (t.canBe(r.tag)) {
          t.tag(r.tag, 'punctuation-rule- "' + r.reg.toString() + '"');
        }
        return;
      }
    }
  });
  return ts;
};

module.exports = punctuation_step;
