import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'jhampier';
  public nameUpper: string = 'JHAMPIER';
  public fullName: string = 'jHamPiEr tuCnO';

  public customDate: Date = new Date();

}
