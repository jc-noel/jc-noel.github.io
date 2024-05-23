export function initMasonry() {
  document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.gallery');
    if (elem) {
      var msnry = new Masonry(elem, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true,
        gutter: 16,
      });
    }

    var images = document.querySelectorAll('.gallery img');
    images.forEach(function (img) {
      img.addEventListener('load', function () {
        msnry.layout();
      });
    });
  });
}
