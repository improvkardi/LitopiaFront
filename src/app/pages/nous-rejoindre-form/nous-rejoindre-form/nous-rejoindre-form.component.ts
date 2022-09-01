import {Component} from '@angular/core';
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {MinecraftApiService} from "../../../apis/minecraft-api/minecraft-api.service";
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-nous-rejoindre-form',
  templateUrl: './nous-rejoindre-form.component.html',
  styleUrls: ['./nous-rejoindre-form.component.scss']
})
export class NousRejoindreFormComponent {

  candidatureForm:FormGroup;

  constructor(public authService : AuthenticationService, private mcApiService:MinecraftApiService) {
    this.candidatureForm = new FormGroup({
      minecraftUsername: new FormControl('', [
        Validators.required, Validators.minLength(3),
        Validators.maxLength(16)
      ],[
        this.minecraftAsyncValidator()
      ]),
      candidature: new FormControl('', [Validators.required, Validators.minLength(1024), Validators.maxLength(4096)])
    });
  }

  getClassForUsername(name:string){
    return {
      backgroundImage:`url(https://mc-heads.net/head/${name}/left)`,
      backgroundPosition:'center center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
    }
  }

  hasError(controlName:string, errorName:string){
    return this.candidatureForm.controls[controlName].hasError(errorName);
  }

  minecraftAsyncValidator():AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors | null> => {
      try {
        const val = await lastValueFrom(this.mcApiService.getUUIDFomUser$Response(control.value))
        if (val){
          return null;
        }
        return {invalidMinecraftUsername:true};
      }catch (e) {
        return {invalidMinecraftUsername:true};
      }
    }
  }
}
