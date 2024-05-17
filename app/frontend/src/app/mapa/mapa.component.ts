import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Rota {
  date_time: string;
  latitude: string;
  longitude: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  rotas: Rota[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarRotas();
  }

  carregarRotas() {
    this.http.get<{ data: Rota[] }>('http://127.0.0.1:5000/position', { responseType: 'json' }).subscribe(data => {
      this.rotas = data.data;
    }, error => {
      console.error('Erro ao carregar os dados:', error);
    });
  }
}
