import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminIndexComponent } from "./admin-index/admin-index.component";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ContentIndexComponent } from "./content/content-index/content-index.component";
import { ProductListDasboardComponent } from "./products/product-list-dasboard/product-list-dasboard.component";
import { ProductListTableComponent } from "./products/product-list-table/product-list-table.component";
import { ProductListComponent } from "./products/product-list/product-list.component";

@NgModule({
    declarations:[
        AdminIndexComponent,
        ProductListComponent,
        ProductListDasboardComponent,
        ProductListTableComponent,
        AdminNavbarComponent,
    ContentIndexComponent,

        
    ],
    imports:[BrowserModule,RouterModule,CommonModule],
    
})
export class AdminModule{}