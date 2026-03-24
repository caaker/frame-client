import ParentSVG from './ParentSVG.jsx';

const path = <path d="M9 16.17l-4.88-4.88L2 13l7 7 14-14-2.12-2.12L9 16.17z" />;
export const SVGCheck = (props) => <ParentSVG path={path} {...props} />;