import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonReorder,
  IonReorderGroup,
  IonTitle,
  IonToolbar,
  ItemReorderEventDetail,
  MenuController,
} from '@ionic/angular/standalone';

import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonMenu,
    IonReorder,
    IonReorderGroup,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page implements OnInit {
  items: string[];

  constructor(
    private readonly _alertController: AlertController,
    private readonly _menuController: MenuController,
    private readonly _shoppingService: ShoppingService
  ) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = this._shoppingService.getItems();
  }

  async removeItem(item: string): Promise<void> {
    const alert = await this._alertController.create({
      header: 'Confirm',
      message: 'Are you sure that you wanna delete this item?',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this._shoppingService.removeItem(item);
          },
        },
        {
          text: 'no',
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });

    await alert.present();
  }

  onRenderItems(event: any): void {
    const item = this.items.splice(
      (event as CustomEvent<ItemReorderEventDetail>).detail.from,
      1
    )[0];
    this.items.splice(
      (event as CustomEvent<ItemReorderEventDetail>).detail.to,
      0,
      item
    );
    (event as CustomEvent<ItemReorderEventDetail>).detail.complete();
  }

  async removeAllItems(): Promise<void> {
    const alert = await this._alertController.create({
      header: 'Confirm',
      message: 'Are you sure that you wanna delete all this item?',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this._shoppingService.removeAllItems();
            this.items = [];
            this._menuController.close();
          },
        },
        {
          text: 'no',
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });

    await alert.present();
  }
}
