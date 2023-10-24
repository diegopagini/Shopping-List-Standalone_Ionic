import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AlertController,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab2Page {
  item: string;

  constructor(
    private readonly _shoopingService: ShoppingService,
    private readonly _alertController: AlertController
  ) {
    this.item = '';
  }

  addItem(): void {
    if (!this._shoopingService.existsItem(this.item)) {
      this._shoopingService.addItem(this.item);
      this.item = '';
      this.alertSuccess();
    } else this.alertError();
  }

  async alertSuccess(): Promise<void> {
    const alert = await this._alertController.create({
      header: 'Success',
      message: 'Item added!',
      buttons: ['ok'],
    });

    await alert.present();
  }

  async alertError(): Promise<void> {
    const alert = await this._alertController.create({
      header: 'Error',
      message: 'Item already created!',
      buttons: ['ok'],
    });

    await alert.present();
  }
}
