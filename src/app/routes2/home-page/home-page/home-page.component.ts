import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../../components/basic-layout/basic-layout.component';

@Component({
  selector: 'tobeto-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, BasicLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
