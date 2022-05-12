import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopBarComponent } from './sub-top-bar.component';

describe('SubTopBarComponent', () => {
  let component: SubTopBarComponent;
  let fixture: ComponentFixture<SubTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
