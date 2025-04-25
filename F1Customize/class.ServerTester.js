
// class.ServerTester.js
class ServerTester {
  static async testServer(url) {
    console.logD('DEBUG: L2 : F1-ServerTester');

    const color = '#888888'
    const startTime = performance.now();

    console.logD(`DEBUG: L2 : F1-ServerTester: start:`, color);

    try {
      const response = await fetch(url);
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      if (response.ok) {
        console.logD(`DEBUG: L2 : F1-ServerTester: response: ok: ${responseTime.toFixed(2)} ms`, color);
      } else {
        console.logD(`DEBUG: L2 : F1-ServerTester: response: !ok: ${responseTime.toFixed(2)} ms`, color);
      }
    } catch (error) {
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      console.logD(`DEBUG: L2 : F1-ServerTester: response: error: ${responseTime.toFixed(2)} ms`, color);
      // console.logD('DEBUG: L2 : F1-ServerTester: error', 'red');
      // console.logD(error);
    }
  }
}

// immediately invoke this function
const serverURL = 'https://frame-server-x8qw.onrender.com';
ServerTester.testServer(serverURL);

export default ServerTester;

// 512.495.4115