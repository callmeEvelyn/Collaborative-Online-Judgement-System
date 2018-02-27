import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import { InputService } from "./services/input.service";
import { CollaborationService } from "./services/collaboration.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditorComponent } from './components/editor/editor.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    ProfileComponent,
    EditorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  },{
    provide: "auth",
    useClass: AuthService
  },
    // AuthGuardService,
  {
      provide: "authGuard",
      useClass: AuthGuardService,
    },
    {
      provide: "collaboration",
      useClass: CollaborationService,
    },
    {
      provide: "input",
      useClass: InputService,
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
