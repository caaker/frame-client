import ParentSVG from './ParentSVG.jsx';

const path = <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
export default ( props ) => {
  return (
    <ParentSVG path={path} fontSize={props.fontSize} onClick={props.onClick} className={props.className} id={props.id} />
  );
};
