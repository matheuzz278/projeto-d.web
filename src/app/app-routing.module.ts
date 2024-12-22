import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Login } from "./pages/Login/Login.component";
import { MenuPrincipal } from "./pages/MenuPrincipal/MenuPrincipal.component";
import { Cadastro } from "./pages/Cadastro/Cadastro.component";
const routes: Routes = [
  {
    path: "",
    component: Login,
  },
  {
    path: "menu-principal",
    component: MenuPrincipal,
  },
  {
    path: "cadastro",
    component: Cadastro,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
