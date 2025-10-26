import { Component, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule] //add this to use the ionic components
})
export class HeaderComponent  implements OnInit {
  headerTitle = input('Default title'); //use input() to access/change
                                        //the value in parent component (page)
  constructor() { }

  ngOnInit() {}
}

