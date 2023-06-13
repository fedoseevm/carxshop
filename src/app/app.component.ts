import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private location: Location) {}

  ngOnInit() {
    if (this.location.path() !== '') {
      this.location.go('');
    }
  }
}
