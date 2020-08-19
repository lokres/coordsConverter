/*
* @Author: Aleksey
* @Date:   2020-08-16 17:29:16
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-19 06:52:18
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
        <MainTable  />
        <br />

    </div>;  }
}
export default MainData
