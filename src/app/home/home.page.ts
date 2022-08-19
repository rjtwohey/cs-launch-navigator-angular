import { Component } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  navigate() {
    const navigator = new LaunchNavigator()
    let default_app = navigator.APP.GOOGLE_MAPS;
    const address = {
      name: '121 S Pinckney St, Madison WI',
      Latitude: 43.07423923811246,
      Longitude: -89.3809923212564
    };

    let options: LaunchNavigatorOptions = {
      app: default_app
    };
    if (default_app == null) {
      navigator.navigate( [address.Latitude, address.Longitude] ).then( (success:any) => {
        console.log( 'success => ' + JSON.stringify( success ) );
      }, (error:any) => {
        console.log( 'error => ' + JSON.stringify( error ) );
        console.log( 'Unable to launch navigation' );
      });
    } else {
      navigator.navigate( [address.Latitude, address.Longitude], options).then( (success:any) => {
        console.log( 'success => ' + JSON.stringify( success ) );
      }, (error:any) => {
        console.log( 'error => ' + JSON.stringify( error ) );
        console.log( 'Unable to launch navigation' );
      });
    }
  }
}
