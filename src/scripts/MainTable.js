/*
* @Author: Aleksey
* @Date:   2020-08-16 19:49:33
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-19 05:42:52
*/



import React, {Component} from 'react';

import {YMaps, Map, withYMaps, Placemark } from "react-yandex-maps";
import {latitude1,latitude2,longitude1,longitude2, topChange, clickOnMap} from './converter.js';
import $ from 'jquery';


export default class MainTable extends Component {


  constructor(props) {

    super();
    this.state = {mapCenter: {center: [45.751574, 17.573856], zoom: 5}};
        $(document).on('click', '#showAtMap', function(){

            let lat = $('#latitude2').val();
            let lon = $('#longitude2').val();
            window.myMap.setCenter([lat, lon], 7);

         //   window.myMap.panTo([lat, lon])
        })

        $(document).on('click', '#clearData', function(){

            $('input').each(function(){
                $(this).val('');
            })

         //   window.myMap.panTo([lat, lon])
        })
    }

    componentDidMount() {

    }



    handler = (props) => {
        let {ymap} = props;
    }

  render() {
    return (
        <div>
            <PanelTable />
            <div id="buttons">
                <button id="showAtMap">Показать на карте</button>
                &nbsp;&nbsp;&nbsp;
                <button id="clearData" >Очистить поля ввода</button>
            </div>
            <div onClick={clickOnMap} onChange={clickOnMap} id="map" style={{width: "600px", height: "400px"}}></div>

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
                <td><input className="inputE" id="latitude1" onKeyDown={topChange} onChange ={latitude1} type="text" placeholder="127.60.60" /></td>
                <td>
                    <select onChange ={latitude1} id="latN" style={{height:"30px"}}>
                        <option value="N">С</option>
                        <option value="S">Ю</option>
                    </select>
                </td>
                <td><input className="inputE" id="longitude1" onKeyDown={topChange} onChange ={longitude1}  type="text" name="" placeholder="10.10.10" /></td>
                <td>
                    <select id="latE" style={{height:"30px"}}>
                        <option value="E">В</option>
                        <option value="W">З</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td>Дес-ые</td>
                <td><input className="inputE" id="latitude2" type="text" onChange ={latitude2} placeholder="широта" /></td>
                <td></td>
                <td><input className="inputE" id="longitude2"  type="text" onChange ={longitude2} name="" placeholder="долгота" /></td>
                <td></td>
              </tr>
            </tbody>
        </table>
}
