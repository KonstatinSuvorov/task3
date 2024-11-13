import React, { Component } from 'react';
import logo from './assets/logo.png';

// Массив стилей
const randomStyles = [
  { color: 'blue', backgroundColor: 'lightgray', padding: '10px' },
  { color: 'green', backgroundColor: 'black', padding: '15px' },
  { color: 'red', backgroundColor: 'yellow', padding: '20px' },
  { color: 'purple', backgroundColor: 'pink', padding: '25px' },
  { color: 'orange', backgroundColor: 'white', padding: '5px' }
];

// Функция для случайного выбора стиля
const getRandomStyle = () => {
  const randomIndex = Math.floor(Math.random() * randomStyles.length);
  return randomStyles[randomIndex];
};

// Компонент для отображения информации о клубе
class ClubInfo extends Component {
  render() {
    const { name, city, founded, logo } = this.props;
    const style = getRandomStyle(); // Применяем случайный стиль
    return (
      <div className="club-info" style={style}>
        <h2>{name}</h2>
        <p><strong>Город:</strong> {city}</p>
        <p><strong>Дата основания:</strong> {founded}</p>
        <img src={logo} alt="Logo" width="100" />
      </div>
    );
  }
}

// Компонент для отображения достижений клуба
class Achievements extends Component {
  render() {
    const { trophies, goals } = this.props;
    const style = getRandomStyle(); // Применяем случайный стиль
    return (
      <div className="achievements" style={style}>
        <h3>Достижения</h3>
        <p><strong>Трофеи:</strong> {trophies}</p>
        <p><strong>Забитые голы:</strong> {goals}</p>
      </div>
    );
  }
}

// Компонент для отображения состава команды
class CurrentSquad extends Component {
  render() {
    const { players } = this.props;
    const style = getRandomStyle(); // Применяем случайный стиль
    return (
      <div className="squad" style={style}>
        <h3>Текущий состав команды</h3>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Главный компонент, который объединяет все компоненты
class FootballClubApp extends Component {
  render() {
    // Массив объектов с информацией о нескольких клубах
    const clubsData = [
      {
        name: 'FC Example',
        city: 'Москва',
        founded: 1920,
        logo: 'https://avatars.mds.yandex.net/i?id=63e46ca992cc0d424b1b240111abcc1e0a1c1ca9-8285735-images-thumbs&n=13',
        trophies: '10 медалей, 5 кубков',
        goals: 1200,
        players: ['Игрок 1', 'Игрок 2', 'Игрок 3', 'Игрок 4', 'Игрок 5', 'Игрок 6', 'Игрок 7', 'Игрок 8', 'Игрок 9', 'Игрок 10']
      },
      {
        name: 'FC Another Example',
        city: 'Санкт-Петербург',
        founded: 1950,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/FK_Spartak_Moscow_logo.svg',
        trophies: '15 медалей, 8 кубков',
        goals: 1500,
        players: ['Игрок A', 'Игрок B', 'Игрок C', 'Игрок D', 'Игрок E', 'Игрок F', 'Игрок G', 'Игрок H', 'Игрок I', 'Игрок J']
      }
    ];

    return (
      <div className="football-club-app">
        <h1>Информация о футбольных клубах</h1>
        {/* Перебираем массив с данными клубов */}
        {clubsData.map((club, index) => (
          <div key={index}>
            <ClubInfo
              name={club.name}
              city={club.city}
              founded={club.founded}
              logo={club.logo}
            />
            <Achievements
              trophies={club.trophies}
              goals={club.goals}
            />
            <CurrentSquad players={club.players} />
          </div>
        ))}
      </div>
    );
  }
}

export default FootballClubApp;
