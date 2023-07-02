import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightInformationComponent } from './copyright-information.component';

describe('CopyrightInformationComponent', () => {
  let component: CopyrightInformationComponent;
  let fixture: ComponentFixture<CopyrightInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyrightInformationComponent]
    });
    fixture = TestBed.createComponent(CopyrightInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
