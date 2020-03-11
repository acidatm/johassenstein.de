window.addEventListener('load',function(){
  startTimer();
  startCounter();
  addInfiniscroll();
  spreadList();
  initNewsfeed();
  setLinkHover();
});

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

function spreadList(){
  var lis = [].slice.call(document.getElementById('container').getElementsByTagName('li'));
  for(var _li in lis){
    var li = lis[_li];
    li.style.marginLeft = Math.random() * (window.innerWidth - li.offsetWidth) + 'px';
  }
}

function startCounter(){
  var counter = document.getElementById('counter');
  window.addEventListener('scroll',function(){
    counter.innerText = 3000 + (Math.floor(window.pageYOffset) % 7000);
  },counter);
}

function addInfiniscroll(){
  var container = document.getElementById('container');
  var html = container.innerHTML;
  container.innerHTML += html;
  window.addEventListener('scroll',function(){
    if(window.pageYOffset + window.innerHeight * 2 >= container.offsetHeight){
      // if(container.offsetHeight > 10000){
      //   window.scrollTo(0,0);
      // }
      container.innerHTML += html;
    }
  },container,html);
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
      inner += '<span class="blush" data-color="red" onmouseover="blush(this)">' + hover.innerHTML.charAt(i) + '</span>';
    }
    hover.innerHTML = inner;
  }
}
function blush(e){
 e.style.color = e.getAttribute('data-color');
}
function prepareCanvas(){
  var canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
