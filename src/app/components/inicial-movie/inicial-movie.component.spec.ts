import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialMovieComponent } from './inicial-movie.component';

describe('InicialMovieComponent', () => {
  let component: InicialMovieComponent;
  let fixture: ComponentFixture<InicialMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
