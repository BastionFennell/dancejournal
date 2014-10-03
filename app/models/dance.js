import DS from 'ember-data';

var Dance = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  notes: DS.attr('string'),
  moves: DS.hasMany("move", {async: true})
});

Dance.reopenClass({
  FIXTURES: [
    { id: 'rumba', name: 'Rumba', description: 
    "Rumba is a latin dance, sometimes called 'the dance of love'. It's a slow, rhythmic dance that seems to mostly be about showing off your partner.",
    moves: ["r-basic", "r-crossover-break", "r-hand-to-hand", "r-side-by-side", "r-fan", "r-tuck-turn"]
    },
    { id: 'salsa', name: 'Salsa', description: 
    "Salsa is a slotted latin dance that's mostly done socially. It's danced real close to one another and has a focus on making the dancers feel either masculine or 'sexy'.",
    moves: ["sa-basic", "sa-underarm-turn", "sa-cross-body-lead", "sa-back-spot-turn", "sa-cross-body-lead-with-inside-turn"]
    },
    { id: 'jive', name: 'Jive', description: 
    "To me, jive feels like it can't decide whether it's swing or latin. It has bits of both. The basic has the same steps as the basic for east coast swing, the only difference is stylistic. It's danced to fast paced music, and mostly has triple steps and rocksteps.",
    moves: ["j-basic", "j-underarm-turn", "j-tuck-turn", "j-waist-roll", "j-throw-away"]
    },
    { id: 'jitterbug', name: 'Jitterbug', description:
    "Jitterbug is pretty much only a social dance, also called single time swing. It's characterized by it's fast upbeat music and excited movements. It's a circular swing, featuring mostly six count moves.",
    moves: ["jt-basic", "jt-turning-basic", "jt-underarm-turn", "jt-cuddle", "jt-cuddle-switches", "jt-hammer-lock", "jt-pretzel", "jt-she-goes-he-goes", "jt-dip"]
    },
    { id: 'wcs', name: 'West Coast Swing', description:
      "West coast is one of the more difficult dances. It's a slotted swing that features mostly six count moves. It's one of the more social dances, in fact many competitions are in the form of social dancing(called 'Jack and Jill's). The most unique thing about the dance is how you can add musicality to it and really express the song in ways other dances just can't.",
    notes: "As with all dances, the basics are important in this dance. The two big ones here are your anchor step and your connection. The last triple step in any pattern is the anchor step. It's always done in place and is helpful to give the leader a moment to think and the follower a moment to collect herself. The connection is even more important. During the entire dance, the connection should feel springy. Both the leader and the follower should be able to feel each other and easily feel small movements as the leader moves the follower into the next step.",
    moves: ["wcs-sugar-push", "wcs-left-side-pass", "wcs-underarm-turn", "wcs-spinning-left-side-pass", "wcs-sugar-tuck", "wcs-basket-whip", "wcs-closed-whip", "wcs-closed-whip-with-turn", "wcs-left-side-tuck-turn", "wcs-left-side-free-spin", "wcs-sweetheart-swivels"]
    },
    { id: 'two-step', name: 'Two Step', description: 
    "Two step is a country dance that's done a lot both socially and in competitions. It features a timing of 'quick quick slow slow'. Because it's meant to be danced in cowboy boots, the footwork is generally simple, more of a shuffling. Instead, the dance focuses on using different positions and a lot of variations to look and feel good.",
    moves: ["ts-basic", "ts-basic-turn", "ts-underarm-turn", "ts-outside-turn", "ts-inside-turn-to-wrap", "ts-inside-turn-from-wrap", "ts-inside-turn-to-promenade"]
    },
    { id: "nightclub", name: "Nightclub Two Step", description:
      "Nightclub two step is a nice slow dance, perfect for those slow country songs that regular two step just doesn't really make sense for. It's time signature is slow-quick-quick, so it works on four beats rather than the six beats normal two step uses. It also doesn't travel line of dance, it's danced mostly in place. It's a popular dance to learn for weddings and a great social dance as well.",
      moves: ["nts-basic", "nts-promenade-passes", "nts-promenade-passes-with-ladies-turn"]
    },
    { id: 'waltz', name: 'Waltz', description: 
    "Waltz is the dance of royalty. It's characterized by it's drop and rise look as you travel across the dance floor. It's meant to be a dance of nobles, and should look the part.",
    moves: ["iw-closed-changes", "iw-chasse-to-whisk", "iw-natural-turn"]
    },
    { id: 'tango', name: 'Tango', description: 
    "Tango is an intense dance, sometimes called 'the dance of divorce'. It's a heavily styled dance that moves quickly around the dance floor. It's also one of the few dances where you're not supposed to smile.",
    moves: ["it-basic-walks", "it-closed-promenade", "it-progressive-link", "it-progressive-side-step", "it-rock-turn"]
    }
  ]
});

export default Dance;
