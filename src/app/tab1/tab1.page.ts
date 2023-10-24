import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page implements OnInit {
  items: string[];

  constructor(private readonly _shoppingService: ShoppingService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = this._shoppingService.getItems();
  }
}
