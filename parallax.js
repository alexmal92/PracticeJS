

function parallax(event) {
  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('speed');
    layer.style.transform = `translateX(${event.clientX*speed/500}px)`
  });
}

function parallaxRev(event) {
  this.querySelectorAll('.layer-rev').forEach(layer => {
    let speed = layer.getAttribute('speed');
    layer.style.transform = `translateX(-${event.clientX*speed/500}px)`
  });
}

document.addEventListener('mousemove', parallax)
document.addEventListener('mousemove', parallaxRev)