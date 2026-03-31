class Server {
  static logMetric(label, status, startTime) {
    const duration = (performance.now() - startTime).toFixed(2);
    console.logD(`DEBUG: L2 : F1-Server: ${label}: ${status}: ${duration} ms`);
  }
  static async test(url) {
    console.logD('DEBUG: L2 : F1-Server');
    const startTime = performance.now();
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
      this.logMetric('response', response.ok ? 'ok' : '!ok', startTime);
      return response.ok;
    } catch (error) {
      const errorMsg = error.name === 'TimeoutError' ? 'timeout' : error.name;
      this.logMetric('fetch error', errorMsg, startTime);
      return false;
    }
  }
}

Server.test('https://frame-server-x8qw.onrender.com');
export default Server;
