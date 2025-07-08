import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';
import { Router} from '@angular/router'
import { authGuard } from '../auth.guard';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router){}

  ngOnInit() :void{}
  signUp(data:signUp):void{
      console.warn(data)
      this.seller.userSignUp(data)
    }    
}

