import arc                            from 'frame-arc';

export default function Z1AddDomain (name, value, dispatch) {
  if(name === 'link') {
    const url = new arc.URL(value);
    if(url.valid) {
      dispatch({type: 'updateArticleForm', data: ['domain', url.domain, true]});
    }
  }
};
