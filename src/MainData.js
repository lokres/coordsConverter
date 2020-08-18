/*
* @Author: Aleksey
* @Date:   2020-08-16 17:29:16
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-17 06:50:51
*/

import React, {Component} from 'react';
import {latitude1,latitude2,longitude1,longitude2, topChange, clickOnMap} from './scripts/converter.js';
import Context from './Context.js';
import {coords} from './App.js';
import MainTable from './scripts/MainTable.js';

class MainData extends React.Component {
  static contextType = Context;
  Context = {center: [45.751574, 17.573856],zoom: 1,};
  componentDidMount(){

  }

  componentDidUpdate(){
    console.log('update');
  }

  // Assign a contextType to read the current theme context.  // React will find the closest theme Provider above and use its value.  // In this example, the current theme is "dark".  static contextType = ThemeContext;
  render() {
    return            <div className="wrapper">
        <h3>Онлайн конвертер для перевода географических координат между десятичным форматам и форматом градусы/минуты/секунды.</h3>
        <p>Перевод осуществляется по следующей формуле:

        Десятичные градусы = Град + Мин/60 + Сек/3600
        </p>
        <p>
        Можно например, получить ссылку на сайте maps.google.com, типа http://www.google.com/maps?q=55.753744,37.619722&spn=0.000888,0.002642&t=h&z=19 <br /> откуда извлечь координаты в десятичном виде 55.753744°, 37.619722° (широта и долгота), и преобразовать их в обычный вид: 55°45′13″, 37°37′11″.
        </p>
        <MainTable  />
        <br />

    </div>;  }
}
export default MainData
