import {Component, Input, OnInit} from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
// import { IconProp } from '@fortawesome/fontawesome-svg-core'; ??? iconName from configuration
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() cfg: any;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
  }

}
