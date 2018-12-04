
import {NgModule, OnInit, ElementRef, Directive, Renderer} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@Directive({
    selector: '[autofocus]'
})
export class AutoFocus {
    constructor(private _renderer: Renderer, private _el: ElementRef) {
    }    

    ngOnInit() {
        setTimeout(() => {
            this._renderer.invokeElementMethod(this._el.nativeElement, 'focus', []);
        }, 1);
        
        if (this._el.nativeElement.select) {
            setTimeout(() => {
                this._renderer.invokeElementMethod(this._el.nativeElement, 'select', []);
            }, 1);
        }
    }
}

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        AutoFocus
    ],
    declarations: [
        AutoFocus
    ]
})
export class Module { }
