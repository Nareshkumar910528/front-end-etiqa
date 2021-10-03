import { Component, Input, OnInit } from '@angular/core';
import { Covid19StatisticsService } from 'src/app/services/Covid19StatisticsService';

@Component({
    selector: 'app-c19-country-stats',
    templateUrl: './c19-country-stats.component.html',
    styleUrls: ['./c19-country-stats.component.css']
})

export class C19CountryStatsComponent implements OnInit {

    @Input('country-stats') countryStats: any
    @Input('country-flag') countryFlag: any

    constructor(private covid19StatisticsService: Covid19StatisticsService) { }

    ngOnInit() {
        console.log('countryStats: ', this.countryStats);
        console.log('countryFlag: ', this.countryFlag);
    }
}