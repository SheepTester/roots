(function() {
  var roots={ // origin: 0-latin 1-greek
    'mis-':{img:'wrong.svg',meaning:'hate',origin:1,colour:'CF5D5D',words:'misandrist, misandry, misanthrope, misanthropy, misocainea, misogamist, misogamy, misogynist, misogyny, misoneism, misopaedia, misophonia, misotheism'},
    'aster-, astr-':{img:'star.svg',meaning:'star, star-shaped',origin:1,colour:'191C30',words:'aster, asterisk, asteroid, astrology, astronomy, astronaut, diasterism geaster, monaster'},
    'ob-, o-, oc-, of-, og-, op-, os-':{img:'no.svg',meaning:'against',origin:0,colour:'C96F6F',words:'obduracy, obdurate, obduration, obfuscate, oblique, obliquity, obstinate, obstreperous, occur, offend, omit, oppose, ostensible, ostentatious'},
    'se-, sed-':{img:'apart.svg',meaning:'apart',origin:0,colour:'C9BF49',words:'secede, sedition, seditious, seduce'},
    '-cracy, -crat':{img:'gov.svg',meaning:'government, rule, authority',origin:1,colour:'9C4CD9',words:'acrasia, akrasia, akratic, anocracy, aristocracy, autocracy, autocrat, autocratic, bureaucracy, democracy, democratic, pancratium, plutocracy, technocracy, technocrat, theocracy'},
    'an-, a-, am-, ar-':{img:'zero.svg',meaning:'not, without',origin:1,colour:'50AD31',words:'ambrosia, anaerobic, anhydrous, arrhythmia, atheism, atypical'},
  },
  grad='linear-gradient(0deg,rgba(0,0,0,0.1),transparent)';
  if (window.location.search) {
    var root,inf=document.querySelector('info');
    for (var span in roots) {
      if (roots[span].colour===window.location.search.slice(1)) {
        root=span;
        break;
      }
    }
    document.querySelector('back').style.display='block';
    document.querySelector('back').onclick=e=>window.location.search='';
    inf.classList.add(roots[span].origin?'greek':'latin');
    inf.style.backgroundColor='#'+roots[span].colour;
    inf.style.backgroundImage=roots[span].img?'url(icons/'+roots[span].img+')':'none';
    var s=document.createElement("h");
    s.innerHTML=root;
    inf.appendChild(s);
    s=document.createElement("p");
    s.innerHTML='<strong>Origin</strong>'+(roots[span].origin?'Greek':'Latin');
    inf.appendChild(s);
    s=document.createElement("p");
    s.innerHTML='<strong>Meaning</strong>'+roots[span].meaning;
    inf.appendChild(s);
    s=document.createElement("p");
    s.innerHTML='<strong>Examples</strong>'+roots[span].words;
    inf.appendChild(s);
  } else {
    document.querySelector('info').style.display='none';
    for (var span in roots) {
      var s=document.createElement('root');
      s.innerHTML=span;
      s.classList.add(roots[span].origin?'greek':'latin');
      s.style.backgroundColor='#'+roots[span].colour;
      s.style.backgroundImage=grad+(roots[span].img?', url(icons/'+roots[span].img+')':'');
      (function(span) {
        s.onclick=e=>window.location.search=roots[span].colour;
      }(span));
      document.querySelector('roots').appendChild(s);
    }
  }
}());
