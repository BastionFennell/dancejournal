import DS from 'ember-data';

var type = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dances: DS.hasMany("dance", {async: true})
});

type.reopenClass({
  FIXTURES:[
  {id: 'standard', name: 'standard',
  description: "Standard, an international category, is a category of very competitive dances. They feature heavy technique, and emphasize looking right. They are generally danced in closed position, and the position you start in is maintained throughout the entire dance. You can see each dance for examples of the dance, and you can get a commonly used syllabus from the helpful links section.",
  dances: ["waltz", "tango", "viennese-waltz", "foxtrot", "quickstep"]},
  {id: 'latin', name: 'latin',
  description: "Latin is an international category full of dances known for their expressiveness and energy. Each dance is very unique, but similar in the fact that they're intense. You can see each dance for examples of the dance, and you can get a commonly used syllabus from the helpful links section.",
  dances: ["rumba", "jive", "cha-cha", "samba"]},
  {id: 'country', name: "country",
  description: "Country dances are well known for being danced both socially and competitively in equal amounts. Meant to be danced to country music and in boots, the technique ranges from shuffling to the beat in cowboy boots to pointing your foot in fancy dancing boots for competitions. You can see each dance for examples of the dance, and you can get a commonly used syllabus from the helpful links section.",
  dances: ['two-step', 'nightclub', 'triple-two-step']},
  {id: 'social', name: 'social',
  description: "Although the dances in this section can be danced competitively, they're here because their main focus is social dancing. That description includes most swing dances, salsa, and a couple of others. These dances are intended to be danced for fun and to get to know people, so the focus is on lead-follow and making the dance and partnership feel good.",
  dances: ['jitterbug', 'salsa', 'wcs']}
]
});

export default type;
