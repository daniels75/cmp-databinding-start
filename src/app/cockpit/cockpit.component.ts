import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated  = new EventEmitter<{name: string, content: string}>();

  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContent:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName.value);
    console.log(this.serverContent);
    this.serverCreated.emit({name: serverName.value, content: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({name: serverName.value, content: this.serverContent.nativeElement.value});
  }
}
