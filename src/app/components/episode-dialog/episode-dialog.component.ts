import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EpisodeInfo } from '../../models/episodeInfo';

@Component({
  selector: 'app-episode-dialog',
  templateUrl: './episode-dialog.component.html',
  styleUrls: ['./episode-dialog.component.scss'],
})
export class EpisodeDialogComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() episodeInfo: EpisodeInfo;
  @Output() dialogClosing = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public action() {
    console.log('closing dialog');
    this.isOpen = !this.isOpen;
    this.dialogClosing.emit(this.isOpen);
  }
}
