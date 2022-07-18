import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoreComponent } from './show-lore.component';

describe('ShowLoreComponent', () => {
  let component: ShowLoreComponent;
  let fixture: ComponentFixture<ShowLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
