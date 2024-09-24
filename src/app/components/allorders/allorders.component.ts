import { Iorders } from './../../core/interfaces/iorders';
import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders.service';
<<<<<<< HEAD
import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
=======
import { DatePipe, SlicePipe } from '@angular/common';
>>>>>>> bf6c4b4b96c071104247df7842fc8acbb47f0703
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-allorders',
  standalone: true,
<<<<<<< HEAD
  imports: [DatePipe, SlicePipe,CurrencyPipe],
=======
  imports: [DatePipe, SlicePipe],
>>>>>>> bf6c4b4b96c071104247df7842fc8acbb47f0703
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent implements OnInit{

private readonly _OrdersService=inject (OrdersService)
private readonly _CartService=inject(CartService)
ordersDetails: Iorders= {} as Iorders;
id:string='';
id2:string='';
id3:string='';

<<<<<<< HEAD

=======
>>>>>>> bf6c4b4b96c071104247df7842fc8acbb47f0703
  ngOnInit(): void {
    this._CartService.cartId.subscribe({
      next:(d)=>{
        this.id=d;   
        console.log(this.id)
          }
    })

    this.id2=this._CartService.getData();
    console.log('Shared Data:',this.id2)

<<<<<<< HEAD
// to get all orders for admin
    this._OrdersService.getAllOrders().subscribe({
        next: (res) => 
        {console.log(res.data.length);
          this.ordersDetails=res
        this._CartService.adminOrders.next(res.data.length)
        }
        ,
        error: (err) => console.error(err)
      }) 


///to get user order by id
    // const storedId = localStorage.getItem('cartId');
    // if (storedId) {
    //   this.id3 = storedId;
    //   console.log('Component 2 - ID retrieved from localStorage:', this.id3);
    // }
    // this._OrdersService.getAllOrders(this.id3).subscribe({
    //   next: (res) => 
    //   {console.log(res);
    //     this.ordersDetails=res}
    //   ,
    //   error: (err) => console.error(err)
    // }) 
=======


    const storedId = localStorage.getItem('cartId');
    if (storedId) {
      this.id3 = storedId;
      console.log('Component 2 - ID retrieved from localStorage:', this.id3);
    }
    this._OrdersService.getAllOrders(this.id3).subscribe({
      next: (res) => 
      {console.log(res);
        this.ordersDetails=res}
      ,
      error: (err) => console.error(err)
    }) 
>>>>>>> bf6c4b4b96c071104247df7842fc8acbb47f0703
}}
