import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretivas2CustomizadasComponent } from './diretivas2-customizadas.component';

describe('Diretivas2CustomizadasComponent', () => {
  let component: Diretivas2CustomizadasComponent;
  let fixture: ComponentFixture<Diretivas2CustomizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretivas2CustomizadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretivas2CustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
