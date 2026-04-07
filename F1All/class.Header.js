import config from './config_all.js';

class Header {
  constructor() {
    console.logD('DEBUG: L2 : F1-Header', 'purple');
    this.setFavicon();
    this.setBackground();
    this.setTitle();
  }

  setFavicon() {

    // Remove existing favicon if present
    const existing = document.querySelector("link[rel='shortcut icon']");
    if (existing) existing.remove();

    // Add new dynamic favicon
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = config.favicon + '?favicon_dynamic=true';
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
