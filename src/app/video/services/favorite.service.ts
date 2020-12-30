import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SearchResult } from '../../search/Models/SearchResult.model';
import { CacheService } from './cache.service';

const FAVORITES_CACHE_TOKEN = 'favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoritesSubject = new BehaviorSubject<SearchResult[]>([]);
  favorites$ = this.favoritesSubject.asObservable().pipe(
    tap((favorites) => this.cache.save(FAVORITES_CACHE_TOKEN, favorites))
  );

  constructor(private cache: CacheService) {
    const cachedFavorites = this.cache.load(FAVORITES_CACHE_TOKEN);
    this.favoritesSubject.next(cachedFavorites as SearchResult[]);
  }

  add(element: SearchResult): void {
    const favorites = [...this.favoritesSubject.value];
    const updatedfavorites = favorites.concat(element);
    this.favoritesSubject.next(updatedfavorites);
  }

}
