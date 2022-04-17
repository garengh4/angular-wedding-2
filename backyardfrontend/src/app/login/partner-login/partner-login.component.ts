import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Partner } from "src/app/shared/entity/Partner";
import { PartnerLoginService } from "./partner-login.service";


@Component({
  selector: "partner-login",
  templateUrl: './partner-login.component.html'
})

export class PartnerLoginComponent implements OnInit {
  errMsg: string;
  successMsg: string;

  constructor(
    private partnerLoginService: PartnerLoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginPartner = new Partner();
    this.createLoginForm();
  }

  loginPartner: Partner = new Partner;
  tryToLogin: boolean = false;
  loginPartnerForm: FormGroup;

  public createLoginForm(): void {
    this.loginPartnerForm = this.fb.group({
      partnerId: [this.loginPartner.partnerId, [Validators.required], null],
      firstName: [this.loginPartner.firstName, [Validators.required], null],
      lastName: [this.loginPartner.lastName, [Validators.required], null]
    })
  }

  public onLoginPartner(): void {
    this.tryToLogin = true;
    this.errMsg = '';
    this.successMsg = '';
    this.loginPartner = this.loginPartnerForm.value as Partner;

    this.partnerLoginService.login(this.loginPartner).subscribe({
      next: response => {
        this.loginPartner = response;

        sessionStorage.setItem('loggedInPartner', JSON.stringify(this.loginPartner)); //some bug here in name towards 'loggedInPartner'

        console.log(this.loginPartner);
        
        this.tryToLogin = false;
        this.router.navigate(['/partner-dashboard']);
      }, error: response => {
        this.tryToLogin = false;
        this.errMsg = response;
      }
    })
  }
}