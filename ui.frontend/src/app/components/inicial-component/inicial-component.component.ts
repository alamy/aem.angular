import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicial-component',
  templateUrl: './inicial-component.component.html',
  styleUrls: ['./inicial-component.component.css']
})
export class InicialComponentComponent implements OnInit {
  @Input() text: string;
  @Input() title: string;
  @ViewChild("cnpj") cnpj: ElementRef; 
  readonly apiURL : string;
  public empresa;
  nome;
  descricao;
  data_abertura;
  uf;
  bairro;
  cep;
  telefone;
  dias;
  

  constructor(private http: HttpClient) {
    this.apiURL = 'https://api-publica.speedio.com.br/'
   }

   
   ngOnInit(): void {

   }
   
  Consultar() {
    console.log('estou na function')
    this.empresa = this.cnpj.nativeElement.value
    
    this.http.get<any>(`${ this.apiURL }/buscarcnpj?cnpj=${this.empresa}`)
           .subscribe((resultado) => {
            this.nome = resultado["RAZAO SOCIAL"];
            this.descricao = resultado["CNAE PRINCIPAL DESCRICAO"];
            this.data_abertura = resultado["DATA ABERTURA"];
            this.uf = resultado["UF"];
            this.bairro = resultado["BAIRRO"];
            this.cep = resultado["CEP"];
            this.telefone = "( " + resultado["DDD"] + " )" + " " +  resultado["TELEFONE"];
            this.dias = resultado["DATA ABERTURA"];

          });
          
  }


}

MapTo('angularapp/components/inicial-component')(InicialComponentComponent)


