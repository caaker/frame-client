class Global {
  constructor() {
    console.logD('DEBUG: L2 : F1-GlobalCSS');
    this.setCSSHeight();
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
