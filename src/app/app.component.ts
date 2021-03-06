import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Simple Server', content: 'Server content'}
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

  onChangeFirst() {
    this.serverElements[0].name = "Name has changed"
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1)
  }
}
