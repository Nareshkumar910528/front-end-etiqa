import { Component, OnInit, HostListener } from '@angular/core';
import { Covid19StatisticsService } from 'src/app/services/Covid19StatisticsService';

@Component({
  selector: 'app-c19-world-stats',
  templateUrl: './c19-world-stats.component.html',
  styleUrls: ['./c19-world-stats.component.css']
})

export class C19WorldStatsComponent implements OnInit {
  activeCases: number;
  affectedCountries: number;
  totalCases: number;
  totalCriticalCases: number;
  totalDeath: number;
  totalWorldPopulation: number;
  totalRecovered: number;
  totalCompletedTest: number;
  overallData: any;
  countryName: any;
  selectedCountry: string;
  isCountrySelected: boolean = false;
  statisticsByCountry: Array<any> = [];
  c19Image: any;
  currentDate: any;
  countryFlag: any;
  srcWidth: any

  constructor(private covid19StatisticsService: Covid19StatisticsService) {}

  ngOnInit(): void {
    this.currentDate = new Date();
    this.getAllStats();
    this.getCountryName();
    this.c19Image = "/assets/corona-virus.png";
  }

  getAllStats() {
    this.covid19StatisticsService.getOverallData().subscribe(response => {
      this.overallData = response;
      console.log('overallData: ', this.overallData);
    }, (err) => {
      console.log('err: ', err);
    }, () => {
      this.populateAllData(this.overallData);
      console.log('<<<getAllStats completes>>>');
    });
  }

  populateAllData(data: any) {
    this.activeCases = data.active;
    this.affectedCountries = data.affectedCountries;
    this.totalCases = data.cases;
    this.totalCriticalCases = data.critical;
    this.totalDeath = data.deaths;
    this.totalWorldPopulation = data.population;
    this.totalRecovered = data.recovered;
    this.totalCompletedTest = data.tests;
  }

  getCountryName() {
    this.covid19StatisticsService.getCountryData().subscribe(response => {
      this.countryName = response.data.map((countryName: any) => countryName.name);
      console.log('countryName: ', this.countryName);
    })
  }

  onChangeCountryName(name: any) {
    this.selectedCountry = name.target.value;
    this.isCountrySelected = true;
    console.log('selectedCountry: ', this.selectedCountry);
  }

  getStatistics(country: string) {
    this.covid19StatisticsService.getDataByCountry(country).subscribe(response => {
      this.statisticsByCountry = new Array();
      this.statisticsByCountry.push(response);
      console.log('statisticsByCountry: ', this.statisticsByCountry);
      this.countryFlag = this.statisticsByCountry.map((flag) => flag.countryInfo.flag);
      console.log('countryFlag: ', this.countryFlag);
    }, (err) => {
      console.log('err: ', err);
      alert(err.error.message);
    }, () => {
      console.log('<<<getStatistics completes>>>');
    });
  }

  viewStats() {
    console.log('viewStats');
    setTimeout(() => {
      this.getStatistics(this.selectedCountry);
    }, 0);
  }

  validation() {
    if (this.isCountrySelected == true) {
      return true;
    } else {
      return false;
    }
  }
}
