import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: [
    './info.component.scss',
    '../../../../../shared/styles/index.scss'
  ]
})
export class InfoComponent implements OnInit {
  @Input() title = '';
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
