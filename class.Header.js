import config             from      './F1Customize/config_private.js';

class Header {
  constructor(title, favicon, background) {
    this.addTitle(title);
    this.addFavicon(favicon);
    this.setHeight();
    this.addBackground(background);
    this.setGlobalCSS()
  }

  // find a way to use these
  useMagicConstants() {
    // magic constants
    const media_query_phone = '701px';
    const media_query_guard = '301px';
    const apex_height =       '50px';
  }

  addTitle(title) {
    document.title = title;
  }

  addFavicon(favicon) {
    const look = document.querySelector('link[rel*="icon"]');
    const link = look || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = favicon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  setHeight() {

    // necessary for mobile browsers not being normalized
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${ vh }px`);

    // update --vh on a resize
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${ vh }px`);
    });
  }

  setGlobalCSS() {
    document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .9)');
    document.documentElement.style.setProperty('--color-blue', '#4285f3');
    document.documentElement.style.setProperty('--color-grey', '#444444');
    document.documentElement.style.setProperty('--height', '30px');
    document.documentElement.style.setProperty('--left', '20px');
  }

  addBackground(background) {

    const arr_natural = [
      'images/bg-0.jpg',
      'images/bg-1.png',
      'images/bg-2.jpg'
    ];

    const arr_metal = [
      'images/bg-3.jpeg',
      'images/bg-4.jpeg'
    ];

    let arr;

    if(background === 'metal') {
      arr = arr_metal;
    } else {
      arr = arr_natural;
    }

    const i = Math.floor(Math.random() * 10) % arr.length;
    document.body.style.backgroundImage = 'url(' + arr[i] + ')';
  }

}

export default new Header(config.title, config.favicon, config.background);
