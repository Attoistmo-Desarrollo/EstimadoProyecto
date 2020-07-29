import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addinsumo',
  templateUrl: './addinsumo.component.html',
  styleUrls: ['./addinsumo.component.css']
})
export class AddinsumoComponent implements OnInit {
  public filesToUpload: Array<File>;

  constructor() { }

  ngOnInit(): void {
  }
  agregar() {
    alert('se guardo el insumo');
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
    console.log(this.filesToUpload);
}

}
