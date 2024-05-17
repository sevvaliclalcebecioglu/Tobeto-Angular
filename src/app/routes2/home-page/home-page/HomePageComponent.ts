import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BasicLayoutComponent } from "../../../components/basic-layout/basic-layout.component";
import { CategoryListGroupComponent } from "../../../features/categories/components/category-list-group/categories/components/category-list-group/category-list-group/category-list-group.component";
import { CategoryListItem } from "../../../features/categories/components/category-list-group/models/category-list-item";
import { ProductCardListComponent } from "../../../features/products/components/product-card-list/product-card-list.component";


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
  selectedCategory: CategoryListItem | null = null;

  // burda her bir kategori seçtiğim zaman bana home-page de haber verecek . Bende seçilmiş kategoriye istediğim products'ı verebilirim .
  onChangeSelectCategory(event: { selectedCategory: CategoryListItem | null; }) {
    this.selectedCategory = event.selectedCategory;
  }

}
