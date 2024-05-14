import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../../components/basic-layout/basic-layout.component';
import { CategoryListGroupComponent } from '../../../features/categories/components/category-list-group/categories/components/category-list-group/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../../features/products/components/product-card-list/product-card-list.component';

@Component({
  selector: 'tobeto-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BasicLayoutComponent,
    CategoryListGroupComponent,
    ProductCardListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
