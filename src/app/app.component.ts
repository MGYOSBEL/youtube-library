import { Component, OnDestroy, OnInit } from '@angular/core';
import { HistoryService } from './video/services/history.service';
import { FavoriteService } from './video/services/favorite.service';
import { VideoService } from './video/services/video.service';
import { SearchResult } from './search/Models/SearchResult.model';
import { SwUpdate } from '@angular/service-worker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'youtube-library';

  list$;
  sideDrawerTitle?: string;

  unsubscribe$ = new Subject<void>();

  constructor(
    private historyService: HistoryService,
    private favoriteService: FavoriteService,
    private videoService: VideoService,
    private swUpdate: SwUpdate
  ) {
    this.list$ = this.historyService.history$;
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(() => {
        if (confirm(('New version is available. Load New Version?'))) {
          window.location.reload();
        }
      }
      );
    }
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
