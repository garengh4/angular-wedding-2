import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Partner } from "src/app/shared/entity/Partner";
import { PartnerSignupService } from "./partner-signup.service";


@Component({
  selector: "partner-signup",
  templateUrl: './partner-signup.component.html'
})

export class PartnerSignupComponent implements OnInit{
  signupPartnerForm: FormGroup;
  newPartner: Partner = new Partner;
  errMsg: string;
  successMsg: string;

  constructor(
    private partnerSignupService: PartnerSignupService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createPartnerForm();
  }
  
  public createPartnerForm(): void {   // can be used for frontend validations when adding new partner?
    this.signupPartnerForm = this.fb.group({
      firstName: [this.newPartner.firstName, [Validators.required], null],
      lastName: [this.newPartner.lastName, [Validators.required], null],
      partnerEmailId: [this.newPartner.partnerEmailId, [Validators.required], null],
      password: [this.newPartner.password, [Validators.required], null]
    });
  }

  public onSignupPartner(): void {
    this.errMsg = '';
    this.successMsg = '';
    this.newPartner = this.signupPartnerForm.value as Partner; // passing values into Partner, then into service
    this.partnerSignupService.registerNewPartner(this.newPartner).subscribe({
      next: msg => {
        this.successMsg = msg;
        console.log(msg);
        this.signupPartnerForm.reset();
        // this.getAllPartner(); // updates table of partners immediately
      },
      error: msg => {
        console.log(msg);
        this.errMsg = <any> msg;
      }
    })
  }

}