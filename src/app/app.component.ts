import { Component } from '@angular/core';
import { CodebreakerService } from './codebreaker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dojo-test-codebreaker';
  code = '';
  result = '';

  constructor(private breaker: CodebreakerService) {}

  click() {
    if(this.code.length == 4) {
      this.breaker.getCodebreaker(this.code).subscribe((data: any) => {
        this.result = data.result;
      });
    }
    this.result = 'Ingrese un número de 4 digitos';
  }

  generar() {
    this.breaker.getGenerar().subscribe((data: any) => {
      this.result = 'Numero generado.'
    });
  }

}
