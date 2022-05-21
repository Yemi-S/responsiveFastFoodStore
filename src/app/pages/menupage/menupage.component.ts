import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  menuId: any;
  menuData: any;
  constructor(private activatedRoute: ActivatedRoute,
              private service: OrderDetailsService,
    ) { }

  ngOnInit(): void {
    this.menuId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('menuId: ',this.menuId);
    if(this.menuId){
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id == this.menuId;
      })[0];
    }
  }

}
