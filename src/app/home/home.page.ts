import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from '../components/card/card.component';
import { HeaderComponent } from '../components/header/header.component';
import { Haptic } from '../services/haptic';
import { ImpactStyle } from '@capacitor/haptics';
import { Songs } from '../services/songs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CardComponent, HeaderComponent, CommonModule],
})

export class HomePage {
  songs = inject(Songs).songsList;
  haptic = inject(Haptic);


  async play(song: any) {
    console.log('Playing song by:', song.addedby);
    if (song.addedby === 'Domenic') {
      await this.haptic.impact(ImpactStyle.Heavy);
    } else {
      await this.haptic.impact();
    }
  }

  constructor() {}
}

