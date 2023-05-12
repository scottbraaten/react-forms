import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(true);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameValid(false);
      return;
    }
    setNameValid(true);

    console.log(name);
    const enteredName = nameRef.current.value;
    console.log(enteredName);

    setName('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={nameChangeHandler} value={name} />
        {!nameValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
