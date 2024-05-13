import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
//import { CommonModule }


// Components: Angular tarafında görünüm ve işlev bakımından birer küçük parçacıklardır.

@Component( {
  selector: 'app-basic-examples',
  // <app-basic-examples></app-basic-examples>
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

  products :{name: string, price : number, discontinued : boolean}[] = [
    {name: "Çay", price: 100, discontinued: false},
    {name: "Kahve", price: 200, discontinued: true},
    {name: "Su", price: 300, discontinued: false},
    {name: "Çikolata", price: 10, discontinued: true},
    {name: "Kek", price: 150, discontinued: false},
    {name: "Bisküvi", price: 75, discontinued: true}
  ];

  get filteredProducts() {
    return this.products.filter((p) => !p.discontinued);
  }

  onButtonClick() {
    this.counter += 1; // State'i güncelleyen fonksiyon
    console.log("Button Clicked");
  }
}
