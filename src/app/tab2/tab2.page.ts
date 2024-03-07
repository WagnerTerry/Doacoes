import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  doarAlimentos() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Alimento'
    );
  }

  doarRoupas() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Roupas'
    );
  }

  doarSangue() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Sangue'
    );
  }

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  whats() {
    this.abrirUrl(
      'https://api.whatsapp.com/send?phone=555194904309&text=Ol%C3%A1%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes'
    );
  }
}
