import React from 'react';
import logo from './logo.svg';
import './App.css';

function latitude1(props) {

    let latitude = document.getElementById('latitude1').value;
    latitude = latitude.split(".");

    let N = document.getElementById('latN').value;
    console.log(N);
    if(latitude[2]) {
        latitude = (+latitude[0] + +latitude[1] / 60 + +latitude[2] / 3600) * (N == 'N' ? 1 : -1);
    } else if (latitude[1]) {
        latitude = (+latitude[0] + +latitude[1] / 60) * (N == 'N' ? 1 : -1);
    } else if (latitude[0]) {
        latitude = (+latitude[0]) * (N == 'N' ? 1 : -1);
    }

    latitude = latitude.toFixed(6);

    document.getElementById('latitude2').value = latitude;
}

function longitude1(props) {

    let longitude = document.getElementById('longitude1').value;
    longitude = longitude.split(".");

    let E = document.getElementById('latE').value;
    console.log(E);
    if(longitude[2]) {
        longitude = (+longitude[0] + +longitude[1] / 60 + +longitude[2] / 3600) * (E == 'E' ? 1 : -1);
    } else if (longitude[1]) {
        longitude = (+longitude[0] + +longitude[1] / 60) * (E == 'E' ? 1 : -1);
    } else if (longitude[0]) {
        longitude = (+longitude[0]) * (E == 'E' ? 1 : -1);
    }

    longitude = longitude.toFixed(6);

    document.getElementById('longitude2').value = longitude;
}

function latitude2(props) {

    let latitude = document.getElementById('latitude2').value;
    let point = latitude.split(".");
    if(point[1]) {
        let grad = point[0];
        console.log(grad);
        let minutes = ("0." + point[1])*60;
        console.log(minutes);
        let point2 = minutes.toString().split(".");
        let seconds = 0;
        if(point2[1]) {
            minutes = point2[0];
            seconds = Math.round(("0." + point2[1])*60);
        }

        if(isNaN(seconds)) {
            seconds = 0;
        }

        if(isNaN(minutes)) {
            minutes = 0;
        }
        latitude = grad+"."+minutes+"."+seconds;
    }

    console.log(latitude);
    document.getElementById('latitude1').value = latitude;
}

function longitude2(props) {

    let latitude = document.getElementById('longitude2').value;
    let point = latitude.split(".");
    if(point[1]) {
        let grad = point[0];
        console.log(grad);
        let minutes = ("0." + point[1])*60;
        console.log(minutes);
        let point2 = minutes.toString().split(".");
        let seconds = 0;
        if(point2[1]) {
            minutes = point2[0];
            seconds = Math.round(("0." + point2[1])*60);
        }

        if(isNaN(seconds)) {
            seconds = 0;
        }

        if(isNaN(minutes)) {
            minutes = 0;
        }
        latitude = grad+"."+minutes+"."+seconds;
    }

    console.log(latitude);
    document.getElementById('longitude1').value = latitude;
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

    </div>
  );
}

export default App;

