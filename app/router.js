import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('dances', {path: "dances/"}, function(){
    this.route('index', {path: "/"});
    this.route('type', {path: ":type"}, function(){
      this.route('dance', {path: ":id"}, function(){
        this.route('move', {path: ":move_id"});
      });
    });
  });
  this.route('links');
  this.resource('blog', function(){
    this.route('index', {path: "/"});
    this.route('post', {path: ":post_id"});
  });
});

export default Router;
