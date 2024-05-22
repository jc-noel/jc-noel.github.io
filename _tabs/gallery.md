---
layout: gallery
icon: fas fa-images
order: 3
---

This is my gallery page, straight from imgur. First I run `fetch-imgur-images.js` to get the images, then these are saved to the `_data` folder as `imgur-images.json`. This is then used by the `gallery.html` layout to display the images. 

```html
{% raw %}{% for image in site.data.imgur-images %}
  <img src="{{ image.url }}" alt="{{ image.title }}" />
{% endfor %}{% endraw %}
```