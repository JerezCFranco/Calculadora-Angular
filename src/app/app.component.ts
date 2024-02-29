import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pantallaValor: string = '';

  constructor(private titleCalculadora: Title) {}

  ngOnInit(): void {
    this.titleCalculadora.setTitle('Calculadora');
  }

  agregar(valor: string): void {
    this.pantallaValor += valor;
  }

  borrar(): void {
    this.pantallaValor = '';
  }

  borrarUltimo(): void {
    if (this.pantallaValor.length > 0) {
      this.pantallaValor = this.pantallaValor.slice(0, -1);
    }
  }

  calcular(): void {
    try {
      const resultado = new Function('return ' + this.pantallaValor)();
      this.pantallaValor = resultado.toString();
    } catch (error) {
      console.error('Error en el cálculo:', error);
    }
  }

}
