import DS from 'ember-data';

var link = DS.Model.extend({
  group: DS.belongsTo("links", {async: true}),
  src: DS.attr("string"),
  description: DS.attr("string"),
  name: DS.attr("string")
});

link.reopenClass({
  FIXTURES: [
    {id: "ballroomdancers", name: "Ballroom Dancers", src: "http://ballroomdancers.com/", description: "A good source for beginners, if you register you can get examples of the beginner steps for a large collection of dances. It costs money to get access to the more advanced stuff, but by the time you get there you'll probably already be taking classes that teach that kind of thing.", group: "helpful"},
  {id: "ucwdc", name: "United Country Western Dance Council",
  src: "http://www.ucwdc.org/syllabus/",
  description: "Another good source for beginners. This link is to a syllabus that contains a collection of moves that beginners for each of the country dances should know. It also includes video demonstrations for each move",
  group: "helpful"}
]
});

export default link;
