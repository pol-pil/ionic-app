import { inject, Injectable, signal } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular/standalone';
import { Haptic } from './haptic';
import { NotificationType } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root',
})
export class Map {
  liveLatLng = signal<any>(null); //signal
  // live: boolean = true; //property
  haptic = inject(Haptic);
  lat: number = 0;
  lng: number = 0;

  async myLatLng() {
    try {
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });
      await this.haptic.notify();
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    } catch (error) {
      console.error(error);
      this.presentAlert(error);
    }
  }

  constructor(private alertController: AlertController) {}

  async presentAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: error.message,
      buttons: ['OK'],
    });
    await this.haptic.notify(NotificationType.Warning);
    await alert.present();
  }

  async livePos() {
    const watchId = await Geolocation.watchPosition(
      {
        enableHighAccuracy: true,
      },
      (poss) => {
        this.liveLatLng.set({
          latWP: poss?.coords.latitude,
          lngWP: poss?.coords.longitude
        }) 
      }
    );
  }
}
