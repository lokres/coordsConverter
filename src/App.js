import React from 'react';
import './App.css';
import {latitude2,ongitude2, clickOnMap} from './scripts/converter.js';
import { YMaps, Map } from "react-yandex-maps";
import GoogleMap from 'google-map-react';
import MainTable from './scripts/MainTable.js';
const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};



function App() {
  return (
    <div className="wrapper">
      <h3>Онлайн конвертер для перевода географических координат между десятичным форматам и форматом градусы/минуты/секунды.</h3>
        <p>Перевод осуществляется по следующей формуле:

        Десятичные градусы = Град + Мин/60 + Сек/3600
        </p>
        <p>
        Можно например, получить ссылку на сайте maps.google.com, типа http://www.google.com/maps?q=55.753744,37.619722&spn=0.000888,0.002642&t=h&z=19 <br /> откуда извлечь координаты в десятичном виде 55.753744°, 37.619722° (широта и долгота), и преобразовать их в обычный вид: 55°45′13″, 37°37′11″.
        </p>
        <MainTable />
        <br />
        <YMaps>
            <Map defaultState={mapData} onClick={clickOnMap} ></Map>
        </YMaps>
    </div>
  );
}

export default App;

