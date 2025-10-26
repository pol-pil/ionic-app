import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class Haptic {

  async impact(style: ImpactStyle = ImpactStyle.Light) {
    try {
      await Haptics.impact({ style });
      console.log('Impact:', style);
    } catch (error) {
      console.error('Impact error:', error);
    }
  }

  async vibrate(duration: number = 300) {
    try {
      await Haptics.vibrate({ duration });
      console.log('Vibrated for', duration, 'ms');
    } catch (error) {
      console.error('Vibrate error:', error);
    }
  }

  async notify(type: NotificationType = NotificationType.Success) {
    try {
      await Haptics.notification({ type });
      console.log('Notification', type);
    } catch (error) {
      console.error('Notification error:', error);
    }
  }
}
