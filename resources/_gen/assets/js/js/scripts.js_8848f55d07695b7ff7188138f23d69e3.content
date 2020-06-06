window.addEventListener('load',function(){
  initParticles();
  initCounterTitle();
  // setupCursor();
});
window.addEventListener("resize",function(){
  initParticles();
})

window.active = false;
window.article = false;
window.preserve = false;

function initCounterTitle(){
  setTitle();
  document.addEventListener("click",function(){
    document.title = "0000"
  })
}
function setTitle(){
  document.title = ("000" + (Number(document.title) + 1) % 3001).slice(-4)
  setTimeout(function () {
    setTitle()
  }, 10);
}
function setActive(element,force){
  if(force || !window.preserve){
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
      setTimeout(function () {
        element.parentNode.scrollTop = element.offsetTop;
      }, 10,element);
      window.article = element;
    }
  }
}
function toggleActive(element){
  if(!window.preserve){
    if(window.active == element){
      activate(element,false)
    }
    else{
      activate(element,true)
    }
  }
}
function activate(element, flag, force){
  if(force || !window.preserve){
    if(flag){
      if(window.active){
        activate(window.active,false,force)
      }
      element.classList.add("active");
      window.active = element;
    }
    else{
      element.classList.remove("active");
      window.active = false
    }
  }
}

function initParticles(){
  // if(window.innerWidth < 640){
  //   particlesJS.load('particles', 'config/particles-small.json');
  // }
  // else if(window.innerWidth < 1080){
  //   particlesJS.load('particles', 'config/particles-medium.json');
  // }
  // else{
  //   particlesJS.load('particles', 'config/particles-large.json');
  // }
  particlesJS.load('particles', 'config/particles.json');
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
    }
    element.classList.add("loaded")
  }
}

function openLightbox(element){
  window.preserve = true;
  var lightbox = document.getElementById("lightbox");
  var container = document.getElementById("lightbox-container");
  lightbox.style.backgroundImage = "url(" + element.getAttribute("data-full") + ")";
  container.classList.add("open");
}
function closeLightbox(){
  var lightbox = document.getElementById("lightbox");
  var container = document.getElementById("lightbox-container");
  lightbox.style.backgroundImage = "none";
  container.classList.remove("open");
  setTimeout(function () {
    window.preserve = false;
  }, 500);
}
