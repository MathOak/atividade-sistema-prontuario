import { Component, computed, effect, signal } from '@angular/core';
import { CardPaciente } from '../card-paciente/card-paciente';

@Component({
  selector: 'app-lista-pacientes',
  imports: [CardPaciente],
  templateUrl: './lista-pacientes.html',
  styleUrl: './lista-pacientes.css',
})
export class ListaPacientes {
  constructor() {
    effect(() => {
      document.title = `${this.pacientesAguardando()} Pacientes na Fila`;
    });
  }
  pacientes = signal([
    { nome: 'Ana Silva', idade: 34, peso: 65, altura: 1.68, status: 'Aguardando' },
    { nome: 'Carlos Souza', idade: 52, peso: 88, altura: 1.75, status: 'Em Atendimento' },
  ]);
  listaTriagem = signal<{ nome: string; prioridade: string }[]>([]);
  pacienteAtivo = signal<string | null>(null);

  cadastrarPaciente(novoPaciente: {
    nome: string;
    idade: number;
    peso: number;
    altura: number;
    status: string;
  }) {
    this.pacientes.update((pacientes) => [...pacientes, novoPaciente]);
  }

  reiniciarFila() {
    this.pacientes.set([]);
  }

  adicionarATriagem(paciente: { nome: string; prioridade: string }) {
    this.listaTriagem.update((triagem) => [...triagem, paciente]);
  }

  totalPacientes = computed(() => this.pacientes().length);

  pacientesAguardando = computed(
    () => this.pacientes().filter((p) => p.status === 'Aguardando').length,
  );
  mediaIdade = computed(() => {
    const lista = this.pacientes();
    return lista.length ? Math.round(lista.reduce((acc, p) => acc + p.idade, 0) / lista.length) : 0;
  });

  exibirPaciente(nome: string) {
    this.pacienteAtivo.set(nome);
    console.log('Paciente selecionado é ' + nome);
  }
}
