import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lista-pacientes',
  imports: [],
  templateUrl: './lista-pacientes.html',
  styleUrl: './lista-pacientes.css',
})
export class ListaPacientes {
  pacientes = signal([
    { nome: 'Ana Silva', idade: 34, peso: 65, altura: 1.68, status: 'Aguardando' },
    { nome: 'Carlos Souza', idade: 52, peso: 88, altura: 1.75, status: 'Em Atendimento' },
  ]);
  listaTriagem = signal<{ nome: string; prioridade: string }[]>([]);
  pacienteAtivo = signal<string | null>(null);
}
