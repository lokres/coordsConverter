/*
* @Author: Aleksey
* @Date:   2020-08-13 23:20:41
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-14 00:12:03
*/

import React, {PropTypes, Component} from 'react/addons';

import GoogleMap from 'google-map-react';


export default class SimpleMapPage extends Component {
  render() {
    return (
       <GoogleMap
        apiKey={'AIzaSyDIAy-x1Y0StswObxEM_9WDeacIaDQL0lA'} >
      </GoogleMap>
    );
  }
}
