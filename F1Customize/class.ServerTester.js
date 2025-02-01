
// class.ServerTester.js
class ServerTester {
  static async testServer(url) {
    console.logD('DEBUG: L2 : F1-ServerTester');

    const startTime = performance.now();

    try {
      const response = await fetch(url);
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      console.logD(`DEBUG: L2 : F1-ServerTester: Response time: ${responseTime.toFixed(2)} ms`);
      if (response.ok) {
        // console.logD('DEBUG: L2 : F1-ServerTester: success', 'green');
      } else {
        // console.logD('DEBUG: L2 : F1-ServerTester: fail', 'red');
        // console.logD(response);
      }
    } catch (error) {
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      console.logD(`DEBUG: L2 : F1-ServerTester: Response time: ${responseTime.toFixed(2)} ms`);
      // console.logD('DEBUG: L2 : F1-ServerTester: error', 'red');
      // console.logD(error);
    }
  }
}

const serverURL = 'https://frame-server-x8qw.onrender.com';

ServerTester.testServer(serverURL);

export default ServerTester;