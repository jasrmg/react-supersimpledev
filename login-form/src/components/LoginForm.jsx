import { useState, useRef, useEffect } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (emailRef.current !== null) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <form>
      <h2>Login Form</h2>
      <input type="email" placeholder="Enter email" ref={emailRef} />
      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
        ref={passwordRef}
      />
      <div className="action-container">
        <button className="btn" type="submit">
          Login
        </button>
        <button className="btn" type="button" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
