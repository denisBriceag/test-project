import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Book } from '../models/book.model';
import { MatOption, MatSelect } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  dataSource: MatTableDataSource<Book> = new MatTableDataSource();
  displayedColumns: string[] = ['title', 'author'];
}
