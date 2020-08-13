import React from 'react';
import logo from './logo.svg';
import './App.css';
import {latitude1,latitude2,longitude1,longitude2} from './scripts/converter.js'
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

function clickOnMap(e) {
    var coords = e.get('coords');

    document.getElementById('latitude2').value = coords[0];
    document.getElementById('longitude2').value = coords[1];
    latitude2();longitude2();
}


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
        <table>
            <thead>
              <tr>
                <th></th>
                <th>Широта</th>
                <th></th>
                <th>Долгота</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Градусы</td>
                <td><input id="latitude1" onChange ={latitude1} type="text" name="" placeholder="127.60.60" /></td>
                <td>
                    <select onChange ={latitude1} id="latN" style={{height:"30px"}}>
                        <option value="N">С</option>
                        <option value="S">Ю</option>
                    </select>
                </td>
                <td><input id="longitude1" onChange ={longitude1}  type="text" name="" placeholder="10.10.10" /></td>
                <td>
                    <select id="latE" style={{height:"30px"}}>
                        <option value="E">В</option>
                        <option value="W">З</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td>Десятичный вид</td>
                <td><input id="latitude2" type="text" onChange ={latitude2} placeholder="широта" /></td>
                <td></td>
                <td><input id="longitude2"  type="text" onChange ={longitude2} name="" placeholder="долгота" /></td>
                <td></td>
              </tr>
            </tbody>
        </table>
        <br />
        <YMaps>
            <Map defaultState={mapData} onClick={clickOnMap} width='800px' height='500px'>

            </Map>
        </YMaps>
    </div>
  );
}

export default App;

