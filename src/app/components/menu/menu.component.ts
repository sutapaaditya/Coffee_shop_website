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
}
