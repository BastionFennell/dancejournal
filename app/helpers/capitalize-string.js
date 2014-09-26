import Ember from 'ember';

function capitalizeString(value) {
  return value.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
}

export {
  capitalizeString
};

export default Ember.Handlebars.makeBoundHelper(capitalizeString);
