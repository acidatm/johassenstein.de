window.addEventListener('load', function(){
  var credit = document.getElementById('credit');
  var year = new Date().getFullYear();
  credit.outerHTML = '<a id="credit" href="https://branko3000.de" target="_blank" style="position: fixed; bottom: 0.2em; left: 0.2em; font-size: 0.8em; line-height: 0.8em; color: inherit; background: inherit; text-decoration: none;">(C)' + year + ' Branko3000</a>'
  console.log("This website is created by Branko3000. Check him out: https://branko3000.de")
});
