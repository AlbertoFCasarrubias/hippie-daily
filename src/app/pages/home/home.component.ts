import { Component } from '@angular/core';

interface PageModel {
  category: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pageModel: PageModel = {
    category: 'all',
  };
}
