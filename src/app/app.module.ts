import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { StatusPipe } from './pipes/status.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { TagsPipe } from './pipes/tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskItemComponent,
    StatusPipe,
    FilterPipe,
    TagsPipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
