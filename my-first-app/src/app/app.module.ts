import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { CopyrightInformationComponent } from './copyright-information/copyright-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    SideNavigationComponent,
    MainBodyComponent,
    CopyrightInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
