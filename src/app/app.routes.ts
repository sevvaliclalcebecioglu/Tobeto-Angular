import { Routes } from '@angular/router';
import { HomePageComponent } from './routes2/home-page/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',  // Mevcut route, belirtilen path ile eşleştiğinde ilgili component'i , AppComponent'ten başlayarak ilk karşılaştığı router-outlet'e yerleştirir.
    component: HomePageComponent,
  }
];
