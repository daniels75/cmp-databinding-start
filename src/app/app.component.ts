import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  ];

  onServerAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }
  onBlueprintAdded(serverData: {name: string, content: string}) {
     this.serverElements.push({
          type: 'blueprint',
       name: serverData.name,
       content: serverData.content
        });
  }

}
