import { Component } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


import {FormsModule} from '@angular/forms';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSlideToggleModule,FormsModule, MatFormFieldModule, MatInputModule,MatGridListModule,MatButtonModule,HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
