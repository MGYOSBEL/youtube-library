import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { SearchResult } from '../../search/Models/SearchResult.model';
import { CacheService } from './cache.service';

const FAVORITES_CACHE_TOKEN = 'favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoritesSubject = new BehaviorSubject<Set<SearchResult>>(new Set([]));
  favorites$ = this.favoritesSubject.asObservable().pipe(
    map((favorites: Set<SearchResult>) => Array.from(favorites)),
    tap((favorites) => this.cache.save(FAVORITES_CACHE_TOKEN, favorites))
  );

  constructor(private cache: CacheService) {
    const cachedFavorites = this.cache.load(FAVORITES_CACHE_TOKEN);
    const favorites = new Set(cachedFavorites as SearchResult[]);
    this.favoritesSubject.next(favorites);
  }

  add(element: SearchResult): void {
    const favorites = this.favoritesSubject.value;
    const updatedfavorites = favorites.add(element);
    this.favoritesSubject.next(updatedfavorites);
  }

  remove(elementId: string): void {
    const favorites = Array.from(this.favoritesSubject.value);
    const updatedFavorites = favorites.filter(favorite => favorite.id !== elementId);
    this.favoritesSubject.next(new Set(updatedFavorites));
  }

}
