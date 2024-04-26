import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-table',
  templateUrl: './svg-table.component.html',
  styleUrl: './svg-table.component.css'
})
export class SvgTableComponent {
  // status : boolean =false
  // color: string = '#231F20'
  @Input() status: any;
  @Input() color: any;
  constructor() {
    // this.status = this.status === 'isBusy' ? '' : ''

    // console.log(this.status, 'statys ::::');

  }
}
