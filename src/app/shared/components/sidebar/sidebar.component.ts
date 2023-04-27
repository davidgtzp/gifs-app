import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 // el servicio sea privado
  constructor( private GifsService: GifsService) {  }

  get tags(): string[] {
     return this.GifsService.tagsHistory;
     //console.log(this.GifsService.tagsHistory);
  }

  searchTag( tag: string): void {

    this.GifsService.searchTag(tag);

  }

}
