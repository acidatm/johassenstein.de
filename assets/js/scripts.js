const INDEX_TOPICS = [
  {
    image: 'dino',
    color: '#000000',
    description: '"TRAM / What\'s your favourite dinosaur?"\n\nesoteric programming language,\ntypographic midi sequencer and\ninteractive installation\n2022',
    link: '/software/tram',
  },
  {
    image: 'process',
    color: '#ffffff',
    description: '"Untitled Process"\n\series of 3D printed clay sculptures\nthat evolved from the errors in\nreproducing an original object\n2023',
    link: '/hardware/untitled-process/',
  },
  {
    image: 'hykom',
    color: '#ffffff',
    description: '"HYKOM"\n\nstagedesign, sound, graphics and\ncustom font for a play at the\nDeutsches Schauspielhaus Hamburg\n2022',
    link: '/graphic/hykom/',
  },
  {
    image: 'comic',
    color: '#ffffff',
    description: '"Es Rieselt Laut"\n\screen printed comic\nand christmas card\nwith typewriten poem\n2022',
    link: '/graphic/es-rieselt-laut/',
  }
]
let N = 3
let INIT = false

window.addEventListener('DOMContentLoaded',function(){
  let index = document.getElementById("index")
  index ? initIndex() : initImages()
  // initVideos()

})

function initIndex(){

}

function unset(e){
  e.stopPropagation()
  document.body.classList.remove("image-active","video-active")
}






function initImages(){
  const images = [].slice.call(document.getElementsByClassName("image"))
  const display = document.getElementById("display")
  display.addEventListener("click",unset)

  function set(img,full){
    let src = getSrc(img,full)
    display.style.backgroundImage = "url(" + src + ")"
    document.body.classList.add("image-active")
  }
  function getSrc(img,full){
    let bg = img.getAttribute("data-thumbnail")
    let src
    let cap = full ? window.innerWidth : 1080
    let srcset = {
      640: img.getAttribute("data-small"),
      768: img.getAttribute("data-medium"),
      1080: img.getAttribute("data-large"),
      1440: img.getAttribute("data-full")
    }
    let wset = Object.keys(srcset).sort((a, b) => a - b)
    for(let w in wset){
      if(cap < wset[w] && !src){
        src = srcset[wset[w]]
      }
    }
    if(!src){
      src = srcset[wset[wset.length - 1]]
    }
    return src
  }
  for(let i in images){
    let img = images[i]
    img.src = getSrc(img)
    img.addEventListener("click",function(e){
      set(img,true)
    })
  }
}
