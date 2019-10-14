import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


imageUrl:string="../assets/img/";
fileToUpload:File=null;  

constructor(private service:BlogService) { }

  ngOnInit() { 
    this.service.getAllBlogs();
    this.service.blog ={
      id:0,
      images:null,
      name:null,
      publishdate:null,
      texts:null,

    }
  }
    handleFileInput(file:FileList)
    {
      var reader:any,
      target:EventTarget;
      reader= new FileReader();
       reader.onload = function (imgsrc){
      var fileUrl = imgsrc.target.result;
       }
      this.fileToUpload=file.item(0);
         reader.readAsDataURL=(event:any) =>{
        this.imageUrl+=this.fileToUpload.name;
         
      }
      reader.readAsDataURL(event);
    }
  submit(from:NgForm)
 {
   this.service.postblog().subscribe(res =>
    {
     this.service.getAllBlogs()
    },
      err =>{
        console.log("err")
      } )
 }

}
