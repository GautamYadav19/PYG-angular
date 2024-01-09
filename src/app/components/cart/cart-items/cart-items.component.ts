import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  // image!: string;
  // productName: string = '';
  // productDesc: string = '';
  // price!: number;

  card: any = [
    {
      image: '../../../../assets/product-1.jpg',
      productName: "Colorful Stylish Shirt",
      productDesc: "Product description goes here.",
      price: 19.99
    },
    {
      image: '../../../../assets/product-1.jpg',
      productName: "Colorful Stylish Shirt",
      productDesc: "Product description goes here.",
      price: 34.99
    },
    {
      image: '../../../../assets/product-1.jpg',
      productName: "Colorful Stylish Shirt",
      productDesc: "Product description goes here.",
      price: 34.99
    },
    {
      image: '../../../../assets/product-1.jpg',
      productName: "Colorful Stylish Shirt",
      productDesc: "Product description goes here.",
      price: 54.99
    },
    {
      image: '../../../../assets/product-1.jpg',
      productName: "Colorful Stylish Shirt",
      productDesc: "Product description goes here.",
      price: 69.99
    }
  ]

  constructor() {
    console.log(this.card);
  }

  ngOnInit(): void {
  }

}
