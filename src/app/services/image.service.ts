import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly IMAGE_BASE_PATH = 'assets/coffee_image_card/';

  getImagePath(imageName: string): string {
    return `${this.IMAGE_BASE_PATH}${imageName}`;
  }

  getMenuImages(): string[] {
    return [
      this.getImagePath('coffee-1.jpg'),
      this.getImagePath('coffee-2.jpg'),
      this.getImagePath('coffee-3.jpg'),
      this.getImagePath('coffee-4.jpg'),
      this.getImagePath('coffee-5.jpg'),
      this.getImagePath('coffee-6.jpg'),
      this.getImagePath('coffee-7.jpg'),
      this.getImagePath('coffee-8.jpg')
    ];
  }

  getBannerImages(): string[] {
    return [
      this.getImagePath('banner1.jpg'),
      this.getImagePath('banner2.jpg')
    ];
  }
}
