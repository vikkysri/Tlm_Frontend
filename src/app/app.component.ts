import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <p>{{testTitle}}</p>
</div>`
})
export class AppComponent {
 testTitle: string = 'Test content';
}
