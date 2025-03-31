import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css'
})
export class SelectButtonComponent {
  @Input() code!: string;
}
