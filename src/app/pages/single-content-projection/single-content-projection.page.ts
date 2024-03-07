import { Component } from '@angular/core';
import { SingleContentProjectionComponent } from '@components/single-content-projection/single-content-projection.component';

@Component({
  selector: 'page-single-content-projection',
  standalone: true,
  imports: [SingleContentProjectionComponent],
  templateUrl: './single-content-projection.page.html',
  styleUrl: './single-content-projection.page.css',
})
export class SingleContentProjectionPage {}
