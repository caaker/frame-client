import config from './config_all.js';

class Header {
  constructor() {
    console.logD('DEBUG: L2 : F1-Header');
    this.setFavicon();
    this.setBackground();
    this.setTitle();
  }

  setFavicon() {
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = config.favicon;
    document.head.appendChild(link);
  }

  setBackground() {
    document.body.style.backgroundImage = `url(${config.background})`;
  }    

  setTitle() {
    document.title = config.title;
  }
}

export default new Header();