import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'test-app';
  constructor(
    private appSettingsService: AppSettingsService
) { }

ngOnInit(){
   this.appSettingsService.getJSON().subscribe(data => {
        console.log(data);
    });
}
}
