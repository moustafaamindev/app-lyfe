import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-translate';

  constructor(private translatesService: TranslateService, http: HttpClient) {
    translatesService.setDefaultLang('ar');
  }

  translate(event: any) {
    this.translatesService.use(event.target.value);
  }
}
