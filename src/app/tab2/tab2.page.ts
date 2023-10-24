import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
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

  constructor(private readonly _shoopingService: ShoppingService) {
    this.item = '';
  }

  addItem(): void {
    if (!this._shoopingService.existsItem(this.item))
      this._shoopingService.addItem(this.item);
  }
}
