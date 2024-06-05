import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  @Input() active: String = "Home";
  constructor(private router: Router, private authService: AuthService) {
    
  }
  openAbout() {
    this.router.navigate(["aboutus"])
  }
  openHome() {
    this.router.navigate(['home'])
  }
  logout() {
    this.authService.logout()
  }
}