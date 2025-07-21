import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anim-intro',
  templateUrl: './anim-intro.page.html',
  styleUrls: ['./anim-intro.page.scss'],
  standalone: false,
})
export class AnimIntroPage implements OnInit {
  showElements: boolean = true;
  timer: number = 20;
  private timerInterval: any;
  private isTimerRunning: boolean = false;

  constructor(private navCtrl: NavController, private renderer: Renderer2) { }

  ngOnInit() {
    this.startTimer();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.navCtrl.navigateRoot('/home');
    } else if (event.key === ' ') {
      if (this.isTimerRunning) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
    } else if (event.key.toLowerCase() === 'm') {
      this.showElements = !this.showElements; // Masquer ou afficher les éléments
    }
  }

  startTimer() {
    const screenIntro = document.getElementById('screenIntro');
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.timerInterval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.stopTimer();
          this.navCtrl.navigateRoot('/home');
        } else if (this.timer <= 17) {
          this.renderer.setStyle(screenIntro, 'backgroundColor', `#FFEFFF`);
        }
      }, 1000);
    }
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
      this.isTimerRunning = false;
    }
  }
  
  
}
