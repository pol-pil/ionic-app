import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  book,
  checkmark,
  chevronDown,
  close,
  homeOutline,
  navigateOutline,
  pause,
  personCircle,
  play,
  playSkipBack,
  playSkipForward,
  school,
  search,
  settingsOutline,
  timerOutline,
} from 'ionicons/icons';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, NavigationComponent],
})
export class AppComponent {
  constructor() {
    addIcons({
      book,
      school,
      personCircle,
      play,
      homeOutline,
      settingsOutline,
      navigateOutline,
      search,
      close,
      chevronDown,
      timerOutline,
      playSkipBack,
      playSkipForward,
      pause,
      checkmark
    });
    //add this addIcon() inside constructor to load your icons globally
  }
}
