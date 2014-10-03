import DS from 'ember-data';

var post = DS.Model.extend({
  title: DS.attr("string"),
  body: DS.attr("string")
});

post.reopenClass({
  FIXTURES: [
{id: 1,
title: "Free Week",
body: "This will be a short post. I went to Texas Ballroom's free week, and it was pretty crazy. The room was literally full of people, all of us trying to figure out how to dance. The lessons were all pretty rushed because the instructors were trying to get us to something that felt like dancing as quickly as possible. I've been assured several times that there will be less people next week, we'll see what happens. I almost went to my first social dance, but ended up wussing out at the end. I feel like I should know more than the basic before I dance socially."},
{id: 2,
title: "Second Week, Basics",
body: "I was worried that things would slow down too much after free week, but it was actually very helpful. This week we focused on doing the basics and doing them right. We went over the things we learned during free week and learned the correct way to do them. It was nice, and I feel like I have a much more solid foundation and a better idea on the stylistic difference between the different dances. I know a decent amount of west coast swing, so I felt like that lesson in particular was slow, but I know that there are technique things that are important that I should focus on. I'll probably use this as an opportunity to work on leading, leg line, rolling through, and making the dance look right."},
{id: 3,
title: "Third Week, Terrifying Tango",
body: "So, I didn't get a chance to go to waltz or tango the first two weeks, but I decided to try and jump in on it before it was too late. It was... intense... Waltz was nice, but I didn't figure out how to do the basic moves until the very end of the lesson, and even then I was kind of shaky. Tango was even worse. Everyone else was focusing on making it look right, while I was focusing of getting the footwork down. Still, the instructor focused on the basics and getting them right, so it was bearable. I should find a partner to practice tango and waltz with so I can get up to speed. Aside from those two classes, we were making sure we had our basics down and adding a few of the more iconic moves for each of the dances. Things like the fan in rumba and the spinning left side pass in west coast swing. It was fun, hopefully I'll figure out tango and waltz soon."},
{id: 4,
title: "Fourth Week, Foundations and Fun",
body: "This week, we ended up doing a lot of review. The reviews were helpful for waltz and tango, but the other dances I feel like I already understand well enough that I don't need to go over the basics too much. It was awesome in west coast swing though, because we finally went over connection. Some of the new follows are feeling better to dance with now, which is exciting. I'm also figuring out who's better at west coast so I can use my full repertoire of patterns and learn new ones when I dance with them rather than just going over the basics. Speaking of west coast, I went to my first practice outside of ballroom lessons this week. I met up with a friend of mine, Alexander, who was one of the main forces behind getting me into ballroom. We met up and worked on some patterns I wanted to learn, namely the basics for nightclub two step and folds in WCS. I also went to a WCS practice session with some of the TA's for a social dance class here on campus, which was awesome. I was nervous the entire time, but I ended up dancing with one of the TA's. She said that everything felt solid and awesome, gave me a few pointers on my whip and sugar tuck, then she told me to work on rolling through. Other than that, she said everything was solid and I should try to learn new patterns. So, my next goal is to add more and more patterns to my WCS and figure out the correct way to roll through. Here's to another successful week!"}
]
});

export default post;
