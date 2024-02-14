import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule for working with native Date objects
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AboutComponent } from './components/about/about.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { TourComponent } from './components/tour/tour.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';






@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        ReservationComponent,
        AboutComponent,
        RoomsComponent,
        ServicesComponent,
        TestimonialsComponent,
        ContactComponent,
        FooterComponent,
        TourComponent,
        GalleryComponent,
        InfoComponent,
        HeaderComponent,
        MainComponent,
        MainNavComponent,
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        MatSelectModule,
        MatDatepickerModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatNativeDateModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        JsonPipe,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatGridListModule,
        MatDividerModule,
        MatProgressBarModule,
        CarouselModule.forRoot(),
        MatSidenavModule,
        MatListModule,
        LayoutModule,
        NgbCollapseModule,
        TooltipModule.forRoot()


    ]


})
export class AppModule { }
