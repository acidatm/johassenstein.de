window.addEventListener('load', function(){
  var credit = document.getElementById('credit');
  var year = new Date().getFullYear();
  credit.outerHTML = '<a id="credit" href="https://branko3000.de" target="_blank" style="position: fixed; bottom: 1em; right: 1em; font-size: 1em; line-height: 1em; color: inherit; background: inherit; text-decoration: none;">(C)' + year + ' Branko3000 LOL</a>'
});
