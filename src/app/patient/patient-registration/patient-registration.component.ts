import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/customValidator/custom.validator.service';


@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  ischanged = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required, Validators.maxLength(20)], updateOn: "blur" }),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, CustomValidator.mobileNoValidator]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required]),
      }),
      previousHistory: this.fb.array([
        this.buildForm()
      ])
    }, { validators: [CustomValidator.validateDateRange], updateOn: 'blur' });

    //Registering to change events on Forms
    this.registrationForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.ischanged = true;
    });

    this.bindData();
  }
  //Subscribe to form changes

  bindData() {
    this.registrationForm.patchValue({
      name: 'Test Patient1',
      age: 10,
      email: 'test1@gmail.com',
      address: {
        addressLine1: 'Pune',
        addressLine2: 'Pune',
        city: 'Pune',
        pin: 411057
      },
      previousHistory: [{
        hospitalizedAt: 'Parag Hospital',
        fromDate: '12-Dec-2015',
        toDate: '15-Dec-2015',
        disease: 'Maleria'
      }]
    })
  }
  private buildForm(): any {
    return this.fb.group({
      hospitalizedAt: new FormControl('', [Validators.required]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
      disease: new FormControl('', [Validators.required]),
    });
  }

  addHistory() {
    const historyControl = this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.push(this.buildForm());
  }

  removeHistory(i: number) {
    const historyControl = this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.removeAt(i);
  }

  saveData() {
    console.log(this.registrationForm.getRawValue());
    this.registrationForm.reset({
      name: 'Test Patient1',
      age: 10,
      mobile: '0',
      email: 'test1@gmail.com',
      address: {
        addressLine1: 'Pune',
        addressLine2: 'Pune',
        city: 'Pune',
        pin: 411057
      },
      previousHistory: [{
        hospitalizedAt: 'Parag Hospital',
        fromDate: '12-Dec-2015',
        toDate: '15-Dec-2015',
        disease: 'Maleria'
      }]
    });
    this.ischanged = false;
  }
}

