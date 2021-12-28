window.addEventListener('load',function(){
  // initClock();
  //initCounterTitle();
  // setupCursor();
  initImages()
});

function initImages(){
  const images = [].slice.call(document.getElementsByClassName("image"))
  window.image = false
  let unset = function(){
    document.body.classList.remove("image-active")
  }
  for(let i in images){
    let img = images[i]
    let bg = img.getAttribute("data-thumbnail")
    let srcset = {
      640: img.getAttribute("data-small"),
      768: img.getAttribute("data-medium"),
      1080: img.getAttribute("data-large"),
      1440: img.getAttribute("data-full")
    }
    let wset = Object.keys(srcset).sort((a, b) => a - b)
    let set = function(x,y){
      x = x / window.innerWidth
      y = y / window.innerHeight
      document.body.style.backgroundPosition = x * 100 + "% " + y * 100 + "%"
      let src = false
      for(let w in wset){
        if(window.innerWidth < wset[w] && !src){
          src = srcset[wset[w]]
        }
      }
      if(!src){
        src = srcset[wset[wset.length - 1]]
      }
      document.body.style.backgroundImage = "url(" + src + ")"
      document.body.classList.remove("image-full")
      document.body.classList.add("image-active")
      window.image = i
    }
    img.style.backgroundImage = "url(" + bg + ")"
    img.addEventListener("mousedown",function(e){
      e.stopPropagation()
      let {clientX,clientY} = e
      set(clientX,clientY)
    })
    img.addEventListener("touchstart",function(e){
      e.stopPropagation()
      let {clientX,clientY} = e.targetTouches[0]
      set(clientX,clientY)
    })
  }
  window.addEventListener("mousemove",function(e){
    e.preventDefault()
    e.stopPropagation()
    let {clientX,clientY} = e
    if(window.cursor){
      window.cursor.style.top = clientY + "px"
      window.cursor.style.left = clientX + "px"
    }
    let x = clientX / window.innerWidth
    let y = clientY / window.innerHeight
    document.body.style.backgroundPosition = x * 100 + "% " + y * 100 + "%"
  })
  window.addEventListener("touchmove",function(e){
    e.preventDefault()
    e.stopPropagation()
    let {clientX,clientY} = e.targetTouches[0]
    let x = clientX / window.innerWidth
    let y = clientY / window.innerHeight
    document.body.style.backgroundPosition = x * 100 + "% " + y * 100 + "%"
  })
  document.body.addEventListener("mouseup",unset)
  document.body.addEventListener("touchend",unset)
}

window.active = false;
window.article = false;
window.preserve = false;

function initClock(){
  let base = new Date()
  let date = new Date()
  let hours = ('0'+ (date.getHours() - base.getHours())).slice(-2)
  let minutes = ('0'+ (date.getMinutes() - base.getMinutes())).slice(-2)
  let seconds = ('0'+ (date.getSeconds() - base.getSeconds())).slice(-2)
  document.title = hours + ':' + minutes + ':' + seconds
  setInterval(function () {
    let date = new Date()
    let hours = ('0'+ (date.getHours() - base.getHours())).slice(-2)
    let minutes = ('0'+ (date.getMinutes() - base.getMinutes())).slice(-2)
    let seconds = ('0'+ (date.getSeconds() - base.getSeconds())).slice(-2)
    document.title = hours + ':' + minutes + ':' + seconds
  }, 1000);
}
function setupCursor(){
  if(!isTouchEnabled()){
    window.cursor = document.createElement('div');
    cursor.id = 'ufo';
    document.body.appendChild(cursor)
  }
}
function isTouchEnabled() {
    return ( 'ontouchstart' in window ) ||
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}
