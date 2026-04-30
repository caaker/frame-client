import store from '../_redux/store';
import { setServer } from '../_redux/f-server';
let heartbeat = 0;
const url = 'https://frame-server-x8qw.onrender.com';

const testServer = async () => {
  const start = performance.now();
  let ok = false;
  let status = 'error';
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    ok = res.ok;
    status = ok ? 'ok' : '!ok';
  } catch (e) {
    status = e.name === 'TimeoutError' ? 'timeout' : e.name;
  }
  const duration = (performance.now() - start).toFixed(2);
  if(heartbeat === 0) {
    console.logD(`DEBUG: F1-ServerTest: ${ok ? 'success' : 'failed'}: ${status}: ${duration} ms`, 'brown');
  }
  store.dispatch(setServer({ ready: ok, heartbeat: ++heartbeat }));
  return ok;
};

testServer();
setInterval(testServer, 10000);

export default { testServer };