// var layout = {
//   logo: [
//     '____________  ___   _   _  _   _______  _____  _____  _____  _____ '
//     '| ___ \ ___ \/ _ \ | \ | || | / /  _  ||____ ||  _  ||  _  ||  _  |',
//     '| |_/ / |_/ / /_\ \|  \| || |/ /| | | |    / /| |/' || |/' || |/' |',
//     '| ___ \    /|  _  || . ` ||    \| | | |    \ \|  /| ||  /| ||  /| |',
//     '| |_/ / |\ \| | | || |\  || |\  \ \_/ /.___/ /\ |_/ /\ |_/ /\ |_/ /',
//     '\____/\_| \_\_| |_/\_| \_/\_| \_/\___/ \____/  \___/  \___/  \___/ '
// }
var layout = {
  header: {
    width: 1,
    height: 0.1,
    margin: {
      top: 0.25,
      right: 0.4,
      bottom: 0.25,
      left: 0.4,
    },
    spacers: {
      left: '#',
      right: '#',
      top: '#',
      bottom: '#',
      space: ' '
    }
  },
  footer: {
    width: 0.7,
    height: 0.1,
    margin: {
      top: 0.1,
      right: 0.1,
      bottom: 0.1,
      left: 0.1
    },
    spacers: {
      left: '#',
      right: '#',
      top: '#',
      bottom: '#',
      space: ' '
    }
  },
  nav: {
    width: 0.3,
    height: 0.9,
    margin: {
      top: 0.1,
      right: 0.1,
      bottom: 0.1,
      left: 0.1
    },
    spacers: {
      left: '#',
      right: '#',
      top: '#',
      bottom: '#',
      space: ' '
    }
  },
  main: {
    width: 0.7,
    height: 0.8,
    margin: {
      top: 0.1,
      right: 0.1,
      bottom: 0.1,
      left: 0.1
    },
    spacers: {
      left: '#',
      right: '#',
      top: '#',
      bottom: '#',
      space: ' '
    }
  }
}
new Asciifier('monospace',18,'white','blue',2000,layout);

function Asciifier(font,size,color,background,height,layout){

  this.scrollPosition = 0; //virtual scroll Position
  this.offset = 0; //virtual offset based on scroll Position
  this.scroll = function(value){
    this.scrollPosition = Math.min(Math.max(this.scrollPosition + value, 0), height);
    this.offset = Math.floor( this.scrollPosition / size);
    this.generate();
  }
  this.generate = function(){
    this.determineWidth();
    this.determineHeight();
    this.determineLayout();
    this.setBody(this.createContent());
  }
  this.determineWidth = function(){
    var determiner = document.createElement('div');
    determiner.style.position = 'fixed';
    // determiner.style.top = '-1000000px';
    // determiner.style.left = '-1000000px';
    determiner.style.top = '0px';
    determiner.style.left = '0px';
    determiner.style.width = '100vw';
    determiner.style.fontSize = size + 'px';
    determiner.style.fontFamily = font;
    document.body.appendChild(determiner);
    var _offset = offset = 0;
    var i = 0;
    while(_offset == offset){
      var div = document.createElement('div');
      div.innerHTML = 'x';
      div.style.display = 'inline-block';
      determiner.appendChild(div);
      _offset = div.offsetTop;
      i++;
    }
    this.width = i - 1;
    document.body.removeChild(determiner);
  }
  this.determineHeight = function(){
    var determiner = document.createElement('div');
    determiner.style.position = 'fixed';
    // determiner.style.top = '-1000000px';
    // determiner.style.left = '-1000000px';
    determiner.style.top = '0px';
    determiner.style.left = '0px';
    determiner.style.height = '100vh';
    determiner.style.fontSize = size + 'px';
    determiner.style.lineHeight = size + 'px';
    determiner.style.fontFamily = font;
    document.body.appendChild(determiner);
    var offset = 0;
    var i = 0;
    while(offset < determiner.offsetHeight){
      var div = document.createElement('div');
      div.innerHTML = 'x';
      div.style.display = 'block';
      determiner.appendChild(div);
      offset = div.offsetTop;
      i++;
    }
    this.height = i - 2;
    document.body.removeChild(determiner);
  }
  this.setBody = function(content){
    document.body.style.color = color;
    document.body.style.background = background;
    document.body.style.fontSize = size + 'px';
    document.body.style.lineHeight = size + 'px';
    document.body.style.fontFamily = font;
    document.body.style.padding = 0;
    document.body.style.margin = 0;
    document.body.style.overflow = 'hidden';
    document.body.style.whiteSpace = 'pre';
    document.body.innerHTML = content;
  }
  this.determineLayout = function(){
    this.layout = {};
    var keys = Object.keys(layout);
    for(var key in keys){
      var area = keys[key];
      this.layout[area] = {};
      this.layout[area].width = Math.round(layout[area].width * this.width);
      this.layout[area].height = Math.round(layout[area].height * this.height);
      this.layout[area].margin = {};
      this.layout[area].margin.top = Math.round(layout[area].margin.top * this.layout[area].height);
      this.layout[area].margin.right = Math.round(layout[area].margin.right * this.layout[area].width);
      this.layout[area].margin.bottom = Math.round(layout[area].margin.bottom * this.layout[area].height);
      this.layout[area].margin.left = Math.round(layout[area].margin.left * this.layout[area].width);
      if(!this.layout[area].content){
        this.layout[area].content = document.getElementsByTagName(area)[0].innerText;
      }
    }
  }
  this.createArea = function(area,x,y){
    var char = 'X';
    /*DIVIDER*/
    if(y == 0){
      char = layout[area].spacers.top;
    }
    else if(y == this.layout[area].height - 1){
      char = layout[area].spacers.bottom;
    }
    else if(x == 0){
      char = layout[area].spacers.left;
    }
    else if(x == this.layout[area].width - 1){
      char = layout[area].spacers.right;
    }
    /*main*/
    else if(
      y > this.layout[area].margin.top &&
      y < this.layout[area].height - this.layout[area].margin.bottom - 1 &&
      x > this.layout[area].margin.left &&
      x < this.layout[area].width - this.layout[area].margin.right - 1
    ){
      if(this.layout[area].content.charAt(x)){
        console.log(x,y);
        char = 'X';
      }
      else{
        char = layout[area].spacers.space;
      }
    }
    /*SPACING*/
    else{
      char = layout[area].spacers.space;
    }
    return char;
  }
  this.createContent = function(){
    var html = '';
    var area = null;
    for(var y = 0; y < this.height; y++){
      for(var x = 0; x < this.width; x++){
        /*HEADER*/
        if(y < this.layout.header.height){
          html += this.createArea('header',x,y)
        }
        else if(x < this.layout.nav.width){
          html += this.createArea('nav',x,y - this.layout.header.height);
        }
        else if(y >= this.height - this.layout.footer.height){
          html += this.createArea('footer',x - this.layout.nav.width, y - this.layout.header.height - this.layout.main.height);
        }
        else{
          html += this.createArea('main',x - this.layout.nav.width, y - this.layout.header.height );
        }
      }
      html += '<br>'; //add a break after each row
    }
    return html;
  }
  window.addEventListener('load',function(){this.generate();}.bind(this));
  window.addEventListener('resize',function(){this.generateTest();}.bind(this));
  // window.addEventListener('scroll',function(){console.log(e);}.bind(this));
}
//   window.addEventListener('resize', myEfficientFn);
// var myEfficientFn = debounce(function() {
// 	console.log('hi');
// }, 250);
//
//
//
// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };
