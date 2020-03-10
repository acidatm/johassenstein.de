function Branko(clock,range,spacing){
  this.colors = ['#ff0000','#00ff00','#0000ff','#ff00ff','#ffff00','#00ffff','#ffffff','#000000'];
  this.shapes = ['hRectangle','vRectangle','square','circle','vEllipse','hEllipse','vLine','hLine'];
  this.thickness = 25;''
  this.clock = 0;
  this.scroll = function(){
    if(window.pageYOffset + this.height > this.maxHeight){
      this.maxHeight += this.height;
      document.body.style.height = this.maxHeight  + 'px';
    }
    this.progress = window.pageYOffset % range / range;
    var _clock = Math.floor(window.pageYOffset % (range * clock) / range);
    if(_clock != this.clock){
      this.generateConfig(_clock);
      console.log(this.config);
    }
    this.clock = _clock;
    this.render();
  }
  this.generateConfig = function(pos){
    var fill = this.colors[pos % this.colors.length];
    var stroke = this.colors[(pos + 1) % this.colors.length];
    var shape = this.shapes[pos % this.shapes.length];
    this.config = {fill:fill,stroke:stroke,shape:shape};
    this.ctx.fillStyle = fill;
    this.ctx.strokeStyle = stroke;
    this.ctx.lineWidth = this.thickness;
  }
  this.render = function(){
    this.ctx.fillRect(0,0,this.width,this.height);
    switch(this.config.shape){
      case 'circle':
        for(var i = 0; i < this.width / spacing; i ++){
          this.ctx.beginPath();
          this.ctx.arc(this.center.x, this.center.y, i * spacing + this.progress * spacing, 0, 2 * Math.PI);
          this.ctx.stroke();
        }
        break;
      case 'hEllipse':
        for(var i = 0; i < this.width / spacing; i ++){
          var width = i * spacing + this.progress * spacing;
          var height = width * (this.height / this.width);
          this.ctx.beginPath();
          this.ctx.ellipse(this.center.x, this.center.y, width, height, 0, 2 * Math.PI,false);
          this.ctx.stroke();
        }
        break;
      case 'vEllipse':
        for(var i = 0; i < this.width / spacing; i ++){
          var width = i * spacing + this.progress * spacing;
          var height = width * (this.width / this.height);
          this.ctx.beginPath();
          this.ctx.ellipse(this.center.x, this.center.y, width, height, 0, 2 * Math.PI,false);
          this.ctx.stroke();
        }
        break;
      case 'hRectangle':
        for(var i = 0; i < this.width / spacing; i += 2){
          var width = i * spacing + this.progress * spacing;
          var height = width * (this.height / this.width);
          this.ctx.strokeRect(this.center.x - width * 0.5, this.center.y - height * 0.5, width, height);
        }
        break;
      case 'vRectangle':
        for(var i = 0; i < this.width / spacing; i += 2){
          var width = i * spacing + this.progress * spacing;
          var height = width * (this.width / this.height);
          this.ctx.strokeRect(this.center.x - width * 0.5, this.center.y - height * 0.5, width, height);
        }
        break;
      case 'square':
        for(var i = 0; i < this.width / spacing; i += 2){
          var width = i * spacing + this.progress * spacing;
          this.ctx.strokeRect(this.center.x - width * 0.5, this.center.y - width * 0.5, width, width);
        }
        break;
      case 'vLine':
        this.ctx.fillStyle = this.config.stroke;
        for(var i = 0; i < this.height / spacing / 2; i++){
          var width = i * spacing + this.progress * spacing;
          this.ctx.fillRect(0, this.center.y + width, this.width, this.thickness);
          this.ctx.fillRect(0, this.center.y - width, this.width, this.thickness);
        }
        this.ctx.fillStyle = this.config.fill;
        break;
      case 'hLine':
        this.ctx.fillStyle = this.config.stroke;
        for(var i = 0; i < this.width / spacing / 2; i++){
          var width = i * spacing + this.progress * spacing;
          this.ctx.fillRect(this.center.x + width, 0, this.thickness, this.height);
          this.ctx.fillRect(this.center.x - width,0, this.thickness, this.height);
        }
        this.ctx.fillStyle = this.config.fill;
        break;
    }
  }
  this.init = function(){
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.width = Math.max(window.innerWidth, window.outerWidth, document.body.offsetWidth, document.body.scrollWidth);
    this.height = Math.max(window.innerHeight, window.outerHeight, document.body.offsetHeight, document.body.scrollHeight);
    this.center = {x: this.width / 2, y: this.height / 2};
    this.maxHeight = this.height * 2;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d');
    window.addEventListener('scroll',function(){
      this.scroll();
    }.bind(this));
    document.body.style.height = this.maxHeight + 'px';
    this.generateConfig(0);
    this.render();
  }

  this.init();
}
new Branko(0,1000,100);
