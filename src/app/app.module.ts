import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { VwWelcomeComponent } from "./views/vw-welcome/vw-welcome.component";
import { VwPersonalInfoComponent } from "./views/vw-personal-info/vw-personal-info.component";
import { VwThanksComponent } from "./views/vw-thanks/vw-thanks.component";
import { VwExamComponent } from "./views/vw-exam/vw-exam.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VwWelcomeComponent,
    VwPersonalInfoComponent,
    VwThanksComponent,
    VwExamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
