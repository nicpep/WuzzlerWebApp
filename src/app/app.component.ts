import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Wuzzler App';
    idx = 0;

    addNameField($event) {
        let element = event.target;
        this.idx++;

        // create new Input Field Item
        let newItemElement = document.createElement('div');
        newItemElement.className = 'wuzzler__item';
        newItemElement.id = 'name' + this.idx;

        let newInputElement =
            '<input class="wuzzler__item-name" type="text" placeholder="Name" /><button id="' +
            this.idx +
            '" class="minus">-</button>';

        newItemElement.innerHTML = newInputElement;

        document
            .getElementsByClassName('wuzzler__fieldname--wrapper')[0]
            .appendChild(newItemElement);

        document
            .getElementById(this.idx + '')
            .addEventListener('click', this.removeNameField);
    }
}
