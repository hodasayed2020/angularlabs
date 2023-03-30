import { Component } from '@angular/core';
import { Icategory } from 'src/app/modules/icategory';

@Component({
  selector: 'app-orderparentcomponent',
  templateUrl: './orderparentcomponent.component.html',
  styleUrls: ['./orderparentcomponent.component.scss']
})
export class OrderparentcomponentComponent {
  catlist:Icategory[];

constructor(){
  this.catlist=[{id:1,name:"Mobile"},{id:2,name:"labtop"},{id:3,name:"tv"}]
}


}
