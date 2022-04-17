import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Events } from 'src/app/shared/entity/Event';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: []
})
export class UpdateEventComponent{
  successMsg: string;
  errMsg: string;
  updateEventForm: FormGroup;

  @Input() event: Events;
  @Input() isOpened: true;
  @Output() notify = new EventEmitter;
  
  updateEvent() {
    this.notify.emit(this.event);
    this.notify.emit(this.isOpened);
  }
}