// Importando o angular core para o componente criado
import{Component} from '@angular/core';

// Criando o component
@Component({
  selector:'meu-primeiro-component',
  template:`
  <h2>Meu primeiro component com Angular 2!</h2>
  `
})
// exportando a classe para que seja possível usada em outra página
export class MeuPrimeiroComponent{}
