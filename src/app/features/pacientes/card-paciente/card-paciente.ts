import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-paciente',
  imports: [],
  templateUrl: './card-paciente.html',
  styleUrl: './card-paciente.css',
})
export class CardPaciente {
  @Input() nome: string = '';
  @Input() idade: number = 0;
  @Output() pacienteSelecionado = new EventEmitter<string>();
}
