import { Component } from '@angular/core';
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
  imports: [],
  // Import'larda Angular modüllerini bu componentte kullanmak adına modülleri sağlamış oluyoruz.

  templateUrl: './app.component.html',
   // HTML dosyası
  styleUrl: './app.component.scss',
  // CSS dosyası
})
export class AppComponent{
  // Component'in class'ıyla dinamik yapıyı,temel işlev ve kararları yapabiliriz.
  title = 'Rent A Car'; //State: Component'in sakladığı veri ve izlediği veri yapısı

  onButtonClick() {
    this.title = 'Northwind İclal'; // State'i güncelleyen fonksiyon
    console.log("Button Clicked");
  }
}
