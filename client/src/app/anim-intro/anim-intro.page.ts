import { Component, HostListener, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anim-intro',
  templateUrl: './anim-intro.page.html',
  styleUrls: ['./anim-intro.page.scss'],
  standalone: false,
})
export class AnimIntroPage implements OnInit {
  timer: number = 10;
  private timerInterval: any;
  private isTimerRunning: boolean = false;

  constructor(private navCtrl: NavController) { }

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
    }
  }

  startTimer() {
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.timerInterval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.stopTimer();
          this.navCtrl.navigateRoot('/home');
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
