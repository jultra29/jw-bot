// Description: this javascript file contains the following three commands for the jw-bot in GA_JS_DTLA.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands: please refer to the comments below which will describe and provide instructions for running the three commands.
//

module.exports = function(robot) {

/* 1. jw-bot's first functionality is responding with an image link of the course roadmap and deadlines.
      Slack will often unfurl the link as an embedded image.

      Instructions: a) type 'course roadmap and deadlines' into the general slackroom.
                    or
                    b) direct message 'course roadmap and deadlines' to jw-bot.
*/

  robot.hear(/course roadmap and deadlines/, function(res) {
    return res.send("https://preview.ibb.co/e8dTkF/Screen_Shot_2017_07_09_at_3_41_36_PM.png");
  });


/* 2. jw-bot's second functionality is replying directly to the user (and notifying them) with the exit ticket.

      Instructions: a) type '@jw-bot YOURSLACKNAME needs the exit ticket' into the general slackroom (e.g. '@jw-bot jason needs the exit ticket')
                    or
                    b) direct message 'YOURSLACKNAME needs the exit ticket' to jw-bot.

                    Conditional - if user types 'jw-bot' as their slack name, bot will not return exit ticket.
*/

robot.respond(/(.*) needs the exit ticket/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "jw-bot"){
      return msg.send("I'm jw-bot and I don't need the exit ticket!");
  }   else {
      return msg.reply("here you go," + " " + name + ": https://docs.google.com/forms/d/e/1FAIpQLSetrcgLo2cQitTGyyD90En25QbJbEtIm0ubZHKgqqvVSaOzTw/viewform");
    }
  });

/* 3. jw-bot's third functionality is responding to the user with random motivational quotes, whenever they feel stuck!

        Instructions: a) direct message 'I need a pep talk!' to jw-bot. jw-bot will respond with a random quote.
*/

var quotes = ['"All our dreams can come true if we have the courage to pursue them."' + " - Walt Disney",
'"Success is walking from failure to failure with no loss of enthusiasm."' +  " - Winston Churchill" ,
'"I have not failed. I’ve just found 10,000 ways that won’t work."' + " - Thomas Edison",
'"If you’re going through hell keep going."' + " - Winston Churchill",
'"What seems to us as bitter trials are often blessings in disguise."' + " - Oscar Wilde",
'"No masterpiece was ever created by a lazy artist."' + " - Anonymous",
'"If you can’t explain it simply, you don’t understand it well enough."' + " - Albert Einstein",
'"What’s the point of being alive if you don’t at least try to do something remarkable?"' + " - Anonymous",
'"I find that the harder I work, the more luck I seem to have."' + " - Thomas Jefferson",
'"All progress takes place outside the comfort zone."' + " - Michael John Bobak",
'"Courage is resistance to fear, mastery of fear - not absense of fear."' + " - Mark Twain",
'"Only put off until tomorrow what you are willing to die having left undone."' + " - Pablo Picasso",
'"The successful warrior is the average man, with laser-like focus."' + " - Bruce Lee",
'"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job."' + " - Mosher's Law of Software Engineering",
'"Its not at all important to get it right the first time. Its vitally important to get it right the last time."' + " - Andrew Hunt and David Thomas",
'"First, solve the problem. Then, write the code."' + " - John Johnson",
'"Success does not consist in never making mistakes but in never making the same one a second time."' + " - George Bernard Shaw",
'"Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice."' + " - Wayne Dyer",
'"Failure is the condiment that gives success its flavor."' + " - Truman Capote",
'"You may have to fight a battle more than once to win it."' + " - Margaret Thatcher"];
    robot.respond(/I need a pep talk!/i, function(res) {
      return res.send(res.random(quotes));
    });
};
