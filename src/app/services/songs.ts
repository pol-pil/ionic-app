import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Songs {
  songsList = signal([
  {
    title: 'Let Down',
    artist: 'Radiohead',
    image: '../../assets/letdown.jpg',
    addedby: 'Domenic'
  },
  {
    title: 'Pag-ibig ay Kanibalismo II',
    artist: 'fitterkarma',
    image: '../../assets/pagibig.jpg',
    addedby: 'Pol'
  },
  {
    title: 'IMMA FLIRT',
    artist: 'Nateman, Lucky',
    image: '../../assets/flirt.png',
    addedby: 'Cams'
  },
  {
    title: 'City Girl',
    artist: 'Shanti Dope',
    image: '../../assets/city.jpg',
    addedby: 'Don'
  },
  {
    title: 'Eternity',
    artist: 'Alex Warren',
    image: '../../assets/eternity.jpg',
    addedby: 'Domenic'
  },
  {
    title: 'From Eden',
    artist: 'Hozier',
    image: '../../assets/eden.jpg',
    addedby: 'De Leon'
  },
  {
    title: '4:AM',
    artist: 'HELLMERRY',
    image: '../../assets/am.jpg',
    addedby: 'Dom'
  },
  {
    title: 'Cintamu Sepahit Topi Miring',
    artist: 'Jogja Hip Hop Foundation',
    image: '../../assets/cint.jpg',
    addedby: 'Nick'
  },
  {
    title: 'Para Sa Streets',
    artist: 'Hev Abi',
    image: '../../assets/streets.jpg',
    addedby: 'Vian'
  },
  {
    title: 'Isang Linggong Pag-ibig',
    artist: 'Imelda Papin',
    image: '../../assets/linggo.jpg',
    addedby: 'Kim'
  },
])
}

