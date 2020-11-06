function JSEED(config){
  this.data = {
    lastVisit: null,
    lastWater: null,
    container: null
  }
  this.init = function(){
    this.updateCookies()
    this.createContainer()
    this.container.innerHTML = this.data.lastVisit + '<br>' + this.data.lastWater
  }
  this.createContainer = function(){
    this.data.container = document.createElement('div')
    this.data.container.id = 'JSEEDcontainer'
    this.data.container.style.cssText = "position: fixed; left: 0; bottom: 0; width: 10vh; height: 10vh;"
    document.body.appendChild(this.data.container)
  }
  this.updateCookies = function(){
    let currentVisit = new Date().now()
    if(this.util.getCookie('jseed-last-visit')){
      this.data.lastVisit = this.util.getCookie('jseed-last-visit')
      this.data.lastWater = this.util.getCookie('jseed-last-water')
    }
    else{
      this.data.lastVisit = currentVisit
      this.data.lastWater = currentVisit
    }
    this.util.setCookie('jseed-last-visit',currentVisit)
  }
  this.util = {
    getCookie: function(cname){
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    setCookie: function (cname, cvalue) {
      var d = new Date();
      d.setTime(d.getTime() + (365*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  }
}
