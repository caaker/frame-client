class Global {
  constructor() {
    this.setCSSHeight();
    this.setCSSConstants()
  }

  // media queries can not access global css, define here for implementation later
  // https://bholmes.dev/blog/alternative-to-css-variable-media-queries/
  setCSSConstantsFuture() {
    const media_query_phone = '701px';
    const media_query_guard = '301px';
  }

  // set global CSS values here
  setCSSConstants() {
    document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .9)');
    document.documentElement.style.setProperty('--color-blue', '#4285f3');
    document.documentElement.style.setProperty('--color-grey', '#444444');
    document.documentElement.style.setProperty('--height', '30px');
    document.documentElement.style.setProperty('--left', '20px');
  }

  // necessary for mobile browsers with out normalized height
  setCSSHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${ vh }px`);

    // update --vh on a resize
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${ vh }px`);
    });
  }

}

export default new Global();
