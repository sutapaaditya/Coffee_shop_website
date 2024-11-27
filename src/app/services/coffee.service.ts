import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee.interface';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Classic Espresso',
      description: 'Rich and concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
      price: 3.99,
      image: 'assets/images/espresso.jpg',
      category: 'Hot Coffee'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Equal parts espresso, steamed milk, and milk foam, creating a perfectly balanced coffee drink.',
      price: 4.99,
      image: 'assets/images/cappuccino.jpg',
      category: 'Hot Coffee'
    },
    {
      id: 3,
      name: 'Iced Latte',
      description: 'Chilled espresso mixed with cold milk and served over ice for a refreshing coffee experience.',
      price: 4.49,
      image: 'assets/images/iced-latte.jpg',
      category: 'Cold Coffee'
    },
    {
      id: 4,
      name: 'Caramel Macchiato',
      description: 'Vanilla-flavored drink marked with espresso and caramel drizzle.',
      price: 5.49,
      image: 'assets/images/caramel-macchiato.jpg',
      category: 'Specialty'
    },
    {
      id: 5,
      name: 'Mocha Frappuccino',
      description: 'A delightful blend of coffee, chocolate, milk, and ice, topped with whipped cream.',
      price: 5.99,
      image: 'assets/images/mocha-frappuccino.jpg',
      category: 'Cold Coffee'
    },
    {
      id: 6,
      name: 'Turkish Coffee',
      description: 'Finely ground coffee beans simmered in a pot, served in the traditional style.',
      price: 4.99,
      image: 'assets/images/turkish-coffee.jpg',
      category: 'Hot Coffee'
    },
    {
      id: 7,
      name: 'Affogato',
      description: 'A scoop of vanilla ice cream drowned in a shot of hot espresso.',
      price: 6.49,
      image: 'assets/images/affogato.jpg',
      category: 'Specialty'
    },
    {
      id: 8,
      name: 'Cold Brew',
      description: 'Coffee grounds steeped in cold water for 12+ hours, producing a smooth, less acidic taste.',
      price: 4.99,
      image: 'assets/images/cold-brew.jpg',
      category: 'Cold Coffee'
    }
  ];

  constructor() { }

  getAllCoffees(): Coffee[] {
    return this.coffees;
  }

  getCoffeeById(id: number): Coffee | undefined {
    return this.coffees.find(coffee => coffee.id === id);
  }
}
