import 'zone.js';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <ng-template #test>
      <button>click me</button>
    </ng-template>
  `,
})
export class App implements OnInit, AfterViewInit {
ngAfterViewInit(): void {
  console.log(this.test);
}
  name = 'Angular';
  @ViewChild('test') test!: TemplateRef<any>;
  ngOnInit() {
    console.log(this.test);
  }
}

bootstrapApplication(App);
