import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "cadastro",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Cadastro.component.html",
  styleUrls: ["./Cadastro.component.css"],
})
export class Cadastro {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onBotoDeEntrarClick() {
    this.router.navigate(["/menu-principal"]);
  }

  onBotoDeEntrarClick1() {
    this.router.navigate(["/"]);
  }
}
