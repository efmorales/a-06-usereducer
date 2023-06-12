import React, { useState, useReducer } from 'react';

function ApiData() {
  const [route, setRoute] = useState('posts');
  const [number, setNumber] = useState('');
  const [data, dispatch] = useReducer(formatData, []);

  function formatData(state, action) {
    switch (action.type) {
      case 'posts':
        return action.payload.map((post) => ({
          title: `Post ${post.id} by User ${post.userId}`,
          body: post.body,
        }));
      case 'todos':
        return action.payload.map((todo) => ({
          title: `Todo ${todo.id} by User ${todo.userId}`,
          body: todo.title,
        }));
      case 'users':
        return action.payload.map((user) => ({
          title: `User ${user.id}`,
          body: `Name: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}`,
        }));
      default:
        return state;
    }
  }

  async function fetchData() {
    const url = `https://jsonplaceholder.typicode.com/${route}/${number}`;
    const response = await fetch(url);
    const result = await response.json();
    dispatch({ type: route, payload: Array.isArray(result) ? result : [result] });
  }

  return (
    <div>
      <select value={route} onChange={(e) => setRoute(e.target.value)}>
        <option value="posts">Posts</option>
        <option value="todos">Todos</option>
        <option value="users">Users</option>
      </select>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={fetchData}>Fetch Data</button>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiData;