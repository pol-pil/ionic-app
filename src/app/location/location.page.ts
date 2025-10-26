import { AfterViewInit, Component, effect } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from '../components/card/card.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import * as L from 'leaflet';
import { Map } from '../services/map';

const myIcon = L.icon({
  iconUrl: 'assets/icon/add.png',
  iconSize: [50, 50],
});

L.Marker.prototype.options.icon = myIcon;

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss'],
  imports: [IonicModule, CardComponent, HeaderComponent, NavigationComponent], //place any component you want to add in your home page (header, card, navigation)
})
export class LocationPage implements AfterViewInit {
  map!: L.Map;
  lat: number = 0;
  lng: number = 0;
  myLivePosition!: any;
  myCircle!: L.CircleMarker;
  myPoly!: L.Polyline;

  constructor(public mapService: Map) {
    this.mapService.livePos(); //paganahin mo muna... invoke
    effect(() => {
      this.myLivePosition = this.mapService.liveLatLng();

      if (this.myLivePosition) {
        if (!this.myCircle) {
          this.myCircle = L.circleMarker(
            [this.myLivePosition?.latWP, this.myLivePosition?.lngWP],
            {
              radius: 10,
            }
          ).addTo(this.map);
        } else {
          this.myCircle.setLatLng([
            this.myLivePosition?.latWP,
            this.myLivePosition?.lngWP,
          ]);
        }

        const pos1 = L.latLng([
          this.myLivePosition?.latWP,
          this.myLivePosition?.lngWP,
        ]);
        const pos2 = L.latLng([this.lat, this.lng]);
        const distance = pos1.distanceTo(pos2).toFixed(2);

        if (!this.myPoly) {
          this.myPoly = L.polyline([pos1, pos2]).addTo(this.map);
        } else {
          this.myPoly.setLatLngs([pos1, pos2]);
        }

        this.myPoly.bindTooltip(`${distance}m`, { permanent: true });
      }
      // this.mapService.liveLatLng() //listen
    });
  }

  async ngAfterViewInit(): Promise<void> {
    await this.mapService.myLatLng();
    this.lat = this.mapService.lat;
    this.lng = this.mapService.lng;
    this.initMap();
  }

  initMap() {
    //where to put your map
    this.map = L.map('mapa', {
      center: [this.lat, this.lng],
      zoom: 18,
    });

    L.tileLayer(
      'https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=lcfpOpq4soWgz8UBSNoorH4ojwtIsCxLOl9dk0aqUDWdPU0wOmKZAYnWDz5sIT9x'
    ).addTo(this.map);

    // L.marker([this.lat, this.lng]).addTo(this.map)
    // .bindTooltip("Don", { permanent: true })
    // .openTooltip();

    L.marker([15.4440025, 120.9449914])
      .addTo(this.map)
      .bindTooltip('Kim', { permanent: true })
      .openTooltip();

    // L.marker([15.4436025, 120.9440914])
    //   .addTo(this.map)
    //   .bindTooltip('Pol', { permanent: true })
    //   .openTooltip();

    L.marker([15.4273, 120.9382])
      .addTo(this.map)
      .bindTooltip('Camille', { permanent: true })
      .openTooltip();

    L.circleMarker([this.lat, this.lng], {
      color: 'green',
      radius: 20,
    }).addTo(this.map);

    const lng1: number = 15.447;
    const lng2: number = 120.9405;

    L.circleMarker([lng1, lng2], {
      color: 'green',
      radius: 20,
    }).addTo(this.map);

    const coord1 = L.latLng(this.lat, this.lng);
    const coord2 = L.latLng(lng1, lng2);

    const computedDistance = coord1.distanceTo(coord2).toFixed(2);

    // L.polyline([[this.lat, this.lng],[lng1, lng2]], {
    //   color: 'green'
    // }).bindTooltip(`${computedDistance}m`, {permanent: true, direction: 'center'}).addTo(this.map);

    setInterval(() => {
      this.map.invalidateSize();
    }, 200); // creating actual map
  }
}
