import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CommentItemComponent } from './comment-item.component';

describe('CommentItemComponent', () => {
  let component: CommentItemComponent;
  let fixture: ComponentFixture<CommentItemComponent>;
  let screenSize;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentItemComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    screenSize = window.innerWidth;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`avatar element should have '48px' of width and height when have innerWidth max 1280px`, () => {
    const compiled = fixture.nativeElement;
    const element = fixture.debugElement.query(By.css('.item__avatar')).nativeElement as HTMLImageElement;
    if (screenSize >= 1280) {
      expect((getComputedStyle(element)).height).toEqual('48px');
    }
  });

  it(`avatar element should have '32px' of width and height when have innerWidth max 1024`, () => {
    const compiled = fixture.nativeElement;
    const element = fixture.debugElement.query(By.css('.item__avatar')).nativeElement as HTMLImageElement;
    if (screenSize <= 1024 && screenSize > 768) {
      expect((getComputedStyle(element)).height).toEqual('32px');
    }
  });

  it(`avatar element should have '24px' of width and height when have innerWidth max 768`, () => {
    const compiled = fixture.nativeElement;
    const element = fixture.debugElement.query(By.css('.item__avatar')).nativeElement as HTMLImageElement;
    if (screenSize <= 768) {
      expect((getComputedStyle(element)).height).toEqual('24px');
    }
  });

});
