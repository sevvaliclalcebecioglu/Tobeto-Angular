import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { BasicLayoutComponent } from "../../../components/basic-layout/basic-layout.component";
import { CategoryListGroupComponent } from "../../../features/categories/components/category-list-group/categories/components/category-list-group/category-list-group/category-list-group.component";
import { CategoryListItem } from "../../../features/categories/components/category-list-group/models/category-list-item";
import { ProductCardListComponent } from "../../../features/products/components/product-card-list/product-card-list.component";
import { error } from "console";
import { Subscription } from "rxjs";


@Component({
  selector: 'tobeto-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BasicLayoutComponent,
    CategoryListGroupComponent,
    ProductCardListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  selectedCategory: CategoryListItem | null = null;

  // burda her bir kategori seçtiğim zaman bana home-page de haber verecek . Bende seçilmiş kategoriye istediğim products'ı verebilirim .

  // query için yönlendirme yapmam lazım;
  constructor(private router:Router, private route:ActivatedRoute) {}


  ngOnInit(): void {
    this.categoryIdFromRoute()
  }

  // Şu anki route üzeinden query parametrelerini alıyor olucaz.
  // Bunları bize gözlemlenebilir bir yapıda sunuyor olacak. Parametre değiştiğinde veya başka bir şey olduğu zaman bana haber verecek.
  categoryIdFromRoute() {
     this.route.queryParams.subscribe((queryParams) => {
      console.log('queryParams: ', queryParams);

      const categoryId : number|undefined = Number(queryParams['category']);
      if (categoryId)
        this.selectedCategory = {
          id: categoryId,
          name: '',
        };
    })
    .unsubscribe();
  }

  onChangeSelectCategory(event: { selectedCategory: CategoryListItem | null; }) {
    this.selectedCategory = event.selectedCategory;
    console.log('event: ',event);

    // Eğer seçilen bir şey varsa ben bu noktada yönlendirme yapıyor olucam;

   const queryParams = {
    category: this.selectedCategory?.id || null,
   };
   this.router.navigate([],{
    queryParams,
   });
  // Artık her bir şeyi seçtiğim zaman arama kısmında query parametresi olarak gözüküyor olacak.

  }
}
