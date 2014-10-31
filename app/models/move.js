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
    {id: "r-basic", name: "basic", dance: "rumba",
    leadInstructions: []
    },
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
      {beat: "1", footwork: "Step back on your left foot", lead: "Bring whichever hand/hands you're leading with towards you.", tip: ""},
      {beat: "2", footwork: "Step back on your right foot", lead: "Continue bringing your hands towards you, you can start taking a double handhold here", tip: ""},
      {beat: "3 and 4", footwork: "Triple in place, finishing with your left foot forward", lead: "Lead the follow into you, compress, then back down the slot. You should have a good compression connection here, it should feel like a spring being compressed, then extending.", tip: "Make sure to extend your hands forward shortly before you step forward, so you don't run into the follow"},
      {beat: "5 and 6", footwork: "Anchor in place", lead: "Settle into the anchor.", tip: "You can end this with a left to right, right to left, or double hand hold, depending on which hand/hands you keep after the compression"}
      ]
    },

    {id: "wcs-left-side-pass", name: "left side pass", video: "k7D6Uv8Y0E8",
      leadInstructions: [
      {beat: "1", footwork: "Step back on your left foot", lead: "Bring the follow towards you, down the slot", tip: ""},
      {beat: "2", footwork: "Step back and to the right with your right foot", lead: "Continue to lead your follow down the slot", tip: "Make sure you step off the slot here"},
      {beat: "3 and 4", footwork: "Triple back, together, then forward. First collect your left foot to your right, facing the slot. Then step in place on your right foot. Finally, step back onto the slot with your left foot", lead: "As the follow steps past you, rotate them to face down the slot towards you for the anchor step.", tip: "Make sure the follow has gotten past you before you step back onto the slot"},
      {beat: "5 and 6", footwork: "Anchor in place", lead: "Settle into the anchor", tip: ""}
      ]
    },

    {id: "wcs-underarm-turn", name: "underarm turn", video: "bSu7QJZ5SLU",
      leadInstructions: [
      {beat: "1", footwork: "Step back and to the left with your left foot", lead: "Lead the follow towards you, down the slot.", tip: "Make sure that you're getting off the slot with your left foot"},
      {beat: "2", footwork: "Collect your right foot to your left foot", lead: "Bring your left hand up and rotate it in the follows hand. This is sometime referred to as 'checking the time', like you have a watch on your wrist.", tip: "Again, make sure you're off the slot. At this point, you should be facing the slot"},
      {beat: "3 and 4", footwork: "Triple in place, finishing with your left foot on the slot", lead: "You shouldn't need to help the follow rotate much here.", tip: "Make sure you don't crank your arm to force the follow to rotate, that doesn't feel good for anyone."},
      {beat: "5 and 6", footwork: "Anchor in place", lead: "Settle into the anchor", tip: "You should be on the slot, facing your partner during the anchor"}
      ]
    },
    {id: "wcs-spinning-left-side-pass", name: "spinning left side pass",
      leadInstructions: [
      {beat: "1", footwork: "Step back on your left foot", lead: "Lead the follow towards you, down the slot", tip: ""},
      {beat: "2", footwork: "Step back and to the right with your right foot", lead: "Bring your hand to the left as a prep, and to change the connection to a rotational one.", tip: "Make sure you step off the slot here"},
      {beat: "3 and 4", footwork: "Triple back, together, then forward. First collect your left foot to your right, facing the slot. Then step in place on your right foot. Finally, step back onto the slot with your left foot", lead: "Bring your hand above and around the follows head so they spins as they moves down the slot.", tip: "Make sure the follow has gotten past you before you step back onto the slot"},
      {beat: "5 and 6", footwork: "Anchor in place", lead: "settle into the anchor.", tip: ""}
      ]
    },
    {id: "wcs-sugar-tuck", name: "sugar tuck",
      leadInstructions: [
      {beat: "1", footwork: "Step back on your left foot", lead: "Lead the follow towards you, down the slot.", tip: ""},
      {beat: "2", footwork: "Step back on your right foot", lead: "Bring your hand up and change it to be palm to palm with your follow.", tip: "Don't raise your hand too early, you want to start raising it on '2 and' rather than right on the two"},
      {beat: "3 and 4", footwork: "Triple in place, finishing with your left foot forward", lead: "Compress, then push forward on the '3 and', sending your follow back down the slot and initiating the tuck turn.", tip: "The connection should feel 'springy', just like a sugar push."},
      {beat: "5 and 6", footwork: "Anchor in place", lead: "settle into the anchor",  tip: "You'll probably have a strange handhold here, you can fix that with an underarm turn"}
      ]
    },

    {id: "wcs-closed-whip", name: "closed whip", 
      leadInstructions: [
      {beat: "1", footwork: "Step back and to the left with your left foot", lead: "Lead the follow towards you, down the slot.", tip: "Make sure to get off the slot, just like an underarm turn"},
      {beat: "2", footwork: "Collect your right foot to your left foot off the slot", lead: "Move your left hand in a small clockwis circle as you pull the follow towards you, catching them with your right arm and bringing them into closed.", tip: "Make sure you don't raise your left hand and accidentally give a false lead."},
      {beat: "3 and 4", footwork: "Triple together, together, forward", lead: "The follow should be sinking into your right hand during the '3 and'. On the 4, lead them forward towards you as you cross the slot. This should also be led with your right hand, not your left.",  tip: "The last step should be all the way accross the slot, with you facing the follow down the slot"},
      {beat: "5", footwork: "Bring your right foot to your left off the slot", lead: "Continue the momentum from 3 and 4, just keep the follow moving down the slot.", tip: ""},
      {beat: "6", footwork: "Step back onto the slot with your left foot", lead: "You can let go with your right hand here, or keep it there if you want to move into closed.", tip: ""},
      {beat: "7 and 8", footwork: "Anchor in place", lead: "settle into the anchor", tip: ""}
      ]
    },

    {id: "wcs-basket-whip", name: "basket whip",
      leadInstructions: [
      {beat: "1", footwork: "Step back and to the left with your left foot", lead: "Starting with a double hand hold, move the follow towards you, down the slot.", tip: ""},
      {beat: "2", footwork: "Collect your right foot to your left foot off the slot", lead: "Raise your left hand, like for an underarm turn, but keep ahold with your right hand.", tip: ""},
      {beat: "3 and 4", footwork: "Triple across the slot", lead: "The follow will sink into the connection during '3 and', just like with a basic whip. Bring them back on the 4", tip: "You want to triple across the slot, as opposed to in place like a regular whip, to make sure you're out of the follows way before she starts travelling backwards"},
      {beat: "5", footwork: "Bring your right foot to your left off the slot", lead: "You can start letting go with your right hand here.", tip: ""},
      {beat: "6", footwork: "Step back onto the slot with your left foot", lead: "Make sure you're in left to right by the time you step back onto the slot.", tip: ""},
      {beat: "7 and 8", footwork: "Anchor in place", lead: "settle into the anchor", tip: ""}
      ]
    },

    {id: "wcs-closed-whip-with-turn", name: "closed whip with inside or outside turn",
      leadInstructions: [
      {beat: "1", footwork: "Step back and to the left with your left foot", lead: "Lead the follow towards you, down the slot.", tip: "This is the same as a whip until the end"},
      {beat: "2", footwork: "Collect your right foot to your left foot off the slot", lead: "Move your left hand in a small clockwis circle as you pull the follow towards you, catching them with your right arm and bringing them into closed.", tip: ""},
      {beat: "3 and 4", footwork: "Triple together, together, forward", lead: "The follow will sink into your right hand during '3 and'. Bring them forward during 4. If you want to do an inside turn, bring your left hand forward in front of them. If you want to do an outside turn, lift your left hand up and keep it on that side of your partner.", tip: ""},
      {beat: "5", footwork: "Bring your right foot to your left off the slot", lead: "You should start the turn here, letting go with your right hand.", tip: ""},
      {beat: "6", footwork: "Step back onto the slot with your left foot", lead: "Finish the turn before the anchor and face your partner", tip: ""},
      {beat: "7 and 8", footwork: "Anchor in place", lead: "settle into your anchor", tip: ""}
      ]
    },

    {id: "wcs-eight-count-sugar-push", name: "eight count sugar push",
      leadInstructions: [
      {beat: "1", footwork: "Step back on your left foot", lead: "Bring whichever hand/hands you're leading with towards you.", tip: ""},
      {beat: "2", footwork: "Step back on your right foot", lead: "Continue bringing your hands towards you, you can start taking a double handhold here", tip: ""},
      {beat: "3 and 4", footwork: "Triple in place, finishing with your left foot forward", lead: "Lead the follow into you, compress, then back down the slot. You should have a good compression connection here, it should feel like a spring being compressed, then extending.", tip: ""},
      {beat: "5", footwork: "Step forward with your right foot", lead: "Continue to push the follower backwards down the slot.", tip: "This move is kind of weird, make sure you give a strong lead that you want to keep going"},
      {beat: "6", footwork: "Step forward with your left foot", lead: "Again, keep the follow moving down the slot", tip: "Start giving some tension in your connection here to tell the follow that you're done moving forward now"},
      {beat: "7 and 8", footwork: "Anchor in place", lead: "settle into the anchor", tip: ""}
      ]
    },

    {id: "wcs-left-side-tuck-turn", name: "left side tuck turn",
      leadInstructions: [
      {beat: "1", footwork: "Step back on your left foot", lead: "Lead the follow forward, down the slot.", tip: "This move has a similar lead to a spinning left side pass. To make the lead a bit stronger, do it with a two hand hold."},
      {beat: "2", footwork: "Step back and to the right with your right foot", lead: "Move your left hand to the left, prepping for the tuck and initiating a rotational connection.", tip: ""},
      {beat: "3 and 4", footwork: "Triple back, together, then forward. First collect your left foot to your right, facing the slot. Then step in place on your right foot. Finally, step back onto the slot with your left foot", lead: "Bring your hand up during the three and switch it to be palm to palm with the follow. Compress during the 'and', then send them out for the 4.", tip: "definitely make sure the follow has gotten past you before you step back onto the slot. You may end up tripling in place here, which is fine. Just get back onto the slot at the beginning of your anchor"},
      {beat: "5 and 6", footwork: "Anchor in place", lead: "Settle into the anchor", tip: ""}
      ]
    },

    {id: "wcs-left-side-free-spin", name: "left side free spin",
      leadInstructions: [
      {beat: "1", footwork: "Step back on your left foot", lead: "Lead the follow forward, down the slot", tip: "This move has a similar lead to a spinning left side pass."},
      {beat: "2", footwork: "Step back and to the right with your right foot", lead: "Move your hand to the left to prep for the spin and inituate a rotational connection.", tip: ""},
      {beat: "3 and 4", footwork: "Triple back, together, then forward. First collect your left foot to your right, facing the slot. Then step in place on your right foot. Finally, step back onto the slot with your left foot", lead: "During the 3, turn your follow with a bit more force than you usually do for a spin. Keep your hand from raising or lowering, as those are leads for other moves. Let go of the follow completele during the 'and'", tip: "For styling, you can also spin here. It would be a clockwise spin, carrying through the momentum from sending out the follow."},
      {beat: "5 and 6", footwork: "Anchor in place", lead: "Pick up one of the follow's hands, then anchor in place.", tip: ""}
      ]
    },

    {id: "wcs-sweetheart-swivels", name: "sweetheart swivels",
      leadInstructions: [
      {beat: "1", footwork: "Step back on your left foot", lead: "Start with a right to right hand hold. Move your follow towards you, down the slot.", tip: "The lead is similar to a spinning left side pass"},
      {beat: "2", footwork: "Step back and to the right with your right foot", lead: "Move your hand to the left to prep for the turn and initiate a rotational connection", tip: ""},
      {beat: "3 and 4", footwork: "Triple in place.", lead: "Rotate the follow 180 degrees counter clockwise. Stop them with your right arm on their shoulder and pick up their left hand with yours.", tip: "Keep your hand low, so you don't give a false lead for a turn. Rather than tripling in place, you can take two steps in place, then lunge to the left to prepare for the rest of the pattern."},
      {beat: "5 and 6, 7 and 8, etc.", footwork: "Alternate lunging to the left and to the right", lead: "Press with your hand to turn the follow towards you, and let up on the tension to lead them forward.", tip: "Make sure you correctly lead the follow up and down the slot for the swivels, it's easy to get them off balance and off beat here."},
      {beat: "exit", footwork: "Check back with your right foot. Then, triple back onto the slot starting with your left, and finish with an anchor.", lead: "When the follow is going to the left, drop your left hand (with their left). Instead of turning them back towards the slot, push up with your left hand and give them a free spin to exit.", tip: ""}
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
    {id: "vw-reverse-fleckerl", name: "reverse fleckerl"},
    {id: "vw-fleckerl", name: "fleckerl"},
    {id: "vw-contra-check", name: "contra check"},

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
