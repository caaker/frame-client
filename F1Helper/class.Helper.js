class Helper {

  constructor() {
    // use later
    // const origin = window.location.origin;
    // if ( origin === 'https://caaker.github.io' ) {}

  }

  // move to environment variable
  static getWebSocketURL() {
    return 'wss://frame-server-x8qw.onrender.com';
  }

  static getBaseURL() {
    return 'https://frame-server-x8qw.onrender.com';
  }

  static getURLs(cache = true) {
    const baseURL = this.getBaseURL();
    return {
      articles: cache ? ('./cache.txt' ) : ( baseURL + '/articles/get' ),
      users: ( baseURL + '/users/get' ),
    };
  }

  static async fetchJSON(url, options = { credentials: 'include' }, onsuccess = Helper.onSuccessDefault, onfailure = Helper.onFailureDefault) {
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      onsuccess(json);
      console.logD(('DEBUG: Helper: fetching path: ' + url), 'green');
    } catch (error) {
      onfailure(error);
      console.logD('DEBUG: Helper: fetch failed: ' + url, 'red');
      console.logD(error);
    }
  }
  
  static onFailureDefault() { 

  }

  static onSuccessDefault() { 

  }

}

export default Helper;
