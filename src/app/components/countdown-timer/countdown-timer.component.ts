import { Component, Input, OnChanges,  } from '@angular/core';
import { Observable, scan, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnChanges {
  @Input() seconds!: number;
  type: string = typeof this.seconds;
  timer$!: Observable<number>;

  ngOnChanges() {
    this.timer$ = timer(0, 1000).pipe(
      scan(acc => --acc, this.seconds),
      takeWhile(x => x >= 0)
    );
  }

  // timer$ = this.timer$;
}
