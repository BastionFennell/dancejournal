import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var move = this.modelFor("dance").get("moves").findBy("id", params.move_id);
    if(move.video){
      move.videoSrc = "//www.youtube.com/embed/" + move.video;
    }
    return move;
  }
});
