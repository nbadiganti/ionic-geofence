import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geofence } from '@ionic-native/geofence';

@Component({
  selector: 'page-user-geofence',
  templateUrl: 'user-geofence.html',
  providers: [Geofence]
})
export class UserGeofencePage {

  latitude: any = 17.4189646;
  longtitude: any = 78.3364849;
  radius: any = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geofence: Geofence) {
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserGeofencePage');
  }

  public addGeofence() {
    //options describing geofence
    let fence = {
      id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
      latitude: this.longtitude, //center of geofence radius
      longitude: this.latitude,
      radius: this.radius, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
        id: 1, //any unique ID
        title: 'You crossed a fence', //notification title
        text: 'You just arrived to Hafod Wen Site.', //notification body
        openAppOnClick: true //open app when notification is tapped
      }
    }

    this.geofence.addOrUpdate(fence).then(
      () => {
        console.log('Geofence added');
        alert("Geofence added");
      },
      (err) => {
        console.log('Geofence failed to add')
        alert("Failed to add geofence, please try again");
      }
    );
  }
}
