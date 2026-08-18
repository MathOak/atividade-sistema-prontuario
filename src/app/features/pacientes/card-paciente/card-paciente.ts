import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalculaIMCPipe } from '../../../shared/pipes/calcula-imc-pipe';

@Component({
  selector: 'app-card-paciente',
  imports: [CalculaIMCPipe],
  templateUrl: './card-paciente.html',
  styleUrl: './card-paciente.css',
})
export class CardPaciente {
  @Input() nome: string = '';
  @Input() idade: number = 0;
  @Output() pacienteSelecionado = new EventEmitter<string>();

  selecionarPaciente() {
    this.pacienteSelecionado.emit(this.nome);
  }
  @Input() peso = 70;
  @Input() altura = 1.7;
}
