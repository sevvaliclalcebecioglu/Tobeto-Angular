import { Routes } from '@angular/router';
import { HomePageComponent } from './routes2/home-page/home-page/home-page.component';
import { authRoutes } from './routes2/home-page/auth/login-page/auth.routes';


export const routes : Routes = [
  {
    path: '',  // Mevcut route, belirtilen path ile eşleştiğinde ilgili component'i , AppComponent'ten başlayarak ilk karşılaştığı router-outlet'e yerleştirir.
    component: HomePageComponent,
  },
  ...authRoutes,

   // ... spread operatörü ile authRoutes array'ini routes array'ine ekliyoruz.


];


