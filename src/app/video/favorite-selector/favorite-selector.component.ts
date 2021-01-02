import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { FavoriteService } from '../services/favorite.service';
import { SearchResult } from '../../search/Models/SearchResult.model';

@Component({
  selector: 'app-favorite-selector',
  templateUrl: './favorite-selector.component.html',
  styleUrls: ['./favorite-selector.component.css']
})
export class FavoriteSelectorComponent implements OnInit {

  isFavorite$?: Observable<boolean>;

  @Input()
  youtubeVideo$!: Observable<SearchResult>;

  youtubeVideo: SearchResult = new SearchResult();

  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.isFavorite$ = combineLatest([this.youtubeVideo$, this.favoriteService.favorites$]).pipe(
      filter(([video, favorites]) => !!video && !!favorites),
      tap(([video, favorites]) => this.youtubeVideo = video),
      map(([video, favoriteVideos]) => {
        return favoriteVideos?.some(elem => elem.id === video.id);
      })
    );

  }

  removeFromFavorites(): void {
    this.favoriteService.remove(this.youtubeVideo.id);
  }

  addToFavorites(): void {
    this.favoriteService.add(this.youtubeVideo);
  }

}
