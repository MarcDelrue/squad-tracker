import { Component, OnInit } from '@angular/core';
import {Coordinates, Geolocation} from '@awesome-cordova-plugins/geolocation/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private geolocation: Geolocation, private deviceOrientation: DeviceOrientation) { }

  coords: Coordinates;

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => console.log(data),
      (error: any) => console.log(error)
    );
  }

}
