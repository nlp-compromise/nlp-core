'use strict';
// const Text = require('../text');
const Terms = require('../paths').Terms;

//the Terms() subset class
//this is just a wrapper around the actual Term class,
//which is buried in `ts.terms[0]`
const methods = {
  data: function() {
    return this.list.map(ts => {
      let t = ts.terms[0];
      return {
        spaceBefore: t.whitespace.before,
        text: t.text,
        spaceAfter: t.whitespace.after,
        normal: t.normal,
        implicit: t.silent_term,
        bestTag: t.bestTag(),
        tags: Object.keys(t.tags)
      };
    });
  }
};



module.exports = function(Text) {
  Text.prototype.terms = function() {
    let list = [];
    let r = this
    //make a Terms Object for every Term
    r.list.forEach(ts => {
      ts.terms.forEach(t => {
        list.push(new Terms([t], ts.world, r));
      });
    });
    r = new Text(list, r.world, r.parent);
    if (typeof n === 'number') {
      r = r.get(n);
    }
    return r;
  }
}
