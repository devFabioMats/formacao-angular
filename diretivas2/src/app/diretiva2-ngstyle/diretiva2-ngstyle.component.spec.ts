import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretiva2NgstyleComponent } from './diretiva2-ngstyle.component';

describe('Diretiva2NgstyleComponent', () => {
  let component: Diretiva2NgstyleComponent;
  let fixture: ComponentFixture<Diretiva2NgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretiva2NgstyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretiva2NgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
