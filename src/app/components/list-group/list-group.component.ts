import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

// Genel bir input olan state için type oluşturuldu.
export interface ListGroupItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent implements OnInit {
  @Input() initialSelectedItemId: string | null = null;
  @Input() items: ListGroupItem[] = []; // <app-list-group [items]="categoryListGroupItems"></app-list-group>
  // @Input: Bu component'in dışarıdan (kullanıldığı yerden) bir değer almasını sağlar.
  // State'in değerini dışarıdan (kullanıldığı yerden) da atanabilir hale getirir.

  @Output() changeSelect = new EventEmitter<{
    selectedItemId: string | null;
  }>(); // <app-list-group (changeSelect)="onListGroupItemClick($event)"></app-list-group>
  // @Output: Bu component'ten dışarıya bir değer gönderilmesini sağlar.
  // EventEmitter: Bu component'ten dışarıya bir değer gönderilmesini sağlar.
  // Component'in kullanıldığı yerde bu event'i dinleyen bir metot olabilir.

  selectedItemId: string | null = null;

  ngOnInit(): void {
    if (this.initialSelectedItemId)
      this.selectedItemId = this.initialSelectedItemId;
  }

  onListGroupItemClick(item: ListGroupItem) {
    this.selectedItemId = this.selectedItemId !== item.id ? item.id : null;
    this.changeSelect.emit({ selectedItemId: this.selectedItemId });
  }

  isSelectedItem(itemId: string): boolean {
    return this.selectedItemId === itemId;
  }
}
