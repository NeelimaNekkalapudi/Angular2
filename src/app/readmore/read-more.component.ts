import { Component, Input, ElementRef, OnChanges} from '@angular/core';

@Component({
  selector: 'read-more',
  template: `
        <div [innerHTML]="currentText" [style.color]="isCollapsed?'red':'blue'"></div>
        <a [hidden]="hideToggle" (click)="toggleView()">Read {{isCollapsed? 'more':'less'}}</a>
    `
})

export class ReadMoreComponent implements OnChanges {
  @Input() text: string;
  @Input() maxLength: number;
  currentText: string;
  public hideToggle: boolean = true;

  public isCollapsed: boolean = true;

  constructor(private elementRef: ElementRef) {

  }
  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.updateView();
  }
  updateView() {
    if (this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return true;
    }
    this.hideToggle = false;
    if (this.isCollapsed == true) {
      this.currentText = this.text.substring(0, this.maxLength) + "...";
    } else if(this.isCollapsed == false)  {
      this.currentText = this.text;
    }
  }
  ngOnChanges() {
    this.updateView();
  }
}
