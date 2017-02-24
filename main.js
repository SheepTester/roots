(function() {
  var roots={ // origin: 0-latin 1-greek
    // colours: colour is 1, svg fill is 2, fcolour is 3, scolour 4
    'mis-':{img:'wrong.svg',meaning:'hate',translate:"μισεῖν (miseîn), μῖσος (mîsos)",origin:1,colour:'1B1F3A',fcolour:'A64942',scolour:'FF7844',words:'misandrist, misandry, misanthrope, misanthropy, misocainea, misogamist, misogamy, misogynist, misogyny, misoneism, misopaedia, misophonia, misotheism'},
    'aster-, astr-':{img:'star.svg',meaning:'star, star-shaped',translate:"ἀστήρ, ἀστέρος (astḗr, astéros), ἄστρον (ástron)",origin:1,colour:'253B6E',fcolour:'1891AC',scolour:'D2ECF9',words:'aster, asterisk, asteroid, astrology, astronomy, astronaut, diasterism geaster, monaster'},
    'ob-, o-, oc-, of-, og-, op-, os-':{img:'no.svg',meaning:'against',translate:"ob",origin:0,colour:'FF9898',fcolour:'971549',scolour:'470031',words:'obduracy, obdurate, obduration, obfuscate, oblique, obliquity, obstinate, obstreperous, occur, offend, omit, oppose, ostensible, ostentatious'},
    'se-, sed-':{img:'apart.svg',meaning:'apart',translate:"se",origin:0,colour:'F4F4F4',fcolour:'B90B0B',scolour:'8C0909',words:'secede, sedition, seditious, seduce'},
    '-cracy, -crat':{img:'gov.svg',meaning:'government, rule, authority',translate:"κράτος (krátos), κρατία (kratía)",origin:1,colour:'511E78',fcolour:'CF56A1',scolour:'FCB2BF',words:'acrasia, akrasia, akratic, anocracy, aristocracy, autocracy, autocrat, autocratic, bureaucracy, democracy, democratic, pancratium, plutocracy, technocracy, technocrat, theocracy'},
    'an-, a-, am-, ar-':{img:'zero.svg',meaning:'not, without',translate:"ἀν-/ἀ-",origin:1,colour:'ECFFFB',fcolour:'2D767F',scolour:'1E6262',words:'ambrosia, anaerobic, anhydrous, arrhythmia, atheism, atypical'},
    '-onym':{img:'name.svg',meaning:'name',translate:"ὄνυμα (ónuma)",origin:1,colour:'EEFCA9',fcolour:'83CC61',scolour:'5A9E7C',words:'secede, sedition, seditious, seduce'},
    'capit-, -cipit-':{img:'head.svg',meaning:'head',translate:"caput, capitis",origin:0,colour:'EFF0F4',fcolour:'415F9D',scolour:'233B6E',words:'achievable, achieve, achievement, ancipital, ancipitous, biceps, bicipital, cabotage, cad, caddie, cadet, cape, capital, capitular, capitulate, capitulation, captain, chapter, chaptrel, chattel, chef, chief, chieftain, co-captain, co-captaincy, decapitate, decapitation, occipital, occiput, precipitation, precipitous, quadriceps, recap, recapitulate, sincipital, sinciput, sous-chef, subcaptain, triceps, tricipital, unicipital, vice-captain, vice-captaincy'},
    'con-, co-, col-, com-, cor-':{img:'together.svg',meaning:'with, together',translate:"cum",origin:0,colour:'384259',fcolour:'7AC7C4',scolour:'C4EDDE',words:'coagulate, collide, compress, connect, connote, contain, corrode, quondam'},
    'meter-, metr-':{img:'ruler.svg',meaning:'measure',translate:"μέτρον (métron)",origin:1,colour:'FFC8C8',fcolour:'444F5A',scolour:'3E4149',words:'anemometer, anemometric, antisymmetric, antisymmetry, asymmetric, asymmetry, axonometric, barometer, barometric, bathometer, diameter, diametric, dysmetria, graphometer, hexameter, hygrometer, hygrometry, isodiametric, isometric, isoperimetric, meter, metre, metric, metrology, metronome, monosymmetric, parameter, parameterize, parametric, parametrize, pentameter, perimeter, polymeter, symmetric, symmetry, telemeter, telemetric, telemetry, tetrameter, thermometer, trimeter, trimetric'},
  };
  if (window.location.search) {
    var root,inf=document.querySelector('info');
    for (var span in roots) {
      if (roots[span].colour===window.location.search.slice(1)) {
        root=span;
        break;
      }
    }
    document.querySelector('back').style.display='block';
    document.querySelector('lighter').style.display='none';
    document.querySelector('back').onclick=e=>window.location.search='';
    inf.classList.add(roots[span].origin?'greek':'latin');
    inf.style.backgroundColor='#'+roots[span].colour;
    inf.style.backgroundImage=roots[span].img?'url(icons/'+roots[span].img+')':'none';
    var s=document.createElement("h");
    s.innerHTML=root;
    s.style.color='#'+roots[span].scolour;
    inf.appendChild(s);
    s=document.createElement("p");
    s.innerHTML='<strong>Origin</strong>'+(roots[span].origin?'Greek':'Latin')+' &mdash; <foreign>'+roots[span].translate+'</foreign>';
    inf.appendChild(s);
    s=document.createElement("p");
    s.innerHTML='<strong>Meaning</strong>'+roots[span].meaning;
    inf.appendChild(s);
    s=document.createElement("p");
    s.innerHTML='<strong>Examples</strong>'+roots[span].words;
    inf.appendChild(s);
    s=document.querySelectorAll('info *');
    for (var i=0;i<s.length;i++) if (s[i].tagName!=='H') s[i].style.color='#'+roots[span].fcolour;
  } else {
    document.querySelector('info').style.display='none';
    for (var span in roots) {
      var s=document.createElement('root');
      s.innerHTML=span;
      s.classList.add(roots[span].origin?'greek':'latin');
      s.style.backgroundColor='#'+roots[span].colour;
      s.style.color='#'+roots[span].fcolour;
      s.style.backgroundImage=roots[span].img?'url(icons/'+roots[span].img+')':'none';
      (function(span) {
        s.onclick=e=>window.location.search=roots[span].colour;
      }(span));
      document.querySelector('roots').appendChild(s);
    }
  }
}());
