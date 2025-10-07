import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import PersonalPage from './Components/PersonalPage';
import {useEffect} from "react";
import {useState} from "react";
import Pet from './Components/Pet';
import FlipClock from './Components/FlipClock';
function App() {
    const [time, setTime] = useState(Date.now());

    // оновлення кожну секунду
    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
    {/*<Card title={"Бійцівський клуб"} description={"Культовий американський художній фільм 1999 року. Це адаптація однойменного роману Чака Поланіка, опублікованого в 1996 році. Ідея проєкту належала продюсеру Лорі Зіскін, яка залучила до нього сценариста Джима Ульса і режисера Девіда Фінчера. "} image={"https://upload.wikimedia.org/wikipedia/uk/thumb/6/6d/Fight_Club_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpg/250px-Fight_Club_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpg"} year={1999} producer={"Девід Фінчер"}/>*/}
    {/*    <PersonalPage*/}
    {/*        name="Влад Остапчук"*/}
    {/*        phone="+380 67 123 45 67"*/}
    {/*        email="vlad.ostapchuk@example.com"*/}
    {/*        city="Львів"*/}
    {/*        experience="Frontend Developer — 2 роки"*/}
    {/*        skills="HTML, CSS, JavaScript, React, C#, SQL"*/}
    {/*        photo="https://patrioty.org.ua/images/2022/12/13202725_174_large.jpg"*/}
    {/*    />*/}
    {/*    <FlipClock key={time} />*/}
    {/*    <Pet name={"Lilu"} description={"Lorem Ipsum"} image={"https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"} />*/}
    </>
  );
}

export default App;
