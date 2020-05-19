window.addEventListener('load',function(){
  initParticles();
  setupCursor();
});
window.addEventListener("resize",function(){
  initParticles();
})

window.active = false;
window.article = false;

function setActive(element){
  if(window.article == element){
    element.classList.remove("active");
    window.article = false;
  }
  else{
    if(window.article){
      window.article.classList.remove("active");
    }
    preload(element)
    element.classList.add("active");
    element.parentNode.scrollTop = element.offsetTop;
    window.article = element;
  }
}
function toggleActive(element){
  if(window.active == element){
    activate(element,false)
  }
  else{
    activate(element,true)
  }
}
function activate(element, flag){
  if(flag){
    if(window.active){
      activate(window.active,false)
    }
    element.classList.add("active");
    window.active = element;
  }
  else{
    element.classList.remove("active");
    window.active = false
  }
}

function initParticles(){
  if(window.innerWidth < 640){
    particlesJS.load('particles', 'config/particles-small.json');
  }
  else if(window.innerWidth < 1080){
    particlesJS.load('particles', 'config/particles-medium.json');
  }
  else{
    particlesJS.load('particles', 'config/particles-large.json');
  }
}

function setupCursor(){
  // document.body.style.cursor = 'none';
  var cursor = document.createElement('div');
  cursor.id = 'ufo';
  document.body.appendChild(cursor)
  window.addEventListener('mousemove',function(e){
    cursor.style.top = e.clientY;
    cursor.style.left = e.clientX;
  },cursor);
}

function preload(element){
  if(!element.classList.contains("loaded")){
    console.log("p");
    var res = "thumbnail";
    if(window.innerWidth > 768){
      res = "large"
    }
    else if(window.innerWidth > 640){
      res = "medium"
    }
    else if(window.innerWidth > 480){
      res = "small"
    }
    var images = [].slice.call(element.getElementsByTagName('img'));
    for(var img in images){
      img = images[img]
      img.src = img.getAttribute("data-" + res)
      console.log(img);
    }
    element.classList.add("loaded")
  }
}
