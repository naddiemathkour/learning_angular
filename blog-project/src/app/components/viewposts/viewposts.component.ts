import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { IBlogPost } from 'src/app/interfaces/blogpost.interface';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.scss'],
})
export class ViewpostsComponent implements OnInit {
  posts: Observable<IBlogPost[]> = new Observable<IBlogPost[]>();

  async ngOnInit() {
    this.posts = of(JSON.parse(localStorage.getItem('posts') || '[]'));
  }

  filterSearch(event: any) {
    this.posts = this.posts.pipe(
      map((postArray) =>
        postArray.filter((post) => post.user.includes(event.target.value))
      )
    );
  }
}
