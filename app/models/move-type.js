import DS from 'ember-data';

var moveType = DS.Model.extend({
  name: DS.attr('string'),
  moves: DS.hasMany("move", {async: true}),
  dance: DS.belongsTo("dance", {async: true})
});

moveType.reopenClass({
  FIXTURES: [
    { id: "r-bronze",
      name: "bronze",
      moves: ["r-basic", "r-crossover-break", "r-hand-to-hand", "r-side-by-side", "r-fan", "r-tuck-turn"],
      dance: "rumba"
    },
    { id: "cc-bronze",
      name: "bronze",
      moves: ["cc-basic", "cc-crossover-break", "cc-underarm-turn"],
      dance: "cha-cha"
    },
    { id: "sm-bronze",
      name: "bronze",
      moves: ['sm-natural-basic', 'sm-reverse-basic', 'sm-side-basic', 'sm-box-basic', 'sm-turning-box', 'sm-extended-basic'],
      dance: "samba"
    },
    { id: "j-bronze",
      name: "bronze",
      moves: ["j-basic", "j-underarm-turn", "j-tuck-turn", "j-waist-roll", "j-throw-away"],
      dance: "jive"
    },
    { id: "sa-beginner",
      name: "salsa",
      moves: ["sa-basic", "sa-underarm-turn", "sa-cross-body-lead", "sa-back-spot-turn", "sa-cross-body-lead-with-inside-turn", "sa-back-spot-turn-with-inside-turn"],
      dance: "salsa"
    },
    { id: "jt-beginner",
      name: "bronze",
      moves: ["jt-basic", "jt-turning-basic", "jt-underarm-turn", "jt-cuddle", "jt-cuddle-switches", "jt-hammer-lock", "jt-pretzel", "jt-she-goes-he-goes", "jt-dip", "jt-kick-steps"],
      dance: "jitterbug"
    },
    { id: "wcs-sugar-push",
      name: "sugar push",
      moves: ["wcs-sugar-push", "wcs-sugar-tuck"],
      dance: "wcs"
    },
    { id: "wcs-right-side-pass",
      name: "right side pass",
      moves: ["wcs-underarm-turn"],
      dance: "wcs"
    },
    { id: "wcs-left-side-pass",
      name: "left side pass",
      moves: ["wcs-left-side-pass", "wcs-spinning-left-side-pass", "wcs-left-side-tuck-turn", "wcs-left-side-free-spin", "wcs-sweetheart-swivels"],
      dance: "wcs"
    },
    { id: "wcs-whip",
      name: "whip",
      moves: ["wcs-closed-whip", "wcs-basket-whip", "wcs-closed-whip-with-turn"],
      dance: "wcs"
    },
    { id: "ts-6",
      name: "division 6",
      moves: ["ts-basic", "ts-basic-turn", "ts-underarm-turn", "ts-outside-turn", "ts-inside-turn-to-wrap", "ts-inside-turn-from-wrap", "ts-inside-turn-to-promenade"],
      dance: "two-step"
    },
    { id: "nts-6",
      name: "division 6",
      moves: ["nts-basic", "nts-promenade-passes", "nts-promenade-passes-with-ladies-turn"],
      dance: "nightclub"
    },
    { id: "tt-6",
      name: "division 6",
      moves: ["tt-lady's-flair", "tt-right-turning-loop", "tt-left-turning-loop", "tt-man's-flair", "tt-turning-loops-with-lady's-turns"],
      dance: "triple-two-step"
    },
    { id: "iw-bronze",
      name: "bronze",
      moves: ["iw-closed-changes", "iw-chasse-to-whisk", "iw-natural-turn", "iw-reverse-turn", "iw-reverse-turn-outside-partner", "iw-hesitation-change"],
      dance: "waltz"
    },
    { id: "vw-bronze",
      name: "bronze",
      moves: ["vw-closed-changes", "vw-natural-turn", "vw-reverse-turn"],
      dance: "viennese-waltz"
    },
    { id: "vw-silver",
      name: "silver",
      moves: ["vw-reverse-fleckerl"],
      dance: "viennese-waltz"
    },
    { id: "vw-gold",
      name: "gold",
      moves: ["vw-fleckerl", "vw-contra-check"],
      dance: "viennese-waltz"
    },
    { id: "it-bronze",
      name: "bronze",
      moves: ["it-basic-walks", "it-closed-promenade", "it-progressive-link", "it-progressive-side-step", "it-rock-turn"],
      dance: "tango"
    },
    { id: "f-bronze",
      name: "bronze",
      moves: ["f-three-step", "f-feather-step", "f-natural-turn"],
      dance: "foxtrot"
    },
    { id: "q-bronze",
      name: "bronze",
      moves: ["q-forward-lock", "q-progressive-chasse", "q-natural-turn", "q-reverse-lock"],
      dance: "quickstep"
    }
  ]
});

export default moveType;

