import { Component } from '@angular/core';

import { Storeclass } from 'src/app/modules/storeclass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  username: string="hoda good";


// name: string="clientname";
//   sayhello(){
// return "prompet"
// "hello,"+this.hellovar;
//   }

//  clientbuy(){

//  var name=("hello"+"Enter your name")
    
// }

//member properties &member methods:
// iproduct: Iproduct={id: 1, name: 'heels',price:250,quantity:30,catID:1,imgURL:'https://i.pinimg.com/236x/7a/27/37/7a2737afadc4b2b81e445e89f4f71f1d.jpg'};
// }
//property from class:
storeclass:Storeclass=new Storeclass('Dejaveau','client hoda','https://images.pexels.com/photos/14959678/pexels-photo-14959678.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',['shoes','bags','accessories'])
;
showlogo:boolean=true;
togglelogo(){
this.showlogo = !this.showlogo;
document.write("“Thanks for purchasing from our Store” ");

}

}