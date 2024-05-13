import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListGroupComponent {
  categoryList : CategoryListItem[] = [
    {id: 1, name: "Dairy"},
    {id: 2, name: "Fruits"},
    {id: 3, name: "Vegetables"},
    {id: 4, name: "Meat"},
    {id: 5, name: "Fish"}
  ]; // This is a nock data //TODO: get data from backend
}
