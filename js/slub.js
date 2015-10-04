slub = $("iframe").contents();

firstLoad = true;


prettyMad = ['http://neue-sexpartner.com/de/juicypop/', 'http://www.gaymaletube.com/', 'http://www.dinotube.com/%2522Big+Boobs%2522%257C%2522Big+Breasts%2522%257C%2522Big+Tits%2522%257CBigtits-tube/5482/c/1/page/0/', 'http://de.xhamster.com/', 'http://de.xhamster.com/channels/new-handjobs-1.html'];
madSites = ['http://google.de', 'http://facebook.com', 'http://faz.net'];
madWords = ['TEST', 'BETA', 'LOREM IPSUM', 'ESE'];
randAuthor = ['PROF. A. SCHWEISS', 'DR. ROSA SCHLUEPFER', 'TROLL, JOSCHKA', 'BILL GATES', 'STEVE JOBS'];
randTitle = ['Informatik für Ingenieure', 'Algorithmen und Datenstrukturen', 'Einführung in die Automatentheorie, J.D. Ullmann formale Sprachen und Komplexitätstheorie',
'Mathematical Structures for Computer Science', 'Einführung in die Mathematik', 'Computergraphik III', 'Mathe für Doofe, Band 1', 'Informationstheorie', 'Dresden von oben: ein Bildband', 'Duden der Informatik', 'Warum uns die Alogrithmen noch umbringen werden', 'Das Kapital', 'Theorie und Praxis - Band I: Theorie', 'Theorie und Praxis - Band II: Praxis'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMadWords(count) {
  result = "";
  for (var i = 0; i < count; i++) {
    result += " " + madWords[getRandomInt(0, madWords.length - 1)];
  }
  return result;
}

function getAuthors() {
  result = "";
  for (var i = 0; i < getRandomInt(1, 3); i++) {
    result += randAuthor[getRandomInt(0, randAuthor.length - 1)] + ';';
  }
  return result;
}

function getTitle() {
    return randTitle[getRandomInt(0, randTitle.length - 1)];
}


function getMadSite() {
  return prettyMad[getRandomInt(0, madSites.length - 1)];
}

/* Random Popups */
window.setInterval(function(){
  if(getRandomInt(0, 4) == 3) {
    window.open(getMadSite());
  }
}, 1000);



$("iframe").load(function() {
  window.setInterval(function(){
    if(!firstLoad) {
      spans = $("iframe").contents().find("span")
      $(spans.get(getRandomInt(0, spans.length - 1))).text(getMadWords(getRandomInt(1, 4)));
      console.log("changed a word");
    } else {
      if (getRandomInt(1,3) == 2) {
        firstLoad = false;
      }
    }
  }, 1500);

  window.setInterval(function(){
    if(!firstLoad) {
      spans = $("iframe").contents().find(".field-title_short")
      $(spans.get(getRandomInt(0, spans.length - 1))).text(getTitle());
      console.log("changed a title");
    } else {
      if (getRandomInt(1,3) == 2) {
        firstLoad = false;
      }
    }
  }, 700);

  window.setInterval(function(){
    if(!firstLoad) {
      spans = $("iframe").contents().find(".field-author")
      $(spans.get(getRandomInt(0, spans.length - 1))).text(getAuthors());
      console.log("changed authors");
    } else {
      if (getRandomInt(1,3) == 2) {
        firstLoad = false;
      }
    }
  }, 1000);
});
