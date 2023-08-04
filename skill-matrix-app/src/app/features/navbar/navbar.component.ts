import { Component } from '@angular/core';
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public messageService: MessageService) {
  }

}
