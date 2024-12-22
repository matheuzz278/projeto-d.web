import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "login",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Login.component.html",
  styleUrls: ["./Login.component.css"],
})
export class Login {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onBotoDeEntrarClick() {
    this.router.navigate(["/menu-principal"]);
  }

  onCreatecontaTextClick() {
    this.router.navigate(["/cadastro"]);
  }
}
