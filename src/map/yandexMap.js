/*
* @Author: Aleksey
* @Date:   2020-08-16 19:49:33
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-16 20:41:26
*/



import React, {Component} from 'react';

import { YMaps, Map } from "react-yandex-maps";
import {clickOnMap} from "../scripts/converter.js";

export default class yandexMap extends Component {

  handleClick = () => {
    console.log('По кнопке кликнули');


  }
  componentDidMount(){

  }


  render() {
    return (
            <YMaps>
              <Map defaultState={{center: [45.751574, 17.573856],zoom: 1,}} onClick={clickOnMap} width='800px' height='500px' />
            </YMaps>

    );
  }
}

