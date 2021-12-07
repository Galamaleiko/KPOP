import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: `./child.component.html`,
    styles: [`h2, p {color:navy;}`]
})
export class ChildComponent {

    sum: number = 0;
    procText: string = "";
    @Input() price: number = 0;

    add(): void {
        this.sum = this.sum * 1 + this.price * 1;
    }
}
