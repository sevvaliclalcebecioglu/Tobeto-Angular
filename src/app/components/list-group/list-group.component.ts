import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Genel bir input olan state için type oluşturuldu.
export interface ListGroupItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {
 @Input() items : ListGroupItem[] = [];
 // @Input: Bu component'in kullanıldığı yerden dışardan(kullanıldığı yerden) bir değer almasını sağlar.
 // State'in değerini dışarıdan(kullanıldığı yerden) da atanabilir hale getirir.
}
