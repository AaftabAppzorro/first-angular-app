import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DatePipe } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations:[AppComponent, HeaderComponent, UserComponent],
    imports:[BrowserModule, FormsModule, DatePipe, SharedModule, TasksModule],
    bootstrap:[AppComponent]
})

export class AppModule {

}