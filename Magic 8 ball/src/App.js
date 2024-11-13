import React, { Component } from 'react';

// Компонент для отображения предсказания
class MagicBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: '', // Хранит текущее предсказание
      predictions: [
        "Да, это будет отличная идея!",
        "Нет, это не сработает.",
        "Скоро все изменится.",
        "Я не уверен, попробуй еще раз.",
        "Ты на правильном пути!",
        "Не сейчас.",
        "Попробуй позже."
      ]
    };
  }

  // Метод для генерации случайного предсказания
  getRandomPrediction = () => {
    const { predictions } = this.state;
    const randomIndex = Math.floor(Math.random() * predictions.length);
    this.setState({ prediction: predictions[randomIndex] });
  };

  render() {
    return (
      <div className="magic-ball">
        <h1>Магический Шар предсказаний</h1>
        <div className="ball">
          {this.state.prediction ? (
            <p>{this.state.prediction}</p>
          ) : (
            <p>Задай вопрос...</p>
          )}
        </div>
        <button onClick={this.getRandomPrediction}>Получить предсказание</button>
      </div>
    );
  }
}

export default MagicBall;
