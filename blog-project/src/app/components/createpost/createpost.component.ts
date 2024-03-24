import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent {
  anon: boolean = true;
  blogForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.blogForm = this._formBuilder.group({
      user: [null],
      topic: [''],
      body: [''],
    });
  }

  flipAnon() {
    this.anon = !this.anon;
    !this.anon
      ? this.blogForm.get('user')?.clearValidators()
      : this.blogForm.get('user')?.setValidators([Validators.required]);
    this.blogForm.get('user')?.updateValueAndValidity();
  }

  onSave() {
    //save blog data
    if (!this.anon) this.blogForm.value['user'] = 'Posted Anonymously';
    let posts: any[] = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(this.blogForm.value);
    localStorage.setItem('posts', JSON.stringify(posts));
    this.blogForm.reset();
  }

  onCancel() {
    this.blogForm.reset();
  }
}
