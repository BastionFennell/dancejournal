import DS from 'ember-data';

var links = DS.Model.extend({
  links: DS.hasMany("link", {async: true})
});

links.reopenClass({
  FIXTURES: [
    {id: "helpful", links: ["ballroomdancers", "ucwdc"]}
]
});

export default links;
