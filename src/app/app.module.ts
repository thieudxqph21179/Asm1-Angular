import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HomePageComponent,
    NavComponent,
    AboutPageComponent,
    PageNotFoundComponent,
    AdminProductComponent,
    DashboardComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
