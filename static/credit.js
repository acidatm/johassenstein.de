var me = document.currentScript;
window.addEventListener('load', function(){
  var silencedURLS = [
    'bodydrumanddance.com',
    'latour-entwicklung.de',
    'aliciaaswani.de',
    'ba-fitness.de'
  ]
  var credit = document.getElementById('credit') || me || document.querySelector('script[src="https://branko3000.de/credit.js"]');
  var year = new Date().getFullYear();
  var url = window.location.hostname;
  var silenced = silencedURLS.includes(url);
  if(silenced){
    document.body.removeChild(credit);
  }
  else{
    credit.outerHTML = '<a id="credit" href="https://branko3000.de" target="_blank" style="z-index: 1000000; position: fixed; bottom: 0; left: 0; font-size:10px; font-family:serif;line-height: 10px; color: red; background: white; padding: 1px; text-decoration: none;">DREITAUSEND</a>';
  }
  console.log("This website is created by Branko3000. Check him out: https://branko3000.de");
  var c = document.createComment("This website is created by Branko3000. Check him out: https://branko3000.de");
  document.body.insertBefore(c, document.body.firstChild);;
},me);
