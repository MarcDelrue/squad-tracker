import {Component, OnInit, ViewChild} from '@angular/core';
import {
  Geolocation,
} from '@awesome-cordova-plugins/geolocation/ngx';
import {
  DeviceOrientation,
  DeviceOrientationCompassHeading,
} from '@awesome-cordova-plugins/device-orientation/ngx';
import {GoogleMap} from "@angular/google-maps";
import {environment} from "../../../environments/environment";
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  constructor(
    private geolocation: Geolocation,
    private deviceOrientation: DeviceOrientation,
    private userService: UsersService
  ) {
  }

  @ViewChild('map') map: GoogleMap;

  MarcID = environment.marcId;
  zoom = 21;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    minZoom: 15,
  };
  playerMarker: google.maps.MarkerOptions;
  accuracy: number;

  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.setMapData(resp);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });

    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => console.log(data),
      (error: any) => console.log(error)
    );
  }

  setMapData(resp) {
    this.accuracy = resp.coords.accuracy;
    this.center = {
      lat: resp.coords.latitude,
      lng: resp.coords.longitude,
    };
    this.playerMarker = {
      icon: {
        url: './assets/soldier-top-down.png', // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
      },
      position: {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
      },
    };
    this.userService.updateUserById(this.MarcID, {
      coordinates: {
        longitude: resp.coords.longitude,
        latitude: resp.coords.latitude
      }
    });
  }

  recenterMap() {
  }
}
