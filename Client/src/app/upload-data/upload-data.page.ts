import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.page.html',
  styleUrls: ['./upload-data.page.scss'],
})
export class UploadDataPage implements OnInit {

  fileName:string='';
  constructor() { }

  ngOnInit() {
  }

  fileChange(e){
    console.log(e.target);
    let fullPath = e.target.value.split('\\');
    this.fileName =  fullPath[fullPath.length-1];   
  }

}
