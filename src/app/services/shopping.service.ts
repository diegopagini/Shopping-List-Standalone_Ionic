import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  items: string[];
  isEmpty: boolean;

  constructor() {
    this.items = [];
    this.isEmpty = true;
  }

  addItem(item: string): void {
    this.items.push(item);
    this.isEmpty = false;
  }

  removeItem(item: string): void {
    const index = this.items.findIndex(
      (el: string) => el.toLowerCase().trim() === item.toLowerCase().trim()
    );
    if (index !== -1) this.items.splice(index, 1);
    if (this.items.length <= 0) this.isEmpty = true;
  }

  removeAllItems(): void {
    this.items = [];
    this.isEmpty = true;
  }

  existsItem(item: string): boolean {
    const itemFound = this.items.find(
      (el: string) => el.toLowerCase().trim() === item.toLowerCase().trim()
    );
    if (itemFound) return true;
    return false;
  }
}
