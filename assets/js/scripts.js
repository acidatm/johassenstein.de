const INDEX_TOPICS = [
  {
    image: 'dino',
    color: '#000000',
    description: '"TRAM / What\'s your favourite dinosaur?"\n\nesoteric programming language,\ntypographic midi sequencer and\ninteractive installation\n2022',
    link: '/software/tram',
  },
  {
    image: 'hykom',
    color: '#ffffff',
    description: '"HYKOM"\n\nstagedesign, sound, graphics and\ncustom font for a play at the\nDeutsches Schauspielhaus Hamburg\n2022',
    link: '/graphic/hykom/',
  },
  {
    image: 'xeroxpark',
    color: '#ffffff',
    description: '"Xerox Park"\n\nacid techno ep,\ntaperelease with\nriso printed jcards\n2023',
    link: '/music/xeroxpark/',
  }
]
let N = 2
let INIT = false

window.addEventListener('DOMContentLoaded',function(){
  initImages()
  initVideos()
  initIndex()
});

function unset(e){
  e.stopPropagation()
  console.log("Unset");
  document.body.classList.remove("image-active","video-active")
}

function initIndex(){
  let index = document.getElementById("index")
  let link = document.getElementById("indexDescription")
  if(index){
    index.addEventListener("click",randomIndexTopic)
    link.addEventListener("click",function(e){
      e.stopPropagation()
    })
    randomIndexTopic()
  }
}

function randomIndexTopic(){
  if(!INIT){
    for(let t in INDEX_TOPICS){
      let topic = INDEX_TOPICS[t]
      let image = new Image()
      image.src = getIndexImageForTopic(topic)
    }
    INIT = true
  }
  let oldtopic = false
  if(N < 0){
    N = Math.floor(Math.random() * INDEX_TOPICS.length)
  }
  else{
    oldtopic = INDEX_TOPICS[N]
    N++
    if(N == INDEX_TOPICS.length){
      N = 0
    }
  }
  let index = document.getElementById("index")
  let description = document.getElementById("indexDescription")
  let link = document.getElementById("indexLink")


  let topic = INDEX_TOPICS[N]
  let imageUrl = getIndexImageForTopic(topic)

  function getIndexImageForTopic(topic){
    let imagetype = window.innerWidth + 200 < window.innerHeight ? "mobile" : window.innerHeight + 200 < window.innerWidth ? "desktop" : "square"
    let imageUrl = "/index/" + topic.image + "_" + imagetype + ".jpg"
    return imageUrl
  }
  if(oldtopic){
    index.classList.remove("topic-"+oldtopic.image)
  }
  index.classList.add("topic-"+topic.image)
  index.style.backgroundImage = 'url("' + imageUrl + '")'
  index.style.color = topic.color


  description.innerText = topic.description
  description.href = topic.link
  description.style.color = topic.color

  link.href = topic.link
  link.innerHTML = "more >>>"
  link.style.color = topic.color
}

function initVideos(){
  const videos = [].slice.call(document.getElementsByClassName("video"))
  const display = document.getElementById("display")
  const video = document.getElementById("video")
  video.addEventListener("click",unset)
  function set(vid){
    display.style.backgroundImage = "none"
    document.body.classList.add("video-active")
    video.src = vid.src
  }
  for(let v in videos){
    let vid = videos[v]
    vid.addEventListener("click",function(e){
      set(vid)
    })
  }
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
