import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [IonicModule, RouterModule], //add this to use the ionic components
                                        //and the router module (routerLink)
})
export class NavigationComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}

