import React from 'react';

const Message = ({ value, setIsSent }) => (
  <section className="section section--message">
    <h2 className="section__title">Thanks for subscribing!</h2>
    <p className="section__text">
      A confirmation email has been sent to{' '}
      <span className="section__email">{value}</span>. Please open
      it and click the button inside to confirm your subscription.
    </p>
    <button className="section__button button" type="button" onClick={() => setIsSent(false)}>
      Dismiss message
    </button>
  </section>
);

export default Message;
