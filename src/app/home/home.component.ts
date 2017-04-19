import {Component} from '@angular/core';
import { ReadMoreComponent } from 'readmore/read-more.component'

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public details:string = 'An application will always have a root component that contains all other components.12345';
}
