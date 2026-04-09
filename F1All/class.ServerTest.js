// update this file to collect data and graph it maybe ...
// T1 = 01 s (1 second response is considered good or active) ( actual active is about 100 ms )
// T2 = 60 s (run every 60 seconds to assess server response time) 
console.logD('DEBUG: L2 : F1-Server');

class ServerTest {
  static logMetric(label, status, startTime) {
    const duration = (performance.now() - startTime).toFixed(2);
    console.logD(`DEBUG: F1-ServerTest: ${label}: ${status}: ${duration} ms`, 'brown');
  }
  static async testServer(url) {
    const startTime = performance.now();
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
      this.logMetric('fetch completed', response.ok ? 'ok' : '!ok', startTime);
      return response.ok;
    } catch (error) {
      const errorMsg = ( error.name === 'TimeoutError' ) ? 'timeout' : error.name;
      this.logMetric('fetch failed', errorMsg, startTime);
      return false;
    }
  }
}

ServerTest.testServer('https://frame-server-x8qw.onrender.com');
export default ServerTest;