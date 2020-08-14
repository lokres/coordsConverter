/*
* @Author: Aleksey
* @Date:   2020-08-13 23:38:22
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-14 08:45:38
*/
import React from 'react';
import {latitude1,latitude2,longitude1,longitude2, topChange} from './converter.js';



export default function MainTable() {
    return (
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
                <td><input id="latitude1" onKeyDown={topChange} onChange ={latitude1} type="text" name="" placeholder="127.60.60" /></td>
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
    )
}
