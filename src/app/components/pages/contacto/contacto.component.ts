import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormGroupDirective,
    FormGroup,
    NgForm,
    Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
    selector: "app-contacto",
    templateUrl: "./contacto.component.html",
    styleUrls: ["./contacto.component.scss"],
})
export class ContactoComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            lastName: ["", [Validators.required]],
            name: ["", [Validators.required]],

            email: ["", [Validators.required, Validators.email]],
        });
    }

    // matcher = new MyErrorStateMatcher();

    // emailFormControl = new FormControl("", [
    //     Validators.required,
    //     Validators.email,
    // ]);

    ngOnInit(): void {}
}

// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//     isErrorState(
//         control: FormControl | null,
//         form: FormGroupDirective | NgForm | null
//     ): boolean {
//         const isSubmitted = form && form.submitted;
//         return !!(
//             control &&
//             control.invalid &&
//             (control.dirty || control.touched || isSubmitted)
//         );
//     }
// }
