import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  name: string = 'Nothing';

  constructor(private app: AppService) {}

  ngOnInit(): void {
    let subscription = this.app.hello();
    subscription.subscribe((data) => {
      this.name = data;
    });
  }
}
