import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-intro',
  templateUrl: './title-intro.component.html',
  styleUrls: ['./title-intro.component.scss'],
  standalone: false,
})
export class TitleIntroComponent implements OnInit {
  private countdown: number = 3;
  private intervalId: any;

  ngOnInit(): void {
   
 this.startCountdown();

  }

startCountdown() {
  const imageElement: any = document.getElementById('imageTitle1');
    this.intervalId = setInterval(() => {
      this.countdown--;
      console.log(`Temps restant : ${this.countdown} secondes`);

      if (this.countdown <= 0) {
        console.log('fin du premier titre !');
        imageElement.style.display = 'none';
        clearInterval(this.intervalId); // Arrête l'intervalle une fois le décompte terminé
      }
    }, 1000); // 1000 millisecondes = 1 seconde
  }
}



