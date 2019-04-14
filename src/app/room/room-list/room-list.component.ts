import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { IRoom } from '../services/room'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges {

  @Input() roomsList: Array<IRoom> = [];
  @Output() selectedRoom = new EventEmitter<IRoom>();
  constructor() { }

  ngOnInit() {
  }

  sendSelectedRoom(room: IRoom): void {
    //console.log(room);
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Below logged due to onChanges event on room-list component');
    console.log(changes);
  }
}
