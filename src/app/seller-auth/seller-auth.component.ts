import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(){}

  ngOnInit() :void{}
  signUp(data:object):void{
      console.warn(data)
    }
}
