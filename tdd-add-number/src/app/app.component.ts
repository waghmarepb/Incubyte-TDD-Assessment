import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tdd-add-number';
  addNumber!: FormGroup;
  constructor() {
    this.addNumber = new FormGroup({
      inputNumber: new FormControl(''),
    });
  }

  add(numbers: string): number {
    if (numbers === '') {
      return 0
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const nums = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negatives = nums.filter(num => num < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    return nums.reduce((a, b) => a + b, 0);

  }
}
