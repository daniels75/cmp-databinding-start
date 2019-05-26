import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  @Input() name: string;
  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(' ngOnChanges called', changes)
  }

  ngOnInit() {
    console.log('ngOnInit called')
  }

  ngDoCheck() {
    console.log('doCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - component destroyed')
  }

}
