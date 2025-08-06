import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';

// adding 'type' here is not necessary but preferable
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex]; // default syntax without signal
  // selectedUser = signal(DUMMY_USERS[randomIndex]); // defining signal
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // when selectedUser signal changes

  // Using decorator inputs
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selectedUser!: boolean;

  // Using signal inputs
  // avatar = input.required<string>();
  // name = input.required<string>();

  // Using decorator output
  @Output() select = new EventEmitter<string>();

  // Using another modern alternative way to define an output or EventEmitter, but it is not a signal!
  // select = output<string>();

  // getting imagePath by computing signal input
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // getter method => default syntax without signals
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // getter method => using decorator inputs
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Simple change detection mechanism => zone.js
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   selectedUser = DUMMY_USERS[randomIndex];
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);

    this.select.emit(this.user.id);
  }
}
