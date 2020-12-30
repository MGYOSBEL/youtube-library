import { Component } from '@angular/core';
import { HistoryService } from './video/services/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-library';

  list$;

  constructor(
    private historyService: HistoryService
  ) {
    this.list$ = this.historyService.history$;
  }
}
