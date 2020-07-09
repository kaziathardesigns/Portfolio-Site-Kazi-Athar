console.log("Hello, I'm Kazi and this is my canvas!")
function menutoggle() {
  var x = document.getElementById ('myNavtoggle');
  x.className += 'responsive';
  if (x.className === 'navtoggle') {
    x.className += 'responsive';
  } else {
    x.className = 'navtoggle';
  }
}
