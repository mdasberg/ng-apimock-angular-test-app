import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Example} from './example/example.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {ExampleService} from './example/example.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  bootstrap: [
    Example
  ],
  declarations: [
    Example
  ],
  providers: [
    ExampleService
  ]
})
export class TestModule {
}
