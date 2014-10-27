import DS from 'ember-data';

var Move = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  video: DS.attr('string'),
  dance: DS.belongsTo('dance', {async: true}),
  leadInstructions: DS.attr()
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

  //cha cha
    {id: "cc-basic", name: "basic"},
    {id: "cc-crossover-break", name: "crossover break"},
    {id: "cc-underarm-turn", name: "underarm turn"},

  //samba
    {id: "sm-natural-basic", name: "natural basic"},
    {id: "sm-reverse-basic", name: "reverse basic"},
    {id: "sm-side-basic", name: "side basic"},
    {id: "sm-box-basic", name: "box basic"},
    {id: "sm-turning-box", name: "turning box"},
    {id: "sm-extended-basic", name: "extended basic"},

  //salsa
    {id: "sa-basic", name: "basic"},
    {id: "sa-underarm-turn", name: "underarm turn"},
    {id: "sa-cross-body-lead", name: "cross body lead"},
    {id: "sa-back-spot-turn", name: "back spot turn"},
    {id: "sa-cross-body-lead-with-inside-turn", name: "cross body lead with inside turn"},
    {id: "sa-back-spot-turn-with-inside-turn", name: "back spot turn with inside turn"},

  //jive
    {id: "j-basic", name: "basic"},
    {id: "j-underarm-turn", name: "underarm turn"},
    {id: "j-tuck-turn", name: "tuck turn"},
    {id: "j-waist-roll", name: "waist roll"},
    {id: "j-throw-away", name: "throw away"},
    {id: "j-travelling-triples", name: "travelling triples"},

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
    {id: "jt-kick-steps", name: "kick steps"},

  //west coast swing
    {id: "wcs-sugar-push", name: "sugar push", video: "KJGrzuTPj2o",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: ""},
      {beat: "2", description: "Step back on your right foot", tip: "You can start taking a double handhold here"},
      {beat: "3 and 4", description: "Triple in place, finishing with your left foot forward", tip: "Extend your hands forward shortly before you step forward to lead the follow back down the slot"},
      {beat: "5 and 6", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-left-side-pass", name: "left side pass", video: "k7D6Uv8Y0E8",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: ""},
      {beat: "2", description: "Step back and to the right with your right foot", tip: "Make sure you step off the slot here"},
      {beat: "3 and 4", description: "Triple back, together, then forward. First collect your left foot to your right, facing the slot. Then step in place on your right foot. Finally, step back onto the slot with your left foot", tip: "Make sure the follow has gotten past you before you step back onto the slot"},
      {beat: "5 and 6", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-underarm-turn", name: "underarm turn", video: "bSu7QJZ5SLU",
      leadInstructions: [
      {beat: "1", description: "Step back and to the left with your left foot", tip: "Make sure that you're getting off the slot with your left foot"},
      {beat: "2", description: "Collect your right foot to your left foot", tip: "Again, make sure you're off the slot. At this point, you should be facing the slot"},
      {beat: "3 and 4", description: "Triple in place, finishing with your left foot on the slot", tip: ""},
      {beat: "5 and 6", description: "Anchor in place", tip: "You should be on the slot, facing your partner during the anchor"}
      ]
    },
    {id: "wcs-spinning-left-side-pass", name: "spinning left side pass",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: ""},
      {beat: "2", description: "Step back and to the right with your right foot", tip: "Make sure you step off the slot here"},
      {beat: "3 and 4", description: "Triple back, together, then forward. First collect your left foot to your right, facing the slot. Then step in place on your right foot. Finally, step back onto the slot with your left foot", tip: "Make sure the follow has gotten past you before you step back onto the slot"},
      {beat: "5 and 6", description: "Anchor in place", tip: ""}
      ]
    },
    {id: "wcs-sugar-tuck", name: "sugar tuck",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: ""},
      {beat: "2", description: "Step back on your right foot", tip: "Don't raise your hand too early, you want to start raising it on or right before the three"},
      {beat: "3 and 4", description: "Triple in place, finishing with your left foot forward", tip: "The connection should feel 'springy', just like a sugar push."},
      {beat: "5 and 6", description: "Anchor in place", tip: "You'll probably have a strange handhold here, you can fix that with an underarm turn"}
      ]
    },

    {id: "wcs-closed-whip", name: "closed whip", 
      leadInstructions: [
      {beat: "1", description: "Step back and to the left with your left foot", tip: "Make sure to get off the slot, just like an underarm turn"},
      {beat: "2", description: "Collect your right foot to your left foot off the slot", tip: "Make sure you don't raise your left hand and accidentally give a false lead. Here, you should be catching the follow with your right arm to bring them into closed"},
      {beat: "3 and 4", description: "Triple together, together, forward", tip: "The last step should be all the way accross the slot, with you facing the follow down the slot"},
      {beat: "5", description: "Bring your right foot to your left off the slot", tip: ""},
      {beat: "6", description: "Step back onto the slot with your left foot", tip: ""},
      {beat: "7 and 8", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-basket-whip", name: "basket whip",
      leadInstructions: [
      {beat: "1", description: "Step back and to the left with your left foot", tip: "Make sure you have a double hand hold before starting this whip"},
      {beat: "2", description: "Collect your right foot to your left foot off the slot", tip: "You should raise your left hand, just like an underarm turn, but keep ahold with your right."},
      {beat: "3 and 4", description: "Triple across the slot", tip: "You want to triple across the slot, as opposed to in place like a regular whip, to make sure you're out of the follows way before she starts travelling backwards"},
      {beat: "5", description: "Bring your right foot to your left off the slot", tip: "You can let go or start letting go with the right hand here"},
      {beat: "6", description: "Step back onto the slot with your left foot", tip: ""},
      {beat: "7 and 8", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-closed-whip-with-turn", name: "closed whip with inside or outside turn",
      leadInstructions: [
      {beat: "1", description: "Step back and to the left with your left foot", tip: "This is the same as a whip until the end"},
      {beat: "2", description: "Collect your right foot to your left foot off the slot", tip: ""},
      {beat: "3 and 4", description: "Triple together, together, forward", tip: "If you want to do an underarm turn, bring your left hand up in front of the follow here. If you want to do on outside turn, raise your left hand up away from your follow"},
      {beat: "5", description: "Bring your right foot to your left off the slot", tip: ""},
      {beat: "6", description: "Step back onto the slot with your left foot", tip: ""},
      {beat: "7 and 8", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-eight-count-sugar-push", name: "eight count sugar push",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: ""},
      {beat: "2", description: "Step back on your right foot", tip: ""},
      {beat: "3 and 4", description: "Triple in place, finishing with your left foot forward", tip: ""},
      {beat: "5", description: "Step forward with your right foot", tip: "This move is kind of weird, make sure you give a strong lead that you want to keep going"},
      {beat: "6", description: "Step forward with your left foot", tip: "Start giving some tension in your connection here to tell the follow that you're done moving forward now"},
      {beat: "7 and 8", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-left-side-tuck-turn", name: "left side tuck turn",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: ""},
      {beat: "2", description: "Step back on your right foot", tip: "You can start taking a double handhold here"},
      {beat: "3 and 4", description: "Triple in place, finishing with your left foot forward", tip: "Extend your hands forward shortly before you step forward to lead the follow back down the slot"},
      {beat: "5 and 6", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-left-side-free-spin", name: "left side free spin",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: "This move has a similar lead to a spinning left side pass. To make the lead a bit stronger, do it with a two hand hold."},
      {beat: "2", description: "Step back and to the right with your right foot", tip: ""},
      {beat: "3 and 4", description: "Triple back, together, then forward. First collect your left foot to your right, facing the slot. Then step in place on your right foot. Finally, step back onto the slot with your left foot", tip: "definitely make sure the follow has gotten past you before you step back onto the slot. You may end up tripling in place here, which is fine. Just get back onto the slot at the beginning of your anchor"},
      {beat: "5 and 6", description: "Anchor in place", tip: ""}
      ]
    },

    {id: "wcs-sweetheart-swivels", name: "sweetheart swivels",
      leadInstructions: [
      {beat: "1", description: "Step back on your left foot", tip: "Start this move with a right to right hand hold. The lead is similar to a spinning left side pass"},
      {beat: "2", description: "Step back and to the right with your right foot", tip: ""},
      {beat: "3 and 4", description: "Triple in place.", tip: "Don't let the follow spin all the way around, keep your hand low and stop them with your arm when they're facing down the slot again. You can take their left hand with your left at that point."},
      {beat: "5 and 6, 7 and 8, etc.", description: "Alternate lunging to the left and to the right", tip: "Make sure you correctly lead the follow up and down the slot for the swivels, it's easy to get them off balance and off beat here."},
      {beat: "exit", description: "When the follow is going to the left, drop your left hand (with their left). Instead of turning them back towards the slot, push up with your left hand and give them a free spin to exit.", tip: ""}
      ]
    },

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

  //triple two step
    {id: "tt-lady's-flair", name: "lady's flair"},
    {id: "tt-right-turning-loop", name: "right turning loop"},
    {id: "tt-left-turning-loop", name: "left turning loop"},
    {id: "tt-man's-flair", name: "man's flair"},
    {id: "tt-turning-loops-with-lady's-turns", name: "turning loops with lady's turns"},

  //international waltz
    {id: "iw-closed-changes", name: "closed changes"},
    {id: "iw-chasse-to-whisk", name: "chasse to whisk"},
    {id: "iw-natural-turn", name: "natural turn"},
    {id: "iw-reverse-turn", name: "reverse turn"},
    {id: "iw-reverse-turn-outside-partner", name: "reverse turn outside partner"},
    {id: "iw-hesitation-change", name: "hesitation change"},

  //viennese waltz
    {id: "vw-closed-changes", name: "closed changes"},
    {id: "vw-natural-turn", name: "natural turn"},
    {id: "vw-reverse-turn", name: "reverse turn"},
    {id: "vw-fleckerl", name: "fleckerl"},
    {id: "vw-reverse-fleckerl", name: "reverse fleckerl"},

  //international tango
    {id: "it-basic-walks", name: "basic walks"},
    {id: "it-closed-promenade", name: "closed promenade"},
    {id: "it-progressive-link", name: "progressive link"},
    {id: "it-progressive-side-step", name: "progressive side step"},
    {id: "it-rock-turn", name: "rock turn"},

  //foxtrot
    {id: "f-three-step", name: "three step"},
    {id: "f-feather-step", name: "feather step"},
    {id: "f-natural-turn", name: "natural turn"},

  //quickstep
    {id: 'q-forward-lock', name: 'forward lock'},
    {id: 'q-progressive-chasse', name: 'progressive chasse'},
    {id: 'q-natural-turn', name: 'natural turn'},
    {id: 'q-reverse-lock', name: 'reverse lock'}

  ]
});

export default Move;
