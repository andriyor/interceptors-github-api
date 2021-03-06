import { Component, OnInit } from "@angular/core";
import { paths } from "./const";

interface pages {
  path: string;
  position: number;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.css"],
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  pages: pages[] = [];
  selected: number;

  ngOnInit(): void {
    const list = Object.keys(paths);
    for (let i = list.length; i > 0; i--) {
      let newItem: pages = { path: paths[list[i - 1]], position: i };
      this.pages.push(newItem);
    }
  }
}
