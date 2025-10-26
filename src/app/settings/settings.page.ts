import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';
import { Map } from '../services/map';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, RouterModule]
})
export class SettingsPage implements OnInit {

  constructor(public mapService: Map) { }

  async ngOnInit() {
    this.mapService.myLatLng();
  }
}


