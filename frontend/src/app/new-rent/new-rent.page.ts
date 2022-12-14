import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from '../models/house';
import { HouseService } from '../service/house.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.page.html',
  styleUrls: ['./new-rent.page.scss'],
})
export class NewRentPage implements OnInit {

  title: string = '';
  location: string = '';
  price: number = null;
  description: string = '';
  wc: number = null;
  rooms: number = null; 

  toastColor:string;

  constructor(private houseService: HouseService, private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }

  onCreate(): void{
    const house = new House(this.title,this.location,this.price,this.description,this.wc,this.rooms);
    this.houseService.postCreate(house).subscribe(
      data => {
        this.toastColor = 'success'
        this.presentToast(data.message);
        this.router.navigate(['/admin']);
      },
      err => {
        this.toastColor = 'danger'
        this.presentToast(err.error.message);
      }
    )
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom',
      color: this.toastColor,
      icon:"alert-circle-outline",
      animated: true
    });
    toast.present();
  }

}
