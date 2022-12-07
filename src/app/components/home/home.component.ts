import { Component, ViewChild } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/types/Country';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  countries: Country[] = [];
  country: Country | undefined;
  displayedColumns: string[] = ['flag', 'name', 'capital', 'region', 'population', 'area'];
  dataSource: MatTableDataSource<Country> = new MatTableDataSource<Country>(this.countries);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(private countriesService: CountriesService) {
      this.getCountries();
    }

    ngAfterViewInit() {
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    async getCountries(){
      this.countries = await this.countriesService.getAllCountries() as Country[];
      this.dataSource = new MatTableDataSource(this.countries);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

}
