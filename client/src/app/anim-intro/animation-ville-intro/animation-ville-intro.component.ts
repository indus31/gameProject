import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-ville-intro',
  templateUrl: './animation-ville-intro.component.html',
  styleUrls: ['./animation-ville-intro.component.scss'],
  standalone: false,
})
export class AnimationVilleIntroComponent implements OnInit {
  constructor() {

  }
  private explosionVille1: any;
  private explosionVille2: any;
  private explosionVille3: any;
  private explosionVille4: any;
  private explosionVille5: any;
  private explosionVille6: any;
  private intervalId: any;
  private imageSources: string[] = [
    '/assets/intro/e1.png',
    '/assets/intro/e2.png',
    //'/assets/intro/e3.png'
  ];
  private idImage: string[] = [
    'explosion1',
    'explosion2',
    'explosion3',
    'explosion4',
    'explosion5',
    'explosion6',
  ]
  private currentIndex: number = 0;



  ngOnInit() {
    this.explosionVille1 = document.getElementById('explosion1');
    this.explosionVille2 = document.getElementById('explosion2');
    this.explosionVille3 = document.getElementById('explosion3');
    this.explosionVille4 = document.getElementById('explosion4');
    this.explosionVille5 = document.getElementById('explosion5');
    this.explosionVille6 = document.getElementById('explosion6');
    this.startAnimationExplosion();
   

  }

  startAnimationExplosion() {
    this.intervalId = setInterval(() => {
      // Mise à jour de l'index courant pour alterner entre les sources d'images
      this.currentIndex = (this.currentIndex + 1) % this.imageSources.length;

      // Les lignes `if` vérifient si l'élément image existe avant de mettre à jour sa source
      if (this.explosionVille1) this.explosionVille1.src = this.imageSources[this.currentIndex];
      if (this.explosionVille2) this.explosionVille2.src = this.imageSources[this.currentIndex];
      if (this.explosionVille3) this.explosionVille3.src = this.imageSources[this.currentIndex];
      if (this.explosionVille4) this.explosionVille4.src = this.imageSources[this.currentIndex];
      if (this.explosionVille5) this.explosionVille5.src = this.imageSources[this.currentIndex];
      if (this.explosionVille6) this.explosionVille6.src = this.imageSources[this.currentIndex];
    }, 400); // Change l'image toutes les 400 millisecondes

    // Arrête l'animation après 60 secondes
    setTimeout(() => {
      clearInterval(this.intervalId);
    }, 60000); // 60 secondes
  }

  ngOnDestroy() {
    // Nettoie l'intervalle lorsque le composant est détruit
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
