import React, { useState } from 'react';
import Form from './Form';
import Message from './Message';

const App = () => {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <main className="page__main">
      <h1 className="sr-only">Newsletter sign-up form</h1>
      {isSent ? (
        <Message value={email} setIsSent={setIsSent} />
      ) : (
        <Form setEmail={setEmail} setIsSent={setIsSent} />
      )}
    </main>
  );
};

export default App;
