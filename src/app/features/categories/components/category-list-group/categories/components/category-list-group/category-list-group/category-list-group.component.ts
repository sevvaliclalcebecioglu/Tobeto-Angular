import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryListItem } from '../../../../models/category-list-item';
import { ListGroupComponent, ListGroupItem } from '../../../../../../../../components/list-group/list-group.component';




@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [
    CommonModule,
    ListGroupComponent
  ],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListGroupComponent {
  categoryList: CategoryListItem[] = [
    { id: 1, name: "Dairy" },
    { id: 2, name: "Fruits" },
    { id: 3, name: "Vegetables" },
    { id: 4, name: "Meat" },
    { id: 5, name: "Fish" }
  ];
  // This is a nock data
  // TODO: get data from backend

  // Aşağıda her bir kategori için yeni bir obje oluşturuyoruz.

  // map: array içindeki her bir elemanı dönüp yeni değerlerle, yeni bir array oluşturur.

  get categoryListGroupItems(): ListGroupItem[] {
    return this.categoryList.map((category) => {


      const ListGroupItem: ListGroupItem = {
       // ListGroupItem tipinde bir obje oluşturuldu.
        id: category.id.toString(),
        label: category.name,
      };
      // Yeni bir array oluşturmak adına yeni değer geri döndürüldü.
      return ListGroupItem;
    });
  }
  // Döndüğümüz objelerden sonra yeni bir array oluşmuş oldu.

}
