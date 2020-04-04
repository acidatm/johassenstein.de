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
    credit.outerHTML = '<a id="credit" href="https://branko3000.de" target="_blank" style="z-index: 1000000; position: fixed; bottom: 0.2em; left: 0.2em; font-size:16px; line-height: 16px; color: inherit; background: inherit; text-decoration: none;">(C)' + year + ' Branko3000</a>';
  }
  console.log("This website is created by Branko3000. Check him out: https://branko3000.de");
  var c = document.createComment("This website is created by Branko3000. Check him out: https://branko3000.de");
  document.body.insertBefore(c, document.body.firstChild);;
},me);
