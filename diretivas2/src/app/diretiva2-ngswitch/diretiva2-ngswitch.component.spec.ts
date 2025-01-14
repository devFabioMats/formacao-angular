import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretiva2NgswitchComponent } from './diretiva2-ngswitch.component';

describe('Diretiva2NgswitchComponent', () => {
  let component: Diretiva2NgswitchComponent;
  let fixture: ComponentFixture<Diretiva2NgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretiva2NgswitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretiva2NgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
