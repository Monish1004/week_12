import React from 'react';

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <br />
        <input type="email" placeholder="Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
