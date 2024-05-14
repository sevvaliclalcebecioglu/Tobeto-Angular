import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../../components/basic-layout/basic-layout.component';
import { CategoryListGroupComponent } from '../../../features/categories/components/category-list-group/categories/components/category-list-group/category-list-group/category-list-group.component';

@Component({
  selector: 'tobeto-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, BasicLayoutComponent, CategoryListGroupComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
