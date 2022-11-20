import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-writer',
  templateUrl: './type-writer.component.html',
  styleUrls: ['./type-writer.component.css']
})
export class TypeWriterComponent implements OnInit {
  text1:String;
  constructor() { }

  ngOnInit(): void {
    
  }

}
