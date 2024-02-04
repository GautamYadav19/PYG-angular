import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminIndexComponent } from "./admin-index/admin-index.component";
import { ProductListComponent } from "./products/product-list/product-list.component";

const routes: Routes = [
    { path: "admin", component: AdminIndexComponent },
    { path: "admin/productlist", component: ProductListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPannelRoutingModule { }