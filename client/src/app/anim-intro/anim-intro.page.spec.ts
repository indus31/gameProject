import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimIntroPage } from './anim-intro.page';

describe('AnimIntroPage', () => {
  let component: AnimIntroPage;
  let fixture: ComponentFixture<AnimIntroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
