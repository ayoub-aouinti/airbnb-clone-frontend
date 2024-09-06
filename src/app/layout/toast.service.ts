import { Injectable } from '@angular/core';
import { Message } from 'primeng/api'; // Correct import of Message type
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // Define the initial state as a constant
  INIT_STATE: string = 'INIT';

  // Private subject to handle the messages
  private send$ = new BehaviorSubject<Message>({ summary: this.INIT_STATE });
  
  // Public observable that components can subscribe to
  sendSub = this.send$.asObservable();

  // Method to send a new message
  public send(message: Message): void {
    this.send$.next(message);
  }
}