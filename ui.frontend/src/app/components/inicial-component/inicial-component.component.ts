import { Component, OnInit, Input } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-inicial-component',
  templateUrl: './inicial-component.component.html',
  styleUrls: ['./inicial-component.component.css']
})
export class InicialComponentComponent implements OnInit {
  @Input() text: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}

MapTo('angularapp/components/inicial-component')(InicialComponentComponent)


