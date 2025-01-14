import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretiva2NgifComponent } from './diretiva2-ngif.component';

describe('Diretiva2NgifComponent', () => {
  let component: Diretiva2NgifComponent;
  let fixture: ComponentFixture<Diretiva2NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretiva2NgifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretiva2NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
