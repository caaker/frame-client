class Server {
  static async test(url) {
    console.logD('DEBUG: L2 : F1-Server');
    const color = 'orange';

    // fetch does not have a default timeout so we will abort it after 2 min using the AbortController idiom below
    // wake up time for free tier servers can take a while
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    // start the test using performance.now() which has a resolution of about 5 us
    const startTime = performance.now();
    // console.logD(`DEBUG: L2 : F1-Server: start:`, color);
    try {
      const response = await fetch(url, {signal});
      const responseTime = (performance.now() - startTime).toFixed(2);
      console.logD(`DEBUG: L2 : F1-Server: response: ${response.ok ? 'ok' : '!ok'}: ${responseTime} ms`, color);
      return true;
    } catch (error) {
      const responseTime = (performance.now() - startTime).toFixed(2);
      console.logD(`DEBUG: L2 : F1-Server: fetch error (${error.name}): ${responseTime} ms`, color);
      return false;
    } finally {
      // even with return statements above, this will run
      clearTimeout(timeoutId);
    }  
  }
}
Server.test('https://frame-server-x8qw.onrender.com');
export default Server;
