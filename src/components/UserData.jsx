// src/components/UserData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []); // Запускаємо при монтуванні компонента

  const handleRefresh = () => {
    fetchRandomUser();
  };

  if (loading) return <p>Завантаження даних...</p>;
  if (error) return <p>Помилка: {error}</p>;
  if (!user) return null;

  return (
    <div>
      <button onClick={handleRefresh}>Оновити</button>
      <h2>Інформація про користувача</h2>
      <p><span>ID: </span>{user.login.uuid}</p>
      <p><span>Ім'я: </span>{user.name.first}</p>
      <p><span>Прізвище: </span>{user.name.last}</p>
      <p><span>E-mail: </span>{user.email}</p>
    </div>
  );
};

export default UserData;
