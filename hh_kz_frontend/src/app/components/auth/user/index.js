// next
import { useState } from "react";

export default function UserLogin() {
  const [step, setStep] = useState(1);

  return (
    <section className="login_page">
      {step === 1 && (
        <div className="card">
          <h1>Поиск работы</h1>
          <form className="form">
            <div className="inputs-group">
              <input className="input" placeholder="Электронная почта"></input>
            </div>
            <button
              className="button button-primary"
              onClick={() => setStep(2)}
            >
              Продолжить
            </button>
          </form>
        </div>
      )}

      {step === 1 && (
        <div className="card">
          <h1>Поиск сотрудников</h1>
          <p>Размещение вакансий и доступ к базе резюме</p>
          <button className="button button-primary-bordered">
            Я ищу сотрудников
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="card">
          <h1>Отправили код на beyself@vk.com</h1>
          <p>
            Напишите его, чтобы подтвердить, что это вы, а не кто-то другой
            входжит в личный кабинет.
          </p>
          <form className="form">
            <div className="inputs-group">
              <input className="input" placeholder="Введите код"></input>
            </div>

            <p>Повторить можно через 00:48</p>

            <div className="buttons-group">
              <button
                className="button button-primary"
                onClick={() => setStep(3)}
              >
                Подтвердить
              </button>
              <button
                className="button button-primary-bordered"
                onClick={() => setStep(1)}
              >
                Назад
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="card">
          <h1>Давайте познакомимся</h1>
          <form className="form">
            <div className="inputs-group">
              <input className="input" placeholder="Имя"></input>
              <input className="input" placeholder="Фамилия"></input>
            </div>
            <div className="buttons-group">
              <button className="button button-primary">Подтвердить</button>
              <button
                className="button button-primary-bordered"
                onClick={() => setStep(2)}
              >
                Назад
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
