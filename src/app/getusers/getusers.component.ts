import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {
@Input() id = 0 ;
@Output() tomyfather: EventEmitter<any> = new EventEmitter();
  constructor() {


  }

  ngOnInit() {


}

sendtomyfather() {
  this.tomyfather.emit({
    data: 'hello father'

 });
}

}
