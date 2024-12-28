import config             from      './F1Customize/config_all.js';

class Header {
  constructor(title, favicon, background) {
    this.setTitle(title);
    this.setFavicon(favicon);
    this.setBackground(background);
  }

  setTitle(title) {
    document.title = title;
  }

  setFavicon(favicon) {
    const look = document.querySelector('link[rel*="icon"]');
    const link = look || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = favicon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  setBackground(background) {
    const arr_natural = [
      'images/bg-0.jpg',
      'images/bg-1.png',
      'images/bg-2.jpg'
    ];
    const arr_metal = [
      'images/bg-3.jpeg',
      'images/bg-4.jpeg'
    ];
    let arr = background === 'metal' ? arr_metal : arr_natural;
    const i = Math.floor(Math.random() * arr.length);
    document.body.style.backgroundImage = 'url(' + arr[i] + ')';
  }
}

export default new Header(config.title, config.favicon, config.background);