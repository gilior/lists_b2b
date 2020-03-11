import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm = this.fb.group({
    name: ['a', Validators.required],
    pwd: ['a', Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login()
      .subscribe(() => {
        this.router.navigate([this.authService.redirectUrl || 'lists'])
      })
  }

}
