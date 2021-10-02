function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout (phrase) {
    console.log(phrase.toUpperCase( ));
  }

function logWhisper (phrase) {
    console.log(phrase.toLowerCase( ));
  }

function sayHiToGrandma (phrase) {
    var cantHear = "I can't hear you!";
    var yesAnswer = "YES INDEED!";
    var loveU = "I love you, too.";
    if (phrase.toLowerCase(phrase) === phrase) {
      return cantHear;
    }
    else if (phrase.toUpperCase(phrase) === phrase) {
      return yesAnswer;
    }
    else if ("I love you, Grandma." === phrase) {
      return loveU
    }
  }