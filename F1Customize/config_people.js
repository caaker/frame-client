// id, name, pic, online, messages
const people = [

  {
    id: 0,
    name: 'Chris',
    pic: '/images/test.jpg',
    online: true,
    messages: [
      { time: 1, message: 'Hello', from: 0, to: 1 },
      { time: 2, message: 'My name is Chris', from: 0,  to: 1 },
    ]
  },

  {
    id: 1,
    name: 'Lauren',
    pic: 'https://laurenrimmerg2.files.wordpress.com/2011/05/80s-girls-19.jpg',
    online: true,
    messages: [
      { time: 1, message: 'Hi', from: 1,  to: 0 },
      { time: 2, message: 'My name is Lauren', from: 1, to: 0 },
    ]
  },

  {
    id: 2,
    name: 'Ming',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXOTBoLxxUGVk7Q2kPVUobwiHsWzD_MkWVg&s',
    online: true,
    messages: [
      { time: 1, message: 'Greetings', from: 2, to: 1 },
      { time: 2, message: 'My name is Ming', from: 2, to: 1 },
    ]
  }

];

export default people;
