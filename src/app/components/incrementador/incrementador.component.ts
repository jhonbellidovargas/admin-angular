import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 15;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      this.valorSalida.emit(this.progreso);
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      this.valorSalida.emit(this.progreso);
      return;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.valorSalida.emit(this.progreso);
  }
}
