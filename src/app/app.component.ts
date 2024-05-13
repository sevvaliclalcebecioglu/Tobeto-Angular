import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { CommonModule }


// Components: Angular tarafında görünüm ve işlev bakımından birer küçük parçacıklardır.

@Component( {
  selector: 'app-root',
  // <app-root></app-root>
  // Angular tamamen modüler bir yapıya sahip. Angular 17 ve öncesinde component'ler modüllere bağlı olarak geliyordu. Dolayısıyla modülün import edip sağladığı işlevleri kullanabiliyorlardı.
  // standalone: Angular 17 ve sonrası için varsayılan hale geldi.
   // Her component'in kendi import'ı olabilir.
     // Böylece her component kendi başına angulara dahil olabilir.
  standalone: true,
  imports: [
    CommonModule,
    RouterModule],
  // Import'larda Angular modüllerini bu componentte kullanmak adına modülleri sağlamış oluyoruz.

  templateUrl: './app.component.html',
   // HTML dosyası
  styleUrl: './app.component.scss',
  // CSS dosyası
})
export class AppComponent{
}
