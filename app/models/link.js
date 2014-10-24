import DS from 'ember-data';

var link = DS.Model.extend({
  group: DS.attr('string'),
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
  group: "helpful"},
  {id: "istd-standard", name: "International Standard Dance Syllabus", src: "http://www.wright-house.com/dance/istd-international-standard-syllabus-ballroom-dance.html",
    description: "The ISTD (Imperial Society of Teachers of Dancing) syllabus is a widely recognized standard syllabus. The syllabus lists the patterns allowed at various competitive levels, from prebronze to gold.",
    group: "helpful"},
  {id: "istd-latin", name: "International Latin Dance Syllabus", src: "http://www.wright-house.com/dance/istd-international-latin-syllabus-ballroom-dance.html",
    description: "This is the ISTD syllabus for latin rather than standard. It also lists the accepted patterns for latin dances.",
    group: "helpful"},
  {id: "ndca", name: "National Dance Council of America",
    description: "Another widely recognized dance syllabus, this is the accepted moves and figures for standard, latin, smooth, and rhythm for 2014.",
  group: 'helpful'}
]
});

export default link;
