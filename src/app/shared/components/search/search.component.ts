import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.scss',
    '../../styles/index.scss'
  ]
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSubmit(f: NgForm) {
    this.searchEvent.emit(f.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
