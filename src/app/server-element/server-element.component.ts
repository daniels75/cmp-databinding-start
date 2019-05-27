import {
  AfterContentInit, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy, AfterViewInit {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  @Input() name: string;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(' ngOnChanges called', changes)
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(`Heading value: ${this.heading.nativeElement.textContent}`);
    console.log(`Text content of paragraph: ${this.contentParagraph.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log('doCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
    console.log(`Text content of paragraph: ${this.contentParagraph.nativeElement.textContent}`);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - component destroyed')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
    console.log(`Heading value: ${this.heading.nativeElement.textContent}`);

  }

}
