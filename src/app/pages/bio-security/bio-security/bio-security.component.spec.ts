import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioSecurityComponent } from './bio-security.component';

describe('BioSecurityComponent', () => {
  let component: BioSecurityComponent;
  let fixture: ComponentFixture<BioSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
