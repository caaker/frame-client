const URL = 'https://frame-server-x8qw.onrender.com/api_chatgpt/message';

async function test() {
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Give me one simple health tip.'
      })
    });
    console.log(res);
    const data = await res.json();
    console.log('Response:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();