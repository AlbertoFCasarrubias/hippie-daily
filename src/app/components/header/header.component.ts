import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  selected = '';
  isMobileMenuOpen = false;
  private readonly routerSubscription: Subscription = new Subscription();

  constructor(private readonly router: Router) {
    this.updateSelectedFromRoute();

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedFromRoute();
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private updateSelectedFromRoute() {
    const currentRoute = this.router.url.replace(/^\//, '').replace(/^#\//, '');
    this.selected = '';

    if (
      currentRoute === 'products' ||
      currentRoute === 'events' ||
      currentRoute === 'story'
    ) {
      this.selected = currentRoute;
    }
  }

  onItemClick(selected: string) {
    this.selected = selected;
    // Close mobile menu when item is clicked
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
