import { Component, OnInit } from '@angular/core';
import { IRoom } from './services/room';
import { RoomService } from './services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  selectedRoom: IRoom;
  rooms: Array<IRoom>;

  receiveRoom(room: IRoom) {
    this.selectedRoom = room;
    this.rooms.forEach(singleRoom => {
      if (singleRoom === room) {
        singleRoom.isRoomAvailable = false;
      }
      else {
        singleRoom.isRoomAvailable = true;
      }
    });
    //this.selectedRoom.isRoomAvailable = false;
    // this.rooms = [...this.rooms,
    //   { roomNo: 300, roomCategory: 'Rest Room', isRoomAvailable: true, roomPrice: 100}
    //   ];
    this.rooms.push({ roomNo: 300, roomCategory: 'Rest Room', isRoomAvailable: true, roomPrice: 100 });
  }
  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
    this.rooms = this.roomService.getRoomList();
  }

}
