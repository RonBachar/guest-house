// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material imports
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Angular CDK imports
import { LayoutModule } from '@angular/cdk/layout';

// App component imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { TourComponent } from './components/tour/tour.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';




@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent,
        AboutComponent,
        InfoComponent,
        RoomsComponent,
        ServicesComponent,
        GalleryComponent,
        TourComponent,
        FooterComponent,
        MainNavComponent,
        ContactComponent
        
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatListModule,
        LayoutModule,


    ]


})
export class AppModule { }
