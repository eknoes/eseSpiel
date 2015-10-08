slub = $("iframe").contents();

firstLoad = true;


prettyMad = ['http://kilian.sexy', 'http://neue-sexpartner.com/de/juicypop/', 'https://www.casinoeuro.com/en/', 'https://www.sunnyplayer.com/de/home.html?a_aid=50f8f91a09b3e&chan=00051', 'https://www.sunmaker.com/de/merkur-online-casino-spiele.html?a_aid=4fc5f8cbe24fd&chan=c00192&data1=412589', 'https://www.sunmaker.com/de/merkur-online-casino-spiele.html?a_aid=4fc5f8cbe24fd&chan=c00192&data1=412589', 'https://www.stake7.com/de/landingpage/double-triple-chance.html?a_aid=528a3bb9b0cbd&a_bid=8183d21a&chan=Lp_Hp_lady&data1=cpr_DE1691384', 'http://topfansgames.com/', 'http://survey.fovo.info/?sov=75235301&id=XNSX.1344::DE-r12774-t378-&hid=fnjvrlpnnjrlhvvhr&tov=370019&v=&alertforce=&redid=12774&gsid=378&noexpand=1&alert=1&audio=1&pop=1', 'http://lp.ilividnewtab.com/?sysid=533&appid=600&subid=zZi68B3KzzRDLjlZjM1DgssG59bOLaUjkZKs-jzRpirTv80wvpjF4kx1Flt0YQvgNnHhf6jFPxIbBPyy8ZDQxAp644Q_dv08TNILnYCMAriJjW7ZRv5tvi74ifmWl6GokXzooxNZumwBToHYPMN_9UNgBeum3mXgZwdf0KhWLEKiZd1_aO9neCzw-VsYsS8Tn6aNJn5pHwj9JEfZJk6ozmvvPdXCHmw04K0F0UqO07WthpT5bxqhnRcAPljGwA847QRG4dhcPV1tp5XvINVapM7ZeC9ipYuBjidctycvEVijrf3PaYNyUpU5wIr-GTEqoqs1Bmf2AbznH2RTe8kT46wFMzBwRbsSA0L1nJdmir0CuN-HnlIW6E-j3uHb6PWNgS8d_tejUbFwuWQgG0j6z4_HZwCpz-g7RaDQb4vFtrQS1J5dmEen6WefcaI6IbROF_LON3u5dOo5QcI'];
madSites = ['http://google.de', 'http://facebook.com', 'http://faz.net'];
madWords = ['TEST', 'BETA', 'LOREM IPSUM', 'ESE'];
randAuthor = ['PROF. A. SCHWEISS', 'DR. ROSA SCHLUEPFER', 'TROLL, JOSCHKA', 'BILL GATES', 'STEVE JOBS'];
randTitle = ['Informatik für Ingenieure', 'Algorithmen und Datenstrukturen', 'Einführung in die Automatentheorie', 'Formale Sprachen und Komplexitätstheorie',
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
  if(getRandomInt(0, 1) == 1) {
    window.open(getMadSite());
  }
}, 5000);


$("iframe").load(function() {

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
