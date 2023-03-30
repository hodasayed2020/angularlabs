import { Component } from '@angular/core';
import { Iproduct } from 'src/app/modules/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
// catID=Mobile:1,Tv:2,labtop:3,camera:4
export class ProductsComponent {
// prdlist:Iproduct={id:1,name:"iphone",price:2500,quantity:20,catID:1,imgURL:"https://images.pexels.com/photos/14959678/pexels-photo-14959678.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"};


prdlist:Iproduct[];

constructor(){
  this.prdlist = [{id:1,name:"IPhone",price:2500,quantity:20,catID:1,imgURL:"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"}
,{id:6,name:"Readmi",price:2300,quantity:0,catID:1,imgURL:"https://images.pexels.com/photos/1884777/pexels-photo-1884777.jpeg?auto=compress&cs=tinysrgb&w=600"},
{id:11,name:"Dell",price:36000,quantity:1,catID:2,imgURL:"https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=600"},
{id:1,name:"Tornado",price:6000,quantity:20,catID:3,imgURL:"https://images.pexels.com/photos/4740522/pexels-photo-4740522.jpeg?auto=compress&cs=tinysrgb&w=600"}
]





}

// buyfunc(i:number,j:number){
//   for( const x of this.prdlist){
//     if(x.id==i){
//       this.prdlist[i-1].quantity=this.prdlist[i-1].quantity-j;
//     }
//   }


// }
showimg:boolean=true;
toggleimg(){
this.showimg = !this.showimg;
document.write("“Thanks for purchasing from our Store” ");
}


}
