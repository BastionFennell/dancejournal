import DS from 'ember-data';

var Dance = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  moves: DS.attr()
});

Dance.reopenClass({
  FIXTURES: [
    { id: 'rumba', name: 'Rumba', description: 
    "Rumba is a latin dance, sometimes called 'the dance of love'. It's a slow, rhythmic dance that seems to mostly be about showing off your partner.",
    moves: [{id: "basic", name: "basic"}, {id: "crossover-break", name: "crossover break"}, {id: "hand-to-hand", name: "hand to hand"}]},
    { id: 'salsa', name: 'Salsa', description: 
    "Salsa is a slotted latin dance that's mostly done socially. It's danced real close to one another and has a focus on making the dancers feel either masculine or 'sexy'.",
    moves: [{id: "basic", name: "basic"}, {id: "underarm-turn", name: "underarm turn"}, {id: "cross-body-lead", name: "cross body lead"}]},
    { id: 'jive', name: 'Jive', description: 
    "To me, jive feels like it can't decide whether it's swing or latin. It has bits of both. The basic has the same steps as the basic for east coast swing, the only difference is stylistic. It's danced to fast paced music, and mostly has triple steps and rocksteps.",
    moves: [{id: "basic", name: "basic"}, {id: "underarm-turn", name: "underarm turn"}, {id: "tuck-turn", name: "tuck turn"}]},
    { id: 'jitterbug', name: 'Jitterbug', description: 
    "Jitterbug is pretty much only a social dance, also called single time swing. It's characterized by it's fast upbeat music and excited movements. It's a circular swing, featuring mostly six count moves.",
    moves: [{id: "basic", name: "basic"}, {id: "turning-basic", name: "turning basic"}, {id: "underarm-turn", name: "underarm turn"}]
    },
    { id: 'wcs', name: 'West Coast Swing', description:
      "West coast is one of the more difficult dances. It's a slotted swing that features mostly six count moves. It's one of the more social dances, in fact many competitions are in the form of social dancing. The most unique thing about the dance is how you can add musicality to it and really express the song in ways other dances just can't.",
    moves: [
      {id: "sugar-push", name: "sugar push", video: "KJGrzuTPj2o"},
      {id: "left-side-pass", name: "left side pass", video: "k7D6Uv8Y0E8"},
      {id: "underarm-turn", name: "underarm turn", video: "bSu7QJZ5SLU"}
    ]
    },
    { id: 'two-step', name: 'Two Step', description: 
    "Two step is a country dance that's done a lot both socially and in competitions. It features a timing of 'quick quick slow slow'. Because it's meant to be danced in cowboy boots, the footwork is generally simple, more of a shuffling. Instead, the dance focuses on using different positions and a lot of variations to look and feel good.",
    moves: [{id: "basic", name: "basic"}, {id: "couples-turn", name: "couples turn"}, {id: "underarm-turn", name: "underarm turn"}]},
    { id: 'waltz', name: 'Waltz', description: 
    "Waltz is the dance of royalty. It's characterized by it's drop and rise look as you travel across the dance floor. It's meant to be a dance of nobles, and should look the part.",
    moves: [{id: "closed-changes", name: "closed changes"}]},
    { id: 'tango', name: 'Tango', description: 
    "Tango is an intense dance, sometimes called 'the dance of divorce'. It's a heavily styled dance that moves quickly around the dance floor. It's also one of the few dances where you're not supposed to smile.",
    moves: [{id: "basics-walks", name: "basic walks"}, {id: "closed-promenade", name: "closed promenade"}, {id: "progressive-link", name: "progressive link"}]}
  ]
});

export default Dance;
