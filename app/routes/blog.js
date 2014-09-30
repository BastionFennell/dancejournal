import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var post = this.store.find("post");
    return post;
  }
});
