import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImpactStyle } from '@capacitor/haptics';
import { IonicModule } from '@ionic/angular';
import { Haptic } from 'src/app/services/haptic';
import { Songs } from 'src/app/services/songs';
import { AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonicModule, FormsModule], //add this to use the ionic components
})
export class CardComponent implements OnInit {
  songs = inject(Songs).songsList; //inject or get the 'songsList' (array-object from songs service)
  //then make it available in "local variable/property/signal"
  haptic = inject(Haptic);
  isModalOpen = false;
  selectedSong: any = null;
  isPlaying = false;
  isTimerModalOpen = false;
  myDuration = 0;

  async play(song: any) {
    console.log('Playing song by:', song.addedby);
    if (song.addedby === 'Domenic') {
      await this.haptic.impact(ImpactStyle.Heavy);
    } else {
      await this.haptic.impact();
    }
    this.selectedSong = song;
    this.isModalOpen = true;
    this.isPlaying = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    this.haptic.impact();
  }

  onBreakpointChange(event: any) {
    const breakpoint = event.detail.breakpoint;
    if (breakpoint === 0) {
      this.closeModal();
    }
  }

  openTimerModal() {
    this.isTimerModalOpen = true;
  }
  
  closeTimerModal() {
    this.isTimerModalOpen = false;
  }

  time(x: number){
    if(x > 120){
      this.presentAlert({message: 'Sleep timer cannot exceed 120 minutes.'});
      console.log('Over 120')
      this.haptic.vibrate(500);
      this.myDuration = 0
    }
  }

  async presentAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: error.message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  constructor(private alertController: AlertController) {}

  ngOnInit() {}
}
