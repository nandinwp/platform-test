import { Component, OnInit } from '@angular/core';
import { AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

   constructor(private authService: AuthService) { }

  onSubmit(username: string, password: string) {
    this.authService.login(username, password).subscribe(response => {
        console.log('Login bem-sucedido:', response);
    }, error => {
        console.error('Erro no login:', error);
    });
  }
  ngOnInit() {
  }

}
