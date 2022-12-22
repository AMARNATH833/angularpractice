import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent{

  constructor() { }
  name=new FormControl('');

  updateName(){
    this.name.setValue('Angular');
  }

}
