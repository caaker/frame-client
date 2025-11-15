class Server {
  static async test(url) {
    console.logD('DEBUG: L2 : F1-Server');
    const color = '#888888'

    // fetch does not have a default timeout so we will abort it after 1 min using the AbortController idiom below
    // AbortController is a built in class
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    // start the test using performance.now() which has a resolution of about 5 us
    const startTime = performance.now();
    console.logD(`DEBUG: L2 : F1-Server: start:`, color);
    try {
      const response = await fetch(url, {signal});
      const responseTime = (performance.now() - startTime).toFixed(2);
      console.logD(`DEBUG: L2 : F1-Server: response: ${response.ok ? 'ok' : '!ok'}: ${responseTime} ms`, color);
    } catch (error) {
      const responseTime = (performance.now() - startTime).toFixed(2);
      console.logD(`DEBUG: L2 : F1-Server: fetch error (${error.name}): ${responseTime} ms`, color);
    } finally {
      clearTimeout(timeoutId);
    }  
  }
}
Server.test('https://frame-server-x8qw.onrender.com');
export default Server;

// update to use this helper function later
// const log = (msg) => console.logD(`DEBUG: L2 : F1-Server: ${msg}`, color);