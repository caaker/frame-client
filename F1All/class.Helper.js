class Helper {

  constructor() {
  }

  static getWebSocketURL() {
    return 'wss://frame-server-x8qw.onrender.com';
  }

  static getBaseURL() {
    return 'https://frame-server-x8qw.onrender.com';
  }

  // ./cache.txt vs /cache.txt
  static getURLs(cache = true) {
    const baseURL = this.getBaseURL();
    return {
      articles: cache ? ('/cache.txt' ) : ( baseURL + '/articles/get' ),
      users: ( baseURL + '/users/get' ),
    };
  }

  static async fetchJSON(url, options = { credentials: 'include' }, onsuccess = Helper.onSuccessDefault, onfailure = Helper.onFailureDefault) {
    try {
      const response = await fetch(url, options);
      
      // idiom for fetch - check for status 200 - 299
      if (!response.ok) {
        throw new Error(`HTTP error with status: ${response.status}`);
      }

      const json = await response.json();
      onsuccess(json);
    } catch (error) {
      onfailure(error);
    }
  }
  
  static onFailureDefault(error) {
    console.logD('DEBUG: Helper: fetch failed: ', 'red');
    console.log(error);
  }

  static onSuccessDefault(json) { 
  }

}

export default Helper;





