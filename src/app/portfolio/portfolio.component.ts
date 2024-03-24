import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
project: Project ={
  id: 0,
  name: 'Sampe Angular App',
  summary:"Test Description",
  description:'',
  projectlink:'',
  tags:[Tag.ANGULAR, Tag.TYPESCRIPT],
  pictures:[]

};

  constructor(private titleService: Title){
    this.titleService.setTitle('Rhoda Mumo -Portfolio')

  }
}
