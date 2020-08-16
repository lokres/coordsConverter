/*
* @Author: Aleksey
* @Date:   2020-08-16 19:49:33
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-16 22:40:11
*/



import React, {Component} from 'react';

import { YMaps, Map } from "react-yandex-maps";
import {latitude1,latitude2,longitude1,longitude2, topChange, clickOnMap} from './converter.js';
import $ from 'jquery';


export default class MainTable extends Component {


  constructor(props) {

    super();
    this.state = {mapCenter: {center: [45.751574, 17.573856], zoom: 5}};
    }

    handler = () => {
        this.state = {mapCenter: {center: [45.751574, 17.573856], zoom: 5}};

        let lat = $('#latitude2').val();
        let lon = $('#longitude2').val();


        console.log([lat,lon]);
    }

  render() {
    return (
        <div>
            <PanelTable />
            <button style={{margin:"6px 0 10px 3px", cursor:"pointer"}} onClick={this.handler}>Найти на карте</button>
            <YMaps>
                <Map state={this.state.mapCenter} onClick={clickOnMap} width='800px' height='500px' />
            </YMaps>

        </div>
    );
  }
}


export function PanelTable() {

    return  <table>
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
                <td><input id="latitude1" onKeyDown={topChange} onChange ={latitude1} type="text" placeholder="127.60.60" /></td>
                <td>
                    <select onChange ={latitude1} id="latN" style={{height:"30px"}}>
                        <option value="N">С</option>
                        <option value="S">Ю</option>
                    </select>
                </td>
                <td><input id="longitude1" onKeyDown={topChange} onChange ={longitude1}  type="text" name="" placeholder="10.10.10" /></td>
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
}
