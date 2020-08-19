/*
* @Author: Aleksey
* @Date:   2020-08-13 11:55:18
* @Last Modified by:   Aleksey
* @Last Modified time: 2020-08-19 05:41:07
*/
import $ from 'jquery';
import Context from '../Context.js';

var contextType = Context;
console.log (Context);
export function topChange(e) {
    if((e.keyCode >=48 && e.keyCode <= 57) || e.keyCode == 190) {
        console.log(e.keyCode);
    } else {
        e.preventDefault();
        e.stopPropagation();
    }

}

export function clickOnMap(e) {

    latitude2();longitude2();
}

export function latitude1(props) {

    let latitude = document.getElementById('latitude1').value;
    if(latitude == '') {

        latitude = 0;
    }
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

export function longitude1(props) {

    let longitude = document.getElementById('longitude1').value;

    if(longitude == '') {
        longitude = 0;
    }

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

export function latitude2(props) {

    let latitude = document.getElementById('latitude2').value;

    let negative;
    if(latitude < 0) {
        $('#latN').val('S');
        negative = true;
    } else {
        $('#latN').val('N');
    }

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
    if(negative) {
        latitude = latitude.substr(1);
    }
    console.log(latitude);
    document.getElementById('latitude1').value = latitude;
}

export function longitude2(props) {

    let longitude = document.getElementById('longitude2').value;
    let negative;
    if(longitude < 0) {
        $('#latE').val('W');
        negative = true;
    } else {
        $('#latE').val('E');
    }
    let point = longitude.split(".");
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

        longitude = grad+"."+minutes+"."+seconds;
    }

    console.log(longitude);


    if(negative) {
        longitude = longitude.substr(1);
    }
    document.getElementById('longitude1').value = longitude;
}
