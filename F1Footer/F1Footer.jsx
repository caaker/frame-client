import './F1Footer.css';

import { useSelector } from 'react-redux';

export default function F1Footer({config})  {
  console.logD('DEBUG: L2 : F1-Footer ');

  const mailer = `mailto:${ config.email }?subject=${ config.subject }`;
  const page = useSelector((state)=>state.MenuPage.current);
  const style = (page === 'User') ? 'footer_show ' : 'footer_hide';

  return (
    <div id="footer_hold" className={style}>
      <div id="footer_inner" className='footer_style_90'>
        <a className="footer_item" href={mailer}>contact</a>
        <a className="footer_item" target="_blank" href={config.github}>github</a>
      </div>
    </div>
  );
};