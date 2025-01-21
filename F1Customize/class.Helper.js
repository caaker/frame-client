class Helper {

  constructor() {
  }

  static getBaseURL() {
    const origin = window.location.origin;
    let baseURL = '';
    if ( origin === 'https://caaker.github.io' ) {
      baseURL = 'https://frame-server-x8qw.onrender.com';
    }
    return baseURL;
  }

  static getURLs(cache = true) {
    const baseURL = this.getBaseURL();
    return {
      articles: cache ? './cache.txt' : baseURL + '/articles/get',
      users: baseURL + '/users/get',
    };
  }

}

export default Helper;
