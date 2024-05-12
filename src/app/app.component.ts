import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
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
    NavbarComponent,
    FooterComponent
  ],
  // Import'larda Angular modüllerini bu componentte kullanmak adına modülleri sağlamış oluyoruz.

  templateUrl: './app.component.html',
   // HTML dosyası
  styleUrl: './app.component.scss',
  // CSS dosyası
})
export class AppComponent{
  // Component'in class'ıyla dinamik yapıyı,temel işlev ve kararları yapabiliriz.
  readonly title : string = 'Northwind'; //State: Component'in sakladığı veri ve izlediği veri yapısı
  counter : number = 0;

  onButtonClick() {
    this.counter += 1; // State'i güncelleyen fonksiyon
    console.log("Button Clicked");
  }
}
