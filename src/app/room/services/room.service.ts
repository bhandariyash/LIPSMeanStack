import { Injectable } from '@angular/core';
import { IRoom } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomList: Array<IRoom>;
  constructor() { }

  getRoomList(): Array<IRoom> {
    return this.roomList = [
      { roomNo: 100, roomCategory: 'Economical', isRoomAvailable: true, roomPrice: 1000 },
      { roomNo: 101, roomCategory: 'Deluxe', isRoomAvailable: true, roomPrice: 1500 },
      { roomNo: 102, roomCategory: 'Economical', isRoomAvailable: true, roomPrice: 1000 },
      { roomNo: 103, roomCategory: 'Deluxe', isRoomAvailable: true, roomPrice: 1500 },
      { roomNo: 200, roomCategory: 'Economical', isRoomAvailable: true, roomPrice: 1000 },
      { roomNo: 201, roomCategory: 'Deluxe', isRoomAvailable: true, roomPrice: 1500 },
      { roomNo: 202, roomCategory: 'Executive', isRoomAvailable: true, roomPrice: 2000 },
    ];
  }

}
