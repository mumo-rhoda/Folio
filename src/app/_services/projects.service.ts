import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project []= [
    {
    id: 0,name: 'Sampe Angular App',  summary:"Test Angular Description",  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. At varius vel pharetra vel. In ornare quam viverra orci sagittis eu volutpat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pretium aenean pharetra magna ac. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Congue nisi vitae suscipit tellus mauris a diam maecenas. Id aliquet lectus proin nibh.',  projectlink:'https://github.com/mumo-rhoda',  tags:[Tag.ANGULAR, Tag.TYPESCRIPT],  pictures:[],},
    {id: 1,name: 'Sampe Mulesoft Project',  summary:"Test Mulesoft  Description",  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. At varius vel pharetra vel. In ornare quam viverra orci sagittis eu volutpat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pretium aenean pharetra magna ac. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Congue nisi vitae suscipit tellus mauris a diam maecenas. Id aliquet lectus proin nibh.',  projectlink:'https://github.com/mumo-rhoda',  tags:[Tag.MULESOFT, Tag.JAVA],  pictures:[],},
    {id: 2,name: 'Sampe Cybersecurity Project',  summary:"Test Cybersecurity Description",  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. At varius vel pharetra vel. In ornare quam viverra orci sagittis eu volutpat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pretium aenean pharetra magna ac. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Congue nisi vitae suscipit tellus mauris a diam maecenas. Id aliquet lectus proin nibh.',  projectlink:'https://github.com/mumo-rhoda',  tags:[Tag.CYBERSECURITY, Tag.TYPESCRIPT],  pictures:[],},
    {id: 3,name: 'Sampe Java App',  summary:"Test Java Description",  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. At varius vel pharetra vel. In ornare quam viverra orci sagittis eu volutpat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pretium aenean pharetra magna ac. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Congue nisi vitae suscipit tellus mauris a diam maecenas. Id aliquet lectus proin nibh.',  projectlink:'https://github.com/mumo-rhoda',  tags:[Tag.JAVA, Tag.TYPESCRIPT],  pictures:[],},
    {id: 4,name: 'Sampe Selenium Tests',  summary:"Test Selenium Description",  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. At varius vel pharetra vel. In ornare quam viverra orci sagittis eu volutpat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pretium aenean pharetra magna ac. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Congue nisi vitae suscipit tellus mauris a diam maecenas. Id aliquet lectus proin nibh.',  projectlink:'https://github.com/mumo-rhoda',  tags:[Tag.SELENIUM, Tag.JAVA],  pictures:[],},
    {id: 5,name: 'Sampe Backend Project',  summary:"Test Backed service Description",  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. At varius vel pharetra vel. In ornare quam viverra orci sagittis eu volutpat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pretium aenean pharetra magna ac. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Congue nisi vitae suscipit tellus mauris a diam maecenas. Id aliquet lectus proin nibh.',  projectlink:'https://github.com/mumo-rhoda',  tags:[Tag.SPRINGBOOT, Tag.JAVA],  pictures:[],},
  
  
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }
  GetProjectById(id:number) : Project{
   
    let project = this.projects.find(project => project.id === id);
    if(project === undefined){
      throw new TypeError('There is no project that matches the id:'+ id);
    }
    return project;
  }
  
}
