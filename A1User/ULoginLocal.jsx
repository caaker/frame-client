import './ULoginLocal.css';

export default function ULoginLocal () {
  return (
    <div className ="box-inner">
      <form>
        <input
          type="text"
          className="user-input"
          placeholder="email"
          autoComplete="on" >
        </input>
        <input
          type="password"
          className="user-input"
          placeholder="password"
          autoComplete="on">
        </input>
        <button className="user-button ">
          Log in
        </button>
      </form>
    </div>
  );
};
