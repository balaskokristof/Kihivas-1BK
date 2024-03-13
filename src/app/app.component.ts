import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Title } from "@angular/platform-browser";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
// ...
export class AppComponent {
  title: string = 'kihivas1';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),

    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
