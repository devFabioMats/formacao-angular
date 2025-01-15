import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretiva2NgforComponent } from './diretiva2-ngfor.component';

describe('Diretiva2NgforComponent', () => {
  let component: Diretiva2NgforComponent;
  let fixture: ComponentFixture<Diretiva2NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretiva2NgforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretiva2NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
