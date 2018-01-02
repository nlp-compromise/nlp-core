'use strict';
//a Text is an array of termLists
const getters = require('./getters');

function Text(arr, world, original) {
  this.list = arr || [];
  if (typeof world === 'function') {
    world = world();
  }
  this.world = () => {
    return world;
  };
  this.original = original;
  //apply getters
  let keys = Object.keys(getters);
  for (let i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], {
      get: getters[keys[i]]
    });
  }
}
module.exports = Text;

Text.addMethods = function(cl, obj) {
  let fns = Object.keys(obj);
  for (let i = 0; i < fns.length; i++) {
    cl.prototype[fns[i]] = obj[fns[i]];
  }
};

//one subset we'll keep from en-version
require('./terms-subset')(Text)


//apply instance methods
require('./methods/misc')(Text);
require('./methods/loops')(Text);
require('./methods/match')(Text);
require('./methods/out')(Text);
require('./methods/sort')(Text);
require('./methods/split')(Text);
require('./methods/normalize')(Text);

//aliases
Text.prototype.words = Text.prototype.terms;
