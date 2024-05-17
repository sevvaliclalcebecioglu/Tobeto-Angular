import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy, Component,
  EventEmitter,
  Input, Output
} from '@angular/core';
import { CategoryListItem } from '../../../../models/category-list-item';
import { ListGroupComponent, ListGroupItem } from '../../../../../../../../components/list-group/list-group.component';

@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [CommonModule,
    ListGroupComponent
  ],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListGroupComponent {
  @Input() initialSelectedCategoryId: number | null = null;
  @Output() changeSelect = new EventEmitter<{
    selectedCategory: CategoryListItem | null;
  }>();

  categoryList : CategoryListItem[] = [
    {id: 1, name: 'Dairy'},
    {id: 2, name: 'Fruits'},
    {id: 3, name: 'Vegetables'},
    {id: 4, name: 'Meat'},
    {id: 5, name: 'Fish'},
  ];
  // This is a mock data
  // TODO: get data from backend


  get categoryListGroupItems(): ListGroupItem[] {
    // map: array içindeki her bir elemanı dönüp yeni değerlerle, yeni bir array oluşturur.
    return this.categoryList.map((category) => {
      // ListGroupItem tipinde bir obje oluşturuldu.
      const listGroupItem: ListGroupItem = {
        id: category.id.toString(),
        label: category.name,
      };

      // Yeni bir array oluşturmak adına yeni değer geri döndürüldü.
      return listGroupItem;
    });
  }

  onChangeSelect(event: { selectedItemId: string | null }) {
    const selectedCategory: CategoryListItem | null = event.selectedItemId
      ? this.categoryList.find(
          (category) => category.id === Number.parseInt(event.selectedItemId!)
        )!
      : null;
    this.changeSelect.emit({ selectedCategory });
  }
}
