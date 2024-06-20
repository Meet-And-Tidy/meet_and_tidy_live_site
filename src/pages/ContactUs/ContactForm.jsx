
import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input id="message" type="text" name="message"/>
        </div>
      </div>

      <p className="form-actions">
        <button>Reset</button>
        <button>Submit</button>
      </p>
    </form>
  );
}
