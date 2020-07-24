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

    removeNameField($event) {
        let elementId = event.target.id;
        let remElement = document.getElementById('name' + elementId);

        remElement.parentNode.removeChild(remElement);
    }

    drawTeams() {
        let result = document.getElementById('wuzzler__result');
        let teamSize = document.getElementById('team-size').value;
        let teamNumber = document.getElementById('team-number').value;
        let namesEl = document.getElementsByClassName('wuzzler__item-name');
        let names = [];

        result.innerHTML = '';

        for (let i = 0; i < namesEl.length; i++) {
            names[i] = namesEl[i].value;
        }

        if (
            teamSize * teamNumber === names.length &&
            teamSize > 0 &&
            teamNumber > 0 &&
            names.length > 0
        ) {
            names = this.shuffle(names);

            let teams = '';
            for (let i = 1; i <= teamNumber; i++) {
                for (let j = 0; j < teamSize; j++) {
                    teams += '<li>' + names[0] + '</li>';
                    names.shift();
                }

                let listElement = '<ul id="team' + i + '" class="team__list">';

                result.innerHTML +=
                    '<div class="team"><h1>Team ' +
                    i +
                    '</h1>' +
                    listElement +
                    teams;

                result.innerHTML += '</ul></div>';
                teams = '';
            }
        } else {
            result.innerHTML = 'Ein Fehler ist aufgetreten';
        }
    }

    shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}
