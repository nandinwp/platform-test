import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginMessage: string = '';

  @Output() loginResult = new EventEmitter<string>();

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(username: string, password: string) {
    this.authService.login(username, password).subscribe(response => {
      this.loginResult.emit('Login bem-sucedido!');
      this.router.navigate(['/maps']);
    }, error => {
      this.loginResult.emit('Erro no login: ' + error.message);
      console.log(error.message);
    });
  }

  ngOnInit() {
  }
}
