window.onload = function(){
  var container = document.getElementsByClassName('main')[0].getElementsByTagName('ul')[0]
  var planes = [].slice.call(container.getElementsByTagName('li'));
  for(var plane in planes){
    console.log(planes[plane].parentNode);
    if(planes[plane].parentNode === container){
      planes[plane].style.left = plane + 'rem';
      planes[plane].style.bottom = plane + 'rem';
      planes[plane].style.zIndex = planes.length - plane;
    }
  }
  var main = document.getElementsByClassName('main')[0];
  main.style.width = 'calc(50vw + ' + (planes.length - 1) + 'rem)';
  main.style.height = 'calc(50vw + ' + (planes.length - 1) + 'rem)';
}
