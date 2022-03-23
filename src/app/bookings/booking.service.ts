import { Injectable } from '@angular/core';

import { BookingModel } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings: BookingModel[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      userId: 'abc',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2
    }
  ];

  get bookings() {
    //eslint-disable-next-line no-underscore-dangle
    return [...this._bookings];
  }
}
