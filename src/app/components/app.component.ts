import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from "@angular/material/table";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatFormField, MatInput, MatLabel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dataSource: string[] = [];
  displayedColumns: string[] = ['id', 'name'];
}
