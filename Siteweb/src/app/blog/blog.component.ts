import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

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
 

}
