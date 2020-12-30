import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLibraryComponent } from './youtube-library.component';

describe('YoutubeLibraryComponent', () => {
  let component: YoutubeLibraryComponent;
  let fixture: ComponentFixture<YoutubeLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
