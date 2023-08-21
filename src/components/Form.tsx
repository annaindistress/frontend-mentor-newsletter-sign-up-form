import React, { useState } from 'react';

const Form = ({ setEmail, setIsSent }) => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const isEmail = email =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleInput = evt => setValue(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (isEmail(value)) {
      setEmail(value);
      setIsSent(true);
    }

    setIsError(true);
  };

  return (
    <section className="section section--form">
      <h2 className="section__title">Stay updated!</h2>
      <p className="section__text">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="section__list">
        <li className="section__item">
          Product discovery and building what matters
        </li>
        <li className="section__item">
          Measuring to ensure updates are a success
        </li>
        <li className="section__item">And much more!</li>
      </ul>
      <form className="form" method="post">
        <label className="form__text" htmlFor="newsletter-email">
          Email address
        </label>
        {isError && (
          <span className="form__text form__text--error">
            Valid email required
          </span>
        )}
        <input
          className={`form__input ${isError ? 'form__input--error' : ''}`}
          type="text"
          name="newsletter-email"
          id="newsletter-email"
          placeholder="email@company.com"
          value={value}
          onFocus={() => setIsError(false)}
          onInput={handleInput}
        />
        <button
          className="form__button button"
          type="submit"
          onClick={handleSubmit}
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </section>
  );
};

export default Form;
