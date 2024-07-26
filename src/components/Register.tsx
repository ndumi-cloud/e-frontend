import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { NavLink } from 'react-router-dom';

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useShoppingCart();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(username, email, password);
  };

  return (
    <><form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required />
      <button type="submit">Register</button>
    </form><div className="mt-3 text-center">
        <p>Don't have an account? <NavLink to="/login">Login</NavLink></p>
      </div></>
  );
}