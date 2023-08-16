import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent {
  constructor(
    public translateService: TranslateService,
    private messageService: MessageService,
  ) {
    translateService.addLangs(['en', 'pl']);
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  setLanguage(value: string): void {
    this.translateService.use(value);
    this.messageService.add(
      this.translateService.instant('messages.language.pick') + value,
    );
  }
}
