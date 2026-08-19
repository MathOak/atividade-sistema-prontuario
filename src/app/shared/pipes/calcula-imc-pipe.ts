import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculaIMC',
})
export class CalculaIMCPipe implements PipeTransform {
  transform(peso: number, altura: number, ...args: unknown[]): string {
    /* IMC = peso / (altura * altura) */
    const imc = peso / (altura * altura);

    /*
    Menor que 18,5: Abaixo do peso (magreza)
    Entre 18,5 e 24,9: Peso normal (saudável)
    Entre 25,0 e 29,9: Sobrepeso (acima do peso)
    30,0 ou mais: Obesidade
    */
    /* Existem varias formas de fazer essa logica, aqui eu disponibilizo 3 delas */
    /* Primeira forma - Verificando todos os casos e mudando o texto da variavel de texto */
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

    return `${imc.toFixed(2)} - ${imc_texto}`;
  }

  /* Segunda forma - verificando todos os casos e retornando o resultado direto
    if (imc >= 30) return `${imc.toFixed(2)} - Obesidade`;
    if (imc < 30 && imc >= 25) return `${imc.toFixed(2)} - Sobrepeso`;
    if (imc < 25 && imc >= 18.5) return `${imc.toFixed(2)} - Peso normal`;
    if (imc < 18.5) return `${imc.toFixed(2)} - Abaixo do peso`;
    */

  /* Terceira forma - Verificando todas os casos com if e else e modificando a variavel classificação

    let classificacao = '';
    if (imc >= 30) {
      classificacao = 'Obesidade';
    } else if (imc < 30 && imc >= 25) {
      classificacao = 'Sobrepeso';
    } else if (imc < 25 && imc >= 18.5) {
      classificacao = 'Peso normal';
    } else {
      classificacao = 'Abaixo do peso';
    }

    return `${imc.toFixed(2)} - ${classificacao}`;
    */
}
