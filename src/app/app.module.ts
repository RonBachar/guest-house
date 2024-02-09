import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarouselModule } from './components/carousel/carousel.module';

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
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import {MatGridListModule} from '@angular/material/grid-list';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomepageComponent,
        ReservationComponent,
        AboutComponent,
        RoomsComponent,
        ServicesComponent,
        TestimonialsComponent,
        GalleryComponent,
        ContactComponent,
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
        MatFormFieldModule, FormsModule, ReactiveFormsModule, JsonPipe,
        MatButtonModule, MatTooltipModule, MatIconModule, MatToolbarModule,
        MatMenuModule,
        MatGridListModule

    ]


})
export class AppModule { }
