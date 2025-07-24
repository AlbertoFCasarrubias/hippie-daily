import { Component } from '@angular/core';

interface PageModel {
  category: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  pageModel: PageModel = {
    category: 'all',
  };
}
