import DS from 'ember-data';

var Dance = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.belongsTo('type', {async: true}),
  description: DS.attr('string'),
  notes: DS.attr('string'),
  moves: DS.hasMany("move", {async: true})
});

Dance.reopenClass({
  FIXTURES: [
    { id: 'rumba', name: 'Rumba', type: "latin", description: 
    "Rumba is a latin dance, sometimes called 'the dance of love'. It's a slow, rhythmic dance that seems to mostly be about showing off your partner.",
    moves: ["r-basic", "r-crossover-break", "r-hand-to-hand", "r-side-by-side", "r-fan", "r-tuck-turn"]
    },
    { id: "cha-cha", name: "Cha Cha", type: "latin",
      description: "Cha cha is a lot like Rumba, with a triple step. It's a higher energy dance than Rumba, and is a bit more playful and flirtatious than the dance of love.",
  moves: ["cc-basic", "cc-crossover-break", "cc-underarm-turn"]},
  { id: "samba", name: "Samba", type: 'latin',
    description: "Samba is a fast paced high energy dance, easily identified by it's signature bounce and an emphasis on the down beat.",
  moves: ['sm-natural-basic', 'sm-reverse-basic', 'sm-side-basic', 'sm-box-basic', 'sm-turning-box', 'sm-extended-basic']},
    { id: 'salsa', name: 'Salsa', type: "social", description: 
    "Salsa is a slotted latin dance that's mostly done socially. It's danced real close to one another and has a focus on making the dancers feel either masculine or 'sexy'.",
    moves: ["sa-basic", "sa-underarm-turn", "sa-cross-body-lead", "sa-back-spot-turn", "sa-cross-body-lead-with-inside-turn", "sa-back-spot-turn-with-inside-turn"]
    },
    { id: 'jive', name: 'Jive', type: "latin", description: 
    "To me, jive feels like it can't decide whether it's swing or latin. It has bits of both. The basic has the same steps as the basic for east coast swing, the only difference is stylistic. It's danced to fast paced music, and mostly has triple steps and rocksteps.",
    moves: ["j-basic", "j-underarm-turn", "j-tuck-turn", "j-waist-roll", "j-throw-away"]
    },
    { id: 'jitterbug', name: 'Jitterbug', type: "social", description:
    "Jitterbug is pretty much only a social dance, also called single time swing. It's characterized by it's fast upbeat music and excited movements. It's a circular swing, featuring mostly six count moves.",
    moves: ["jt-basic", "jt-turning-basic", "jt-underarm-turn", "jt-cuddle", "jt-cuddle-switches", "jt-hammer-lock", "jt-pretzel", "jt-she-goes-he-goes", "jt-dip", "jt-kick-steps"]
    },
    { id: 'wcs', name: 'West Coast Swing', type: "social", description:
      "West coast is one of the more difficult dances. It's a slotted swing that features mostly six count moves. It's one of the more social dances, in fact many competitions are in the form of social dancing(called 'Jack and Jill's). The most unique thing about the dance is how you can add musicality to it and really express the song in ways other dances just can't.",
    notes: "As with all dances, the basics are important in this dance. The two big ones here are your anchor step and your connection. The last triple step in any pattern is the anchor step. It's always done in place and is helpful to give the leader a moment to think and the follower a moment to collect herself. The connection is even more important. During the entire dance, the connection should feel springy. Both the leader and the follower should be able to feel each other and easily feel small movements as the leader moves the follower into the next step.",
    moves: ["wcs-sugar-push", "wcs-left-side-pass", "wcs-underarm-turn", "wcs-spinning-left-side-pass", "wcs-sugar-tuck", "wcs-basket-whip", "wcs-closed-whip", "wcs-closed-whip-with-turn", "wcs-left-side-tuck-turn", "wcs-left-side-free-spin", "wcs-sweetheart-swivels"]
    },
    { id: 'two-step', name: 'Two Step', type: "country", description: 
    "Two step is a country dance that's done a lot both socially and in competitions. It features a timing of 'quick quick slow slow'. Because it's meant to be danced in cowboy boots, the footwork is generally simple, more of a shuffling. Instead, the dance focuses on using different positions and a lot of variations to look and feel good.",
    moves: ["ts-basic", "ts-basic-turn", "ts-underarm-turn", "ts-outside-turn", "ts-inside-turn-to-wrap", "ts-inside-turn-from-wrap", "ts-inside-turn-to-promenade"]
    },
    { id: "nightclub", name: "Nightclub Two Step", type: "country", description:
      "Nightclub two step is a nice slow dance, perfect for those slow country songs that regular two step just doesn't really make sense for. It's time signature is slow-quick-quick, so it works on four beats rather than the six beats normal two step uses. It also doesn't travel line of dance, it's danced mostly in place. It's a popular dance to learn for weddings and a great social dance as well.",
      moves: ["nts-basic", "nts-promenade-passes", "nts-promenade-passes-with-ladies-turn"]
    },
    { id: "triple-two-step", name: "Triple Two Step", type: "country", description:
      "Triple two is a 6 count country dance. The steps are triple step, triple step, walk, walk. This gives you 8 weight changes in six beats of music.",
      moves: ["tt-lady's-flair", "tt-right-turning-loop", "tt-left-turning-loop", "tt-man's-flair", "tt-turning-loops-with-lady's-turns"]
    },
    { id: 'waltz', name: 'Waltz', type: "standard", description: 
    "Waltz is the dance of royalty. It's characterized by it's drop and rise look as you travel across the dance floor. It's meant to be a dance of nobles, and should look the part.",
    moves: ["iw-closed-changes", "iw-chasse-to-whisk", "iw-natural-turn", "iw-reverse-turn", "iw-reverse-turn-outside-partner", "iw-hesitation-change"]
    },
    { id: 'viennese-waltz', name: 'Viennese Waltz', type: "standard", description: 
    "This is a faster, simpler version of waltz. When I say faster, I mean A LOT faster. Like, so fast the whole syllabus only has seven moves in it. It's a lot of fun, and can be danced to a lot of different genres, such as Kiss from a Rose by Seal, and Nothing Else Matters by Metallica.",
    moves: ["vw-closed-changes", "vw-natural-turn", "vw-reverse-turn", "vw-fleckerl", "vw-reverse-fleckerl"]
    },
    { id: 'tango', name: 'Tango', type: "standard", description: 
    "Tango is an intense dance, sometimes called 'the dance of divorce'. It's a heavily styled dance that moves quickly around the dance floor. It's also one of the few dances where you're not supposed to smile.",
    moves: ["it-basic-walks", "it-closed-promenade", "it-progressive-link", "it-progressive-side-step", "it-rock-turn"]
    },
    { id: 'foxtrot', name: "Foxtrot", type: 'standard',
      description: "When I was introduced to foxtrot, it was jokingly called lazy waltz. Foxtrot bears a lot of similarities to waltz, it has a rise and fall action and some of the steps are similar. However, it's danced to faster music, so while the patterns are simpler, the added speed makes them just as difficult to master. It's characterized by it's wave sort of look as it crosses the floor, rather than the dramatic rise and fall of waltz.",
      moves: ["f-three-step", "f-feather-step", "f-natural-turn"]
    },
    { id: 'quickstep', name: "Quickstep", type: 'standard',
      description: "As you could probably gather from the name, quickstep is a very high tempo style of dance. The moves are fairly simple, but the technique is difficult when you're moving so fast. It travels across the floor quickly and is very hard to dance socially, but it's still a rewarding dance that feels good when done correctly.",
      moves: ["q-forward-lock", "q-progressive-chasse", "q-natural-turn", "q-reverse-lock"]}
  ]
});

export default Dance;
