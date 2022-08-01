import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public welcomeText: string;

  constructor() {
  }

  public ngOnInit(): void {
    this.setWelcomingText();
  }

  private setWelcomingText(): void {
    const today = new Date();
    const currentHour = +today.toString().split(' ')[4].split(':')[0];
    this.welcomeText = this.getWelcomingText(currentHour);
  }

  private getWelcomingText(hour: number): string {
    if (hour > 16) {
      return 'Good evening';
    } else if (hour > 12) {
      return 'Good afternoon';
    } else if (hour > 8) {
      return 'Good morning';
    } else {
      return 'You need to sleep';
    }
  }
}
