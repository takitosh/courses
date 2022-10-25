import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
// import { IconProp } from '@fortawesome/fontawesome-svg-core'; ??? iconName from configuration
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
    '../../styles/index.scss'
  ]
})
export class ButtonComponent implements OnInit {
  @Input() cfg: any;
  @Output() buttonClickEvent = new EventEmitter<string>();

  buttonClick(value: string) {
    this.buttonClickEvent.emit(value);
  }

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }

}
