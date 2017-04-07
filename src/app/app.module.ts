import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ChildComponent }   from './tree-node.component'
 
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule],
    declarations: [ AppComponent, ChildComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }