import { AbstractControl, ValidationErrors } from '@angular/forms';
export class SpaceValidator {
  static validateSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { validateSpace: true }
    }
  return null;
}
}
