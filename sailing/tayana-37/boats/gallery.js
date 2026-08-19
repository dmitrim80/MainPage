(function () {
  var section = document.querySelector('.photos');
  var title = document.getElementById('boat-title');
  if (!section || !title) return;

  var boatName = title.textContent.trim();
  var label = section.querySelector('.section-label');
  var placeholder = section.querySelector('.photo-placeholder');
  var photoBase = section.getAttribute('data-photo-base') || 'photos/';

  function photoUrl(filename) {
    if (filename.indexOf('/') !== -1) {
      return filename.split('/').map(function (part) {
        return encodeURIComponent(part);
      }).join('/');
    }
    return photoBase + encodeURIComponent(filename);
  }

  fetch('photos/manifest.json')
    .then(function (response) {
      if (!response.ok) throw new Error('Gallery manifest unavailable');
      return response.json();
    })
    .then(function (manifest) {
      var images = Array.isArray(manifest.images) ? manifest.images : [];
      if (!images.length) return;

      var summary = document.createElement('p');
      summary.className = 'gallery-summary';
      summary.innerHTML = '<strong>' + images.length + ' photographs</strong><span>Select an image to view full size</span>';

      var grid = document.createElement('div');
      grid.className = 'photo-grid';
      grid.setAttribute('aria-label', boatName + ' photo gallery');

      images.forEach(function (filename, index) {
        var button = document.createElement('button');
        button.className = 'photo-card';
        button.type = 'button';
        button.dataset.index = String(index);
        button.setAttribute('aria-label', 'View ' + boatName + ' photo ' + (index + 1) + ' of ' + images.length);

        var image = document.createElement('img');
        image.src = photoUrl(filename);
        image.alt = boatName + ' — photo ' + (index + 1);
        image.decoding = 'async';
        image.loading = index < 4 ? 'eager' : 'lazy';
        button.appendChild(image);
        grid.appendChild(button);
      });

      if (placeholder) placeholder.replaceWith(summary, grid);
      else section.append(summary, grid);
      if (label) label.querySelector('span').textContent = '01';

      var lightbox = document.createElement('div');
      lightbox.className = 'boat-lightbox';
      lightbox.hidden = true;
      lightbox.setAttribute('role', 'dialog');
      lightbox.setAttribute('aria-modal', 'true');
      lightbox.setAttribute('aria-label', boatName + ' full-size photo');
      lightbox.innerHTML = '<button class="boat-lightbox__close" type="button" aria-label="Close">&times;</button>' +
        '<button class="boat-lightbox__prev" type="button" aria-label="Previous photo">&#8249;</button>' +
        '<img class="boat-lightbox__image" alt="">' +
        '<button class="boat-lightbox__next" type="button" aria-label="Next photo">&#8250;</button>' +
        '<div class="boat-lightbox__caption"></div>';
      document.body.appendChild(lightbox);

      var lightboxImage = lightbox.querySelector('.boat-lightbox__image');
      var caption = lightbox.querySelector('.boat-lightbox__caption');
      var closeButton = lightbox.querySelector('.boat-lightbox__close');
      var currentIndex = 0;
      var returnFocus = null;

      function show(index) {
        currentIndex = (index + images.length) % images.length;
        lightboxImage.src = photoUrl(images[currentIndex]);
        lightboxImage.alt = boatName + ' — photo ' + (currentIndex + 1);
        caption.textContent = boatName + ' · Photo ' + (currentIndex + 1) + ' of ' + images.length;
        var preload = new Image();
        preload.src = photoUrl(images[(currentIndex + 1) % images.length]);
      }

      function open(index, trigger) {
        returnFocus = trigger;
        show(index);
        lightbox.hidden = false;
        document.body.classList.add('boat-lightbox-open');
        closeButton.focus();
      }

      function close() {
        lightbox.hidden = true;
        lightboxImage.removeAttribute('src');
        document.body.classList.remove('boat-lightbox-open');
        if (returnFocus) returnFocus.focus();
      }

      grid.addEventListener('click', function (event) {
        var card = event.target.closest('.photo-card');
        if (card) open(Number(card.dataset.index), card);
      });
      closeButton.addEventListener('click', close);
      lightbox.querySelector('.boat-lightbox__prev').addEventListener('click', function () { show(currentIndex - 1); });
      lightbox.querySelector('.boat-lightbox__next').addEventListener('click', function () { show(currentIndex + 1); });
      lightbox.addEventListener('click', function (event) { if (event.target === lightbox) close(); });
      document.addEventListener('keydown', function (event) {
        if (lightbox.hidden) return;
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowLeft') show(currentIndex - 1);
        if (event.key === 'ArrowRight') show(currentIndex + 1);
      });
    })
    .catch(function () {
      if (placeholder) {
        var message = placeholder.querySelector('p');
        if (message) message.textContent = 'The photo gallery is temporarily unavailable.';
      }
    });
})();
