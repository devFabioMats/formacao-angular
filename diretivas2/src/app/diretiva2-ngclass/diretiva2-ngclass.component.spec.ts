import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretiva2NgclassComponent } from './diretiva2-ngclass.component';

describe('Diretiva2NgclassComponent', () => {
  let component: Diretiva2NgclassComponent;
  let fixture: ComponentFixture<Diretiva2NgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretiva2NgclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretiva2NgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
