import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
const routes: Routes = [
  // { path: "", component: HomePageComponent },
  // { path: "products", component: ProductsListComponent }
  {path:"",component:BaseLayoutComponent,children:[
    {path:"",component:HomePageComponent},
    {path:"about",component:AboutPageComponent},
    {path:"products",component:ProductsListComponent},
    {path:"products/:id",component:ProductDetailComponent}
   
  ]},
  {path:"admin",component:AdminLayoutComponent,children:[
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    {path:"dashboard",component:DashboardComponent},
    {path:"products",component:ProductsListComponent},
    { path: "products/add", component: ProductAddComponent },
    { path: "products/:id/edit", component: ProductEditComponent }
  ]},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
