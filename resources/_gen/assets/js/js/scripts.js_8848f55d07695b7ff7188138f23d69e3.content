window.addEventListener('load',function(){
  startTimer();
  var size = [].slice.call(document.getElementById('container').getElementsByTagName('li')).length;
  addInfiniscroll();
  spreadList(size);
  copyBody();
  initNewsfeed();
  setLinkHover();
});

// function getEggs(){
//   var eggMeta = document.head.querySelector("[name~=eggs][content]")
//   var eggs = eggMeta.content.split(',');
//   eggMeta.remove();
//   return eggs;
// }
function startTimer(){
  if(document.getElementById('clock')){
    var timer = document.getElementById('clock');
    var setTimer = function () {
      function pad(n){
        return String("00" + n).slice(-2);
      }
      var date = new Date();
      timer.innerHTML = pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
    }
    setTimer();
    setInterval(setTimer, 1000, timer);
  }
}

function spreadList(listSize){
  var container = document.getElementById('container');
  var list = [].slice.call(container.getElementsByTagName('li'));
  var max =  Number(window.getComputedStyle(container).getPropertyValue("width").replace('px',''));
  for(var i = 0; i < listSize; i++){
    randomMargin(list[i],max);
  }
}
function randomMargin(e,max){
  e.style.marginLeft = Math.random() * (max - e.offsetWidth) + 'px';
}

function addInfiniscroll(eggs){
  var container = document.getElementById('container');
  while(container.offsetHeight < 7000){
    container.innerHTML += container.innerHTML;
  }
  container.style.height = '7000px';
  var max = container.offsetHeight;
  var counter = document.getElementById('counter');
  window.addEventListener('scroll',function(){
    var perc = window.pageYOffset / max;
    if(perc >= 1){
      window.scrollTo(1,0);
      document.body.scrollTop = 1;
      document.documentElement.scrollTop = 1;
    }
    else if(perc <= 0){
      window.scrollTo(max - 1,0);
      document.body.scrollTop = max -1;
      document.documentElement.scrollTop = max-1;
    }
    counter.innerText = 3000 + Math.floor(perc * 7000);
  }, max,counter);
}

function copyBody(){
  var container = document.getElementById('container');
  var copy = document.createElement('div');
  copy.className = 'container';
  copy.innerHTML = container.innerHTML;
  document.body.appendChild(copy);
}

function initNewsfeed(){
  var feed = document.getElementById('newsfeed');
  var news = [].slice.call(feed.getElementsByTagName('a'));
  var html = '';
  for(var i = 0; i < 10; i++){
    for(var link in news){
      html += news[link].outerHTML + ' +++ ';
    }
  }
  feed.innerHTML = html;
}

function setLinkHover(){
  var hovers = [].slice.call(document.getElementsByTagName('a'));
  for(var _hover in hovers){
    var hover = hovers[_hover];
    var inner = '';
    for(var i = 0; i < hover.innerHTML.length; i++){
      inner += '<span data-blushed="0" onmouseover="blush(this)">' + hover.innerHTML.charAt(i) + '</span>';
    }
    hover.innerHTML = inner;
  }
}
function blush(e){
  var colors = ['red','blue','black']
  var blushed = Number(e.getAttribute('data-blushed'));
  e.setAttribute('data-blushed', blushed + 1);
  e.style.color = colors[blushed % colors.length];
}
function prepareCanvas(){
  var canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
