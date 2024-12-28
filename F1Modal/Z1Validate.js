import arc                            from 'frame-arc';

export default (name, value) => {

  if(name === 'link') {
    const link = new arc.URL(value);
    if( !link.valid ) {
      return false;
    }
  }

  if(name === 'image') {
    const image = new arc.URL(value);
    if( !image.valid ) {
      return false;
    }
  }

  if(name === 'title') {
    if( value === '') {
      return false;
    }
  }

  if(name === 'summary') {
    if( value === '') {
      return false;
    }
  }

  if(name === 'tag') {
    if( value === '') {
      return false;
    }
  }

  if(name === 'domain') {
    if( value === '') {
      return false;
    }
  }

  return true;

};
