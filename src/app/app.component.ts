import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Angular-proj003";
  degreesControl = new FormControl("32");
  typeControl = new FormControl("F");
  resultsControl = new FormControl("");
  results: String = "";

  constructor() {
    // Make first call with default values
    this.onClick();
  }

  onClick(): void {
    // Check if degrees is a number
    if ((this.degreesControl.value).trim().length == 0 || Number.isNaN(Number(this.degreesControl.value))) {
      window.alert('Degrees must be numeric');
      this.results = "N/A";
    }
    else {
      // Chech for onversion method
      switch (this.typeControl.value) {
           // Convert Celsius to Farenheit
          case 'C': {
          this.results = String(((9 / 5) * Number(this.degreesControl.value) + 32).toFixed(2)) + "º F";
          break;
        }
          // Convert Farenheit to Celsius
          case 'F': {
          this.results = String(((Number(this.degreesControl.value) - 32) * (5 / 9)).toFixed(2)) + "º C";
          break;
        }
        default: {
          break;
        }
      }
    }
  }
}
