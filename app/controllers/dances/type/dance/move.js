import Ember from 'ember';

export default Ember.ObjectController.extend({
  videoSrc: function(){
    if(this.get("hasVideo")){
      return "//www.youtube.com/embed/" + this.get("model.video");
    }
  }.property("hasVideo", "model"),
  hasVideo: function(){
    return !!this.get("model.video");
  }.property("model")
});
