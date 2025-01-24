import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../models/coffee.interface';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  coffee?: Coffee;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coffeeService: CoffeeService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.coffee = this.coffeeService.getCoffeeById(id);

    if (!this.coffee) {
      this.router.navigate(['/menu']);
    }
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  placeOrder(): void {
    if (this.coffee) {
      const total = this.coffee.price * this.quantity;
      alert(`Order placed successfully!\nTotal amount: $${total.toFixed(2)}`);
      this.router.navigate(['/menu']);
    }
  }
}
