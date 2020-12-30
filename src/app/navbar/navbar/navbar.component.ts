import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  favorites = new EventEmitter<void>();

  @Output()
  history = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onFavoritesClick(): void {
    this.favorites.emit();
  }

  onHistoryClick(): void {
    this.history.emit();
  }

}
