import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringTransformationService {

  constructor() { }

  toUpperCase(message: string): string {
    return message.toUpperCase();
  }

  toLowerCase(message: string): string {
    return message.toLowerCase();
  }
}
