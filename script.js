(function () {
  var wrap = document.getElementById('wrap');
  var glow = document.getElementById('glow');
  if (!wrap || !glow) return;

  wrap.addEventListener('mousemove', function (e) {
    var rect = wrap.getBoundingClientRect();
    var mx = ((e.clientX - rect.left) / rect.width) * 100;
    var my = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.left = mx + '%';
    glow.style.top = my + '%';
  });
})();
