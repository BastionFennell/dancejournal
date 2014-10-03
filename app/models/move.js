import DS from 'ember-data';

var Move = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  video: DS.attr('string'),
  dance: DS.belongsTo('dance', {async: true})
});

Move.reopenClass({
  FIXTURES:[
  //rumba
    {id: "r-basic", name: "basic", dance: "rumba"},
    {id: "r-crossover-break", name: "crossover break", dance: "rumba"},
    {id: "r-hand-to-hand", name: "hand to hand", dance: "rumba"},
    {id: "r-side-by-side", name: "side by side", dance: "rumba"},
    {id: "r-fan", name: "fan", dance: "rumba"},
    {id: "r-tuck-turn", name: "tuck turn", dance: "rumba"},

  //salsa
    {id: "sa-basic", name: "basic"},
    {id: "sa-underarm-turn", name: "underarm turn"},
    {id: "sa-cross-body-lead", name: "cross body lead"},
    {id: "sa-back-spot-turn", name: "back spot turn"},
    {id: "sa-cross-body-lead-with-inside-turn", name: "cross body lead with inside turn"},

  //jive
    {id: "j-basic", name: "basic"},
    {id: "j-underarm-turn", name: "underarm turn"},
    {id: "j-tuck-turn", name: "tuck turn"},
    {id: "j-waist-roll", name: "waist roll"},
    {id: "j-throw-away", name: "throw away"},

  //jitterbug
    {id: "jt-basic", name: "basic"},
    {id: "jt-turning-basic", name: "turning basic"},
    {id: "jt-underarm-turn", name: "underarm turn"},
    {id: "jt-cuddle", name: "cuddle"},
    {id: "jt-cuddle-switches", name: "cuddle-switches"},
    {id: "jt-hammer-lock", name: "hammer lock"},
    {id: "jt-pretzel", name: "pretzel"},
    {id: "jt-she-goes-he-goes", name: "she goes he goes"},
    {id: "jt-dip", name: "dip"},

  //west coast swing
    {id: "wcs-sugar-push", name: "sugar push", video: "KJGrzuTPj2o"},
    {id: "wcs-left-side-pass", name: "left side pass", video: "k7D6Uv8Y0E8"},
    {id: "wcs-underarm-turn", name: "underarm turn", video: "bSu7QJZ5SLU"},
    {id: "wcs-spinning-left-side-pass", name: "spinning left side pass"},
    {id: "wcs-sugar-tuck", name: "sugar tuck"},
    {id: "wcs-basket-whip", name: "basic whip"},
    {id: "wcs-closed-whip", name: "closed whip"},
    {id: "wcs-closed-whip-with-turn", name: "closed whip with inside or outside turn"},
    {id: "wcs-left-side-tuck-turn", name: "left side tuck turn"},
    {id: "wcs-left-side-free-spin", name: "left side free spin"},
    {id: "wcs-sweetheart-swivels", name: "sweetheart swivels"},

  //two step
    {id: "ts-basic", name: "basic", video: "xoscqzFdwB0"},
    {id: "ts-basic-turn", name: "basic turn in closed position", video: "9yilgkGvuvw"},
    {id: "ts-underarm-turn", name: "underarm turn"},
    {id: "ts-outside-turn", name: "outside turn", video: "JKwvq6IJqNU"},
    {id: "ts-inside-turn-to-wrap", name: "inside turn to wrap"},
    {id: "ts-inside-turn-from-wrap", name: "inside turn from wrap"},
    {id: "ts-inside-turn-to-promenade", name: "inside turn to promenade"},

  //nightclub two step
    {id: "nts-basic", name: "basic"},
    {id: "nts-promenade-passes", name: "promenade passes"},
    {id: "nts-promenade-passes-with-ladies-turn", name: "promenade passes with ladies turn"},

  //international waltz
    {id: "iw-closed-changes", name: "closed changes"},
    {id: "iw-chasse-to-whisk", name: "chasse to whisk"},
    {id: "iw-natural-turn", name: "natural turn"},

  //international tango
    {id: "it-basic-walks", name: "basic walks"},
    {id: "it-closed-promenade", name: "closed promenade"},
    {id: "it-progressive-link", name: "progressive link"},
    {id: "it-progressive-side-step", name: "progressive side step"},
    {id: "it-rock-turn", name: "rock turn"}
  ]
});

export default Move;
