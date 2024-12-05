import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../models/coffee.interface';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  coffees: Coffee[] = [];

  // Define image paths directly in the component
  menuImages = {
    coffee1: 'assets/coffee_image_card/coffee-1.jpg',
    coffee2: 'assets/coffee_image_card/coffee-2.jpg',
    coffee3: 'assets/coffee_image_card/coffee-3.jpg',
    coffee4: 'assets/coffee_image_card/coffee-4.jpg',
    coffee5: 'assets/coffee_image_card/coffee-5.jpg',
    coffee6: 'assets/coffee_image_card/coffee-6.jpg',
    coffee7: 'assets/coffee_image_card/coffee-7.jpg',
    coffee8: 'assets/coffee_image_card/coffee-8.jpg'
  };

  // Array of coffee images
  coffeeImageList = [
    this.menuImages.coffee1,
    this.menuImages.coffee2,
    this.menuImages.coffee3,
    this.menuImages.coffee4,
    this.menuImages.coffee5,
    this.menuImages.coffee6,
    this.menuImages.coffee7,
    this.menuImages.coffee8
  ];

  constructor(
    private coffeeService: CoffeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.coffees = this.coffeeService.getAllCoffees();
  }

  viewDetails(coffeeId: number): void {
    this.router.navigate(['/product', coffeeId]);
  }

  // Helper method to get image path
  getImagePath(index: number): string {
    return this.coffeeImageList[index] || this.menuImages.coffee1; // default to first image if index not found
  }
}
