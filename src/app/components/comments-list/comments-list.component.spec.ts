import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CommentsListComponent } from './comments-list.component';

describe('CommentsListComponent', () => {
  let component: CommentsListComponent;
  let fixture: ComponentFixture<CommentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have '16px' of spacing by items`, () => {
    const element = fixture.debugElement.query(By.css('.comments-list__items')).nativeElement as HTMLDivElement;
    expect((getComputedStyle(element)).gap).toEqual('16px');
  });
});
