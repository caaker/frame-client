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
      articles: cache ? ('./cache.txt' ) : ( baseURL + '/articles/get' ),
      users: ( baseURL + '/users/get' ),
    };
  }

  static async fetchJSON(url, options, onsuccess, onfailure) {
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      onSuccess(data);
    } catch (error) {
      onFailure(error);
      console.log(errror)
    }
  }
}

export default Helper;
