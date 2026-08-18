import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculaIMC',
})
export class CalculaIMCPipe implements PipeTransform {
  transform(idade: number, peso: number, altura: number, ...args: unknown[]): string {
    const imc = peso / (altura * altura);
    let imc_texto = 'Obesidade';

    if (imc < 30) {
      imc_texto = 'Sobrepeso';
    }
    if (imc < 25) {
      imc_texto = 'Peso normal';
    }
    if (imc < 18.5) {
      imc_texto = 'Abaixo do peso';
    }

    return `${imc} - ${imc_texto}`;
  }
}
