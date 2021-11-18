import { Directive, Input} from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: "[customMin] [NgModel]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})

export class CustomMinDirective implements Validator{

    @Input () minimo!: number;

    constructor () {}

    validate ( control: FormControl) {
        const inputValue = control.value;
        return ( inputValue < this.minimo )
                    ? { 'customMin' : true }
                    : null;
                    //si no hay ningun error de validación

        return null;
    }
}