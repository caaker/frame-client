class Global {
  constructor() {
    console.logD('DEBUG: L2 : F1-GlobalCSS');
    this.setCSSHeight();
    // this.setCSS();
  }

  // moved to :root, delete once, verified correct
  setCSS() {
    const setProp = document.documentElement.style.setProperty.bind(document.documentElement.style);
    
    // height for logo and search
    setProp('--height', '30px');
    setProp('--left', '20px');

    // global colors and opacities
    setProp('--color-blue', '#4285f3');
    setProp('--color-grey', '#444444');
    setProp('--opa', 'rgba(255, 255, 255, .9)');

  }

  // an arrow function guarantees correct this binding
  _updateVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // necessary for mobile browsers without normalized height
  setCSSHeight() {
    this._updateVh();
    window.addEventListener('resize', this._updateVh);
  }
}

// all imports use the same Global instance due to ES module caching
// this effectiveley creates a singleton
export default new Global();
