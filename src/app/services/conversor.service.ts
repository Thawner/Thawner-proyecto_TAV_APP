import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConversorService {

  urlEndPoint: string= 'https://mindicador.cl/api'

  constructor(private httpClient: HttpClient) { }

  getListadoSymbols(): Promise<any> { 
    return new Promise((resolve, reject) => {
			this.httpClient.get(`${this.urlEndPoint}`).subscribe(respuesta => { resolve(respuesta) }, (err) => { reject(err) });
		});
	}
}
