import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-title-intro',
  templateUrl: './title-intro.component.html',
  styleUrls: ['./title-intro.component.scss'],
  standalone: false,
})
export class TitleIntroComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  private countdown: number = 3;
  private intervalId: any;

  ngOnInit(): void {
   
 this.startTitleIntro();

  }

startTitleIntro() {
  const imageElement: any = document.getElementById('imageTitle1');
    this.intervalId = setInterval(() => {
      this.countdown--;
      console.log(`Temps restant : ${this.countdown} secondes`);

      if (this.countdown <= 0) {
        console.log('fin du premier titre !');
        imageElement.style.display = 'none';
        this.showBlacksBand()
        clearInterval(this.intervalId); // Arrête l'intervalle une fois le décompte terminé
      }
    }, 1000); // 1000 millisecondes = 1 seconde
  }
  showBlacksBand() {
    const bandeNoireSup = document.getElementById('bandeNoireSup');
    const bandeNoireInf = document.getElementById('bandeNoireInf');

    if (bandeNoireSup) {
      this.renderer.setStyle(bandeNoireSup, 'display', 'block');
    }

    if (bandeNoireInf) {
      this.renderer.setStyle(bandeNoireInf, 'display', 'block');
    }
  }
}



