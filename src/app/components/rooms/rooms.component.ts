import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  rooms: any[] = [
    {
      title: 'סוויטת יער',
      imageUrl: '../../../assets/forest4.jpg',
      description: 'חוויה מפנקת בחדר דלוקס סוויט, החדר מציע אירוח מרווח ונעים עם נוף מרהיב של הסביבה הטבעית. בפנים תמצאו רהיטים מודרניים ונוחים, מיטה גדולה ומרווחת, ומרפסת פרטית להנאתכם.',
    },
    {
      title: 'סוויטת גשם',
      imageUrl: '../../../assets/rain3.jpg',
      description: ' וויה ברמה גבוהה עם נכס משובח. סוויט פרימיום מציע אירוח יוקרתי עם נגיעות מעצבי הפנים הטובים ביותר. החדר מעוצב בסגנון אלגנטי ומפואר, כולל סלון פרטי ומרפסת גדולה עם נוף מרהיב.',
    },

  ];



  constructor() { }

  ngOnInit(): void {
  }
}
