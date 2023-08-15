import { Injectable } from '@angular/core';
import * as string_decoder from "string_decoder";

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
