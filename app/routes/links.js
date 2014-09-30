import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var links = this.store.find("links", "helpful");
    return links;
  }
});
