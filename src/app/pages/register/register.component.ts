import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/service/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {

  public first_name: string = "";
  public last_name: string = "";
  public email: string = "";
  public message: string = "";

  ngOnInit(): void {

  }
  constructor(
    private router: Router,
    private RegisterService: RegisterServiceService
  ){

  }

  register() {
    const firstNameInput = document.getElementById('firstName');
    if (firstNameInput) {
      const firstName = (firstNameInput as HTMLInputElement).value;
      this.first_name = firstName;
      console.log(firstName); // You can remove this line, it's just for demonstration
    }
    const lastNameInput = document.getElementById('lastName');
    if (lastNameInput) {
      const lastName = (lastNameInput as HTMLInputElement).value;
      this.last_name = lastName;
      console.log(lastName); // You can remove this line, it's just for demonstration
    }
    const emailInput = document.getElementById('email');
    if (emailInput) {
      const email = (emailInput as HTMLInputElement).value;
      this.email = email;
      console.log(email); // You can remove this line, it's just for demonstration
    }

    if (!this.first_name) {
      const alertBox = document.createElement('div');
      alertBox.innerText = "Nombre se encuentra vacio";
      alertBox.style.backgroundColor = 'white';
      alertBox.style.border = '1px solid red';
      alertBox.style.padding = '10px';
      alertBox.style.marginTop = '10px';
      alertBox.style.color = 'red';
      alertBox.style.fontWeight = 'bold';
      alertBox.style.position = 'fixed';
      alertBox.style.top = '50%';
      alertBox.style.left = '50%';
      alertBox.style.transform = 'translate(-50%, -50%)';
      alertBox.style.borderRadius = '10px';
      document.body.appendChild(alertBox);

      setTimeout(() => {
        document.body.removeChild(alertBox);
      }, 2500);

      return;
    }

    if (!this.last_name) {
      const alertBox = document.createElement('div');
      alertBox.innerText = "Apellido se encuentra vacio";
      alertBox.style.backgroundColor = 'white';
      alertBox.style.border = '1px solid red';
      alertBox.style.padding = '10px';
      alertBox.style.marginTop = '10px';
      alertBox.style.color = 'red';
      alertBox.style.fontWeight = 'bold';
      alertBox.style.position = 'fixed';
      alertBox.style.top = '50%';
      alertBox.style.left = '50%';
      alertBox.style.transform = 'translate(-50%, -50%)';
      alertBox.style.borderRadius = '10px';
      document.body.appendChild(alertBox);

      setTimeout(() => {
        document.body.removeChild(alertBox);
      }, 2500);

      return;
    }

    if (!this.email || !this.email.includes('@')) {
      const alertBox = document.createElement('div');
      alertBox.innerText = "Email no valido";
      alertBox.style.backgroundColor = 'white';
      alertBox.style.border = '1px solid red';
      alertBox.style.padding = '10px';
      alertBox.style.marginTop = '10px';
      alertBox.style.color = 'red';
      alertBox.style.fontWeight = 'bold';
      alertBox.style.position = 'fixed';
      alertBox.style.top = '50%';
      alertBox.style.left = '50%';
      alertBox.style.transform = 'translate(-50%, -50%)';
      alertBox.style.borderRadius = '10px';
      document.body.appendChild(alertBox);

      setTimeout(() => {
      document.body.removeChild(alertBox);
      }, 2500);

      return;
    }

    console.log(this.first_name, this.last_name, this.email);
    this.RegisterService.register(this.email, this.first_name, this.last_name).subscribe(
      (data) => {
        this.message = data[1];
        console.log(data);
        const alertBox = document.createElement('div');
        alertBox.innerText = "Registro exitoso";
        alertBox.style.backgroundColor = 'green';
        alertBox.style.border = '1px solid green';
        alertBox.style.padding = '10px';
        alertBox.style.marginTop = '10px';
        alertBox.style.color = 'white';
        alertBox.style.fontWeight = 'bold';
        alertBox.style.position = 'fixed';
        alertBox.style.top = '50%';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translate(-50%, -50%)';
        alertBox.style.borderRadius = '10px';
        document.body.appendChild(alertBox);

        setTimeout(() => {
        document.body.removeChild(alertBox);
        }, 5000);
      },
      (error) => {
        const alertBox = document.createElement('div');
        alertBox.innerText = "Error de registro";
        alertBox.style.backgroundColor = 'white';
        alertBox.style.border = '1px solid red';
        alertBox.style.padding = '10px';
        alertBox.style.marginTop = '10px';
        alertBox.style.color = 'red';
        alertBox.style.fontWeight = 'bold';
        alertBox.style.position = 'fixed';
        alertBox.style.top = '50%';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translate(-50%, -50%)';
        alertBox.style.borderRadius = '10px';
        document.body.appendChild(alertBox);

        setTimeout(() => {
        document.body.removeChild(alertBox);
        }, 5000);
      }
      );
  }
}

