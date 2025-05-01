import config             from      './config_all.js';

class Header {
  constructor() {
    this.setFavicon();
    this.setBackground();
    this.setTitle();
  }

  // favicon
  setFavicon() {
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = config.favicon;
    document.head.appendChild(link);
  }

  // background
  setBackground() {
    document.body.style.backgroundImage = `url(${config.background})`;
  }    

  // title
  setTitle() {
    document.title = config.title;
  }

}

// all imports use the same instance due to ES module caching
export default new Header();