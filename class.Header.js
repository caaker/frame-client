import config             from      './F1Customize/config_all.js';

class Header {
  constructor() {
    this.setFavicon();
    this.setBackground();
    this.setTitle();
  }

  // favicon
  setFavicon() {
    const look = document.querySelector('link[rel*="icon"]');
    const link = look || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = config.favicon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  // background
  setBackground() {
    document.body.style.backgroundImage = "url(" + config.background + ")";
  }    

  // title
  setTitle() {
    document.title = config.title;
  }

}

export default new Header();