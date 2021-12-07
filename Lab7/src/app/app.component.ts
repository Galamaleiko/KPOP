import { Component } from '@angular/core';
import { DataRequest } from './data.request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab7';
  public data: DataRequest = new DataRequest();

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegex = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;
  cityRegex = /^(?=.*?[A-Za-z])[A-Za-z+]+$/
  addressRegex = /[0-9]+\s*([a-zA-Z]+\s*[a-zA-Z]+\s)*[0-9]*/
  personRegex = /^[A-Za-z ,.'-]+$/

  orgNameError = '';
  objNameError = '';
  emailError = '';
  orgCityError = '';
  orgAddressError = '';
  personError = '';
  phoneError = '';
  objFieldError = '';


  checkData() {
    let noFails = true;
    this.orgNameError = '';
    this.objNameError = '';
    this.emailError = '';
    this.orgCityError = '';
    this.orgAddressError = '';
    this.personError = '';
    this.phoneError = '';
    this.objFieldError = '';

    if (this.data.orgName === '') {
      noFails = false;
      this.orgNameError = "Fill this form!";

    }

    if (this.data.orgCity === '') {
      noFails = false;
      this.orgCityError = "Fill this form!";

    }

    else if (!this.cityRegex.test(this.data.orgCity)) {
      noFails = false;
      this.orgCityError = "Wrong Data! Try again, please";
    }

    if (this.data.orgAddress === '') {
      noFails = false;
      this.orgAddressError = "Fill this form!";

    }
    else if (!this.addressRegex.test(this.data.orgAddress)) {
      noFails = false;
      this.orgAddressError = "Wrong Data! Try again, please";

    }

    if (this.data.person === '') {
      noFails = false;
      this.personError = "Fill this form!";

    }
    else if (!this.personRegex.test(this.data.person)) {
      noFails = false;
      this.personError = "Wrong Data! Try again, please";

    }

    if (this.data.phone === '') {
      noFails = false;
      this.phoneError = "Fill this form!";

    }
    else if (!this.phoneRegex.test(this.data.phone)) {
      noFails = false;
      this.phoneError = "Wrong Data! Try again, please!";

    }

    if (this.data.email === '') {
      noFails = false;
      this.emailError = "Fill this form!";

    }
    else if (!this.emailRegex.test(this.data.email)) {
      noFails = false;
      this.emailError = "Wrong Data! Try again, please!"
    }

    if (this.data.objName === '') {
      noFails = false
      this.objNameError = "Fill this form!";

    }

    if (noFails) {
      this.data = new DataRequest();
      alert("Successful registration!");
    }

  }

}