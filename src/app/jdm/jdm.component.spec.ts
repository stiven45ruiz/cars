import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdmComponent } from './jdm.component';

describe('JdmComponent', () => {
  let component: JdmComponent;
  let fixture: ComponentFixture<JdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
