import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.css'
})
export class NavBlankComponent implements OnInit {
  private readonly _AuthService= inject(AuthService)
  private readonly _CartService = inject(CartService)

  countNumber: number=0;
<<<<<<< HEAD
  ordersNumber:number=0;
  ordersAdminNumber:number=0;

=======
>>>>>>> bf6c4b4b96c071104247df7842fc8acbb47f0703

  ngOnInit(): void {

    this._CartService.getCartItems().subscribe({
      next:(res)=>{
        this._CartService.cartNumber.next(res.numOfCartItems)
      }
    })

  
     this._CartService.cartNumber.subscribe({
      next:(d)=>{
this.countNumber=d;
      }
     })
<<<<<<< HEAD
     this._CartService.cartOrders.subscribe({
      next:(e)=>{
this.ordersNumber=e;
      }
     })
     this._CartService.adminOrders.subscribe({
      next:(r)=>{
this.ordersAdminNumber=r;
      }
    })


=======
>>>>>>> bf6c4b4b96c071104247df7842fc8acbb47f0703
    } 

  isLoggedout():void{
    this._AuthService.logOut();
  };

}
