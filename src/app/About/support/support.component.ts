import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-support',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {


}
