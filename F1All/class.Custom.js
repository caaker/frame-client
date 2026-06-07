import config from './config_all.js';
// config.favicon, config.background, config.title

class Custom {
  constructor() {
    console.logD('DEBUG: L2 : F1-Custom', '#34A853');
    this.setFavicon();
    this.setBackground();
    this.setTitle();
  }

  setFavicon() {
    const existing = document.querySelector("link[rel='shortcut icon']");
    if (existing) existing.remove();
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

export default new Custom();