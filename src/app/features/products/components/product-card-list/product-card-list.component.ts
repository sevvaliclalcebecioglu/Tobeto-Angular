import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductListItem } from '../../models/product-list-item';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardListComponent {
  productList: ProductListItem[] = [
    {
      id: 1,
      name: 'Cheese',
      categoryId: 1,
      price: 100,
      description: 'This is a cheese',
      imageUrl: 'https://picsum.photos/500',
    },
    {
      id: 2,
      name: 'Milk',
      categoryId: 1,
      price: 50,
      description: 'This is a milk',
      imageUrl: 'https://picsum.photos/500',
    },
    {
      id: 3,
      name: 'Banana',
      categoryId: 2,
      price: 10,
      description: 'This is a banana',
      imageUrl: 'https://picsum.photos/500',
    },
    {
      id: 4,
      name: 'Tomato',
      categoryId: 3,
      price: 20,
      description: 'This is a tomato',
      imageUrl: 'https://picsum.photos/500',
    },
    {
      id: 5,
      name: 'Potato',
      categoryId: 3,
      price: 15,
      description: 'This is a potato',
      imageUrl: 'https://picsum.photos/500',
    },
    {
      id: 6,
      name: 'Steak',
      categoryId: 4,
      price: 300,
      description: 'This is a Steak',
      imageUrl: 'https://picsum.photos/500',
    },
    {
      id: 7,
      name: 'Hamsi',
      categoryId: 5,
      price: 150,
      description: 'This is a Hamsi',
      imageUrl: 'https://picsum.photos/500',
    },
  ];

    // Mock data
    // TODO: Get from backend
}
