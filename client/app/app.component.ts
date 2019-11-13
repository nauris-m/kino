import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  menuActive: boolean;

  constructor(public auth: AuthService, private changeDetector: ChangeDetectorRef, private userService: UserService, private messageService: MessageService) {
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  onMenuButtonClick(event: Event) {
    this.menuActive = !this.menuActive;
    event.preventDefault();
  }

  onMaskClick(event: Event) {
    this.menuActive = false;
    event.preventDefault();
  }

  hideMenu() {
    this.menuActive = false;
  }

  showToast(caption: string, msg: string) {
    this.messageService.add({severity: 'success', summary: caption, detail: msg});
  }
}
