import React from 'react'
import ContactForm from './Form';

const App = () => {
  return (
    <div className="App">
      <form action="https://formspree.io/f/xnqwvlln" method="POST">
        <label>
            Your email:
            <input type="email" name="email" />
        </label>
        <label>
            Your message:
            <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
        </form>
    </div>
  );
}

export default App