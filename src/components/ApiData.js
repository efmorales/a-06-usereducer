import React, { useState, useReducer } from 'react';
import { fetchData } from './api';
import { formatPosts, formatTodos, formatUsers } from './formatData';

export default function ApiData() {
  const [route, setRoute] = useState('posts');
  const [number, setNumber] = useState('');
  const [data, dispatch] = useReducer(formatReducer, []);

  function formatReducer(state, action) {
    switch (action.type) {
      case 'posts':
        return formatPosts(action.payload);
      case 'todos':
        return formatTodos(action.payload);
      case 'users':
        return formatUsers(action.payload);
      default:
        return state;
    }
  }

  async function handleFetchData() {
    const result = await fetchData(route, number);
    dispatch({ type: route, payload: result });
  }

  return (
    <div>
      <select value={route} onChange={(e) => setRoute(e.target.value)}>
        <option value="posts">Posts</option>
        <option value="todos">Todos</option>
        <option value="users">Users</option>
      </select>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleFetchData}>Fetch Data</button>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}