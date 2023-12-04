import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Sample data for the table
  data = [
    { id: 1, name: 'John', birthdate: '1990-05-15' },
    { id: 2, name: 'Alice', birthdate: '1985-08-20' },
    { id: 3, name: 'Bob', birthdate: '1993-03-10' },
  ];
}
