import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {

  router=inject(Router)
  onLogoff(){
    this.router.navigate(['/login'])

  }

}
