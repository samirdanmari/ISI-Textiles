import { Component,ChangeDetectionStrategy} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatCardModule,MatChipsModule, MatProgressBarModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  longText = `Feel good, look great, and make a difference.
  Our eco-friendly dresses are made with sustainable fabrics
   and ethical practices,so you can wear your values proudly. Redefine fashion with a purpose.
   !!Flowing fabrics, intricate patterns, and a spirit of adventure—our
    boho-inspired dresses are perfect for the dreamers and the wanderers. Whether you're chasing sunsets
   or dancing under the stars, let your style tell your story.`;
}

