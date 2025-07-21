import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-title-intro',
  templateUrl: './title-intro.component.html',
  styleUrls: ['./title-intro.component.scss'],
  standalone: false,
})
export class TitleIntroComponent implements OnInit {
  constructor(private renderer: Renderer2) { }
  private countdown: number = 3;
  private intervalId: any;

  ngOnInit(): void {

    this.startTitleIntro();

  }

  startTitleIntro(): void {
    const imageElement: any = document.getElementById('imageTitle1');
    const imageElement2: any = document.getElementById('imageTitle2');
    this.intervalId = setInterval(() => {
      this.countdown--;
      console.log(`Temps restant : ${this.countdown} secondes`);

      if (this.countdown <= 0) {
        console.log('fin du premier titre !');
        imageElement.style.display = 'none';
        this.showBlacksBand();
        imageElement2.style.display = 'block';


        clearInterval(this.intervalId); // Arrête l'intervalle une fois le décompte terminé
        this.countdownAnim(2, this.starAnimation);
        this.countdownAnim(3, this.changeTitleAnimation);
        this.countdownAnim(8,this.cleanFirstPartAnimation);
        this.countdownAnim(8,this.insertBackgroundIntroMovie)
      }
    }, 1000); // 1000 millisecondes = 1 seconde
  }
  showBlacksBand(): void {
    const bandeNoireSup = document.getElementById('bandeNoireSup');
    const bandeNoireInf = document.getElementById('bandeNoireInf');

    if (bandeNoireSup) {
      this.renderer.setStyle(bandeNoireSup, 'display', 'block');
    }

    if (bandeNoireInf) {
      this.renderer.setStyle(bandeNoireInf, 'display', 'block');
    }
  }

  starAnimation(): void {
    const star: any = document.getElementById('grandeEtoile');
    let top: any = 10;
    let right: any = 0;
    star.style.display = 'block';
    star.style.top = top + `%`;
    star.style.right = right + `%`;
    // Définir l'intervalle pour mettre à jour la position de l'étoile
    const intervalId = setInterval(() => {
      top += 10;
      right += 10;

      star.style.top = top + '%';
      star.style.right = right + '%';
    }, 100); // Mise à jour toutes les 100 millisecondes

    // Arrêter l'intervalle après 5 secondes
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000); // Arrête après 5000 millisecondes (5 secondes)

  }
  changeTitleAnimation(): void {
    const imageElement2: any = document.getElementById('imageTitle2');
    imageElement2.src = '/assets/intro/logo_titre.png';
    imageElement2.style.top = 38 + `%`;
    imageElement2.style.right = 36 + `%`;
    imageElement2.style.height = 30 + `%`;
    imageElement2.style.width = 30 + `%`;
    let opacity: number = 0;

    const remImage: any = document.getElementById('imageRemi')
    const kevImage: any = document.getElementById('imageKevin')

    // Rendre l'image invisible au début

    imageElement2.style.opacity = opacity;
    remImage.style.opacity = opacity;
    kevImage.style.opacity = opacity;
    remImage.style.display = 'block';
    kevImage.style.display = 'block';
    // Utiliser setInterval pour augmenter progressivement l'opacité
    const intervalId = setInterval(() => {
      opacity += 0.05; // Augmenter l'opacité de 0.05 à chaque intervalle
      imageElement2.style.opacity = opacity;
      remImage.style.opacity = opacity;
      kevImage.style.opacity = opacity;

      // Arrêter l'intervalle lorsque l'opacité atteint 1 (totalement visible)
      if (opacity >= 1) {
        clearInterval(intervalId);
      }
    }, 100); // Intervalle de 100 millisecondes
  }

  countdownAnim(seconds: any, callback: Function) {

    let remainingSeconds = seconds;

    const intervalId = setInterval(() => {
      remainingSeconds--;
      console.log(`Temps restant: ${remainingSeconds} secondes`);

      if (remainingSeconds <= 0) {
        clearInterval(intervalId); // Arrête le compte à rebours
        console.log("Compte à rebours terminé!");
        callback(); // Déclenche la méthode de callback
      }
    }, 1000); // Exécute toutes les 1000 millisecondes (1 seconde)
  }
  cleanFirstPartAnimation():void{
    const ids :any= [
            'bandeNoireSup',
            'imageTitle1',
            'bandeNoireInf',
            'imageTitle2',
            'grandeEtoile',
            'imageRemi',
            'imageKevin'
        ];

        ids.forEach((id: string) => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none';
            }
        });
    }
    insertBackgroundIntroMovie():void{
        const paysage: any = document.getElementById('paysage');
        paysage.style.display='block';
    }
  }




