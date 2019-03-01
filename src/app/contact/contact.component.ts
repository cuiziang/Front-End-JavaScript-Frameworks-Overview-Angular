import {Component , OnInit} from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';

import {Feedback , ContactType} from '../shared/feedback';
import {expand , flyInOut} from '../animations/app.animation';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'app-contact' ,
  templateUrl: './contact.component.html' ,
  styleUrls: ['./contact.component.css'] ,
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true' ,
    'style': 'display: block;'
  } ,
  animations: [
    flyInOut() ,
    expand()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  feedbackcopy: Feedback;
  errMess: string;
  contactType = ContactType;
  formErrors = {
    'firstname': '' ,
    'lastname': '' ,
    'telnum': '' ,
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.' ,
      'minlength': 'First Name must be at least 2 characters long.' ,
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    } ,
    'lastname': {
      'required': 'Last Name is required.' ,
      'minlength': 'Last Name must be at least 2 characters long.' ,
      'maxlength': 'Last Name cannot be more than 25 characters long.'
    } ,
    'telnum': {
      'required': 'Tel. number is required.' ,
      'pattern': 'Tel. number must contain only numbers.'
    } ,
    'email': {
      'required': 'Email is required.' ,
      'email': 'Email not in valid format.'
    } ,
  };
  isLoading: boolean;
  isShowingResponse: boolean;

  constructor(private feedbackService: FeedbackService , private fb: FormBuilder) {
    this.createForm();
    this.isLoading = false;
    this.isShowingResponse = false;
  }

  ngOnInit() {
  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      firstname: ['' , [Validators.required , Validators.minLength(2) , Validators.maxLength(25)]] ,
      lastname: ['' , [Validators.required , Validators.minLength(2) , Validators.maxLength(25)]] ,
      telnum: ['' , [Validators.required , Validators.pattern]] ,
      email: ['' , [Validators.required , Validators.email]] ,
      agree: false ,
      contacttype: 'None' ,
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.isLoading = true;
    this.feedback = this.feedbackForm.value;
    this.feedbackService.submitFeedback(this.feedback)
      .subscribe(feedback => {
          this.feedback = feedback;
          console.log(this.feedback);
        } ,
        errmess => {
          this.feedback = null;
          this.feedbackcopy = null;
          this.errMess = <any>errmess;
        } ,
        () => {
          this.isShowingResponse = true;
          setTimeout(() => {
              this.isShowingResponse = false;
              this.isLoading = false;
            } , 5000
          );
        })
    ;
    this.feedbackForm.reset({
      firstname: '' ,
      lastname: '' ,
      telnum: '' ,
      email: '' ,
      agree: false ,
      contacttype: 'None' ,
      message: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
