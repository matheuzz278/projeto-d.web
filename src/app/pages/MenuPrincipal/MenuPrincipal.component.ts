import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "menu-principal",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./MenuPrincipal.component.html",
  styleUrls: ["./MenuPrincipal.component.css"],
})
export class MenuPrincipal {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
