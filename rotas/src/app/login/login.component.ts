import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public usuario: Usuario = new Usuario();
  
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
