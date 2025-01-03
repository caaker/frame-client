import arc                            from 'frame-arc';

export default (name, value, dispatch) => {
  if(name === 'link') {
    const url = new arc.URL(value);
    if(url.valid) {
      const send = ['domain', url.domain, true];
      dispatch({type: 'updateArticleForm', data: send});
    }
  }
};
