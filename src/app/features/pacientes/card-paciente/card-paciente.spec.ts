import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaciente } from './card-paciente';

describe('CardPaciente', () => {
  let component: CardPaciente;
  let fixture: ComponentFixture<CardPaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPaciente],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPaciente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
