import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введите два числа:</label>
    <input [(ngModel)]="first" (change)="calculate($event)">
    <input [(ngModel)]="second" (change)="calculate($event)">
    <h1>Сумма чисел {{first}} и {{second}} равна {{sum}}!</h1>
    <h1>Произведение чисел {{first}} и {{second}} равно {{mult}}!</h1>
    <h1>Разница чисел {{first}} и {{second}} равна {{subtr}}!</h1>`
})
export class AppComponent {
    first: number = 2
    second: number = 3
    sum: number = 8
    mult = 0
    subtr = 0
    calculate($event: any): void {
        this.sum = this.first * 1 + this.second * 1;
        this.mult = this.first * this.second;
        this.subtr = this.first - this.second;
    }
}
