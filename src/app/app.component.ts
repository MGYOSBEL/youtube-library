import { Component } from '@angular/core';
import { HistoryService } from './video/services/history.service';
import { FavoriteService } from './video/services/favorite.service';
import { VideoService } from './video/services/video.service';
import { SearchResult } from './search/Models/SearchResult.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-library';

  list$;
  sideDrawerTitle?: string;

  constructor(
    private historyService: HistoryService,
    private favoriteService: FavoriteService,
    private videoService: VideoService
  ) {
    this.list$ = this.historyService.history$;
  }

  viewHistory(): void {
    this.list$ = this.historyService.history$;
    this.sideDrawerTitle = 'History';
  }

  viewFavorites(): void {
    this.list$ = this.favoriteService.favorites$;
    this.sideDrawerTitle = 'Favorites';
  }

  playVideo(video: SearchResult): void {
    this.videoService.play(video);
  }
}
