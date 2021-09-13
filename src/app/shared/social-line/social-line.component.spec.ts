import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLineComponent } from './social-line.component';

describe('SocialLineComponent', () => {
  let component: SocialLineComponent;
  let fixture: ComponentFixture<SocialLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
