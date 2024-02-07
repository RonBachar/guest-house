import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  title: string = 'Our Luxury Rooms';
  subtitle: string = 'Experience Comfort and Style';
  rooms: any[] = [
    {
      name: 'יער',
      description: 'חוויה מפנקת בחדר דלוקס סוויט, החדר מציע אירוח מרווח ונעים עם נוף מרהיב של הסביבה הטבעית. בפנים תמצאו רהיטים מודרניים ונוחים, מיטה גדולה ומרווחת, ומרפסת פרטית להנאתכם.',
      price: '₪850 / לילה',
      image: '../../../assets/rain1.jpg'
    },
    {
      name: 'גשם',
      description: 'הפנינה המושלמת שלנו, חוויה ברמה גבוהה עם נכס משובח. סוויט פרימיום מציע אירוח יוקרתי עם נגיעות מעצבי הפנים הטובים ביותר. החדר מעוצב בסגנון אלגנטי ומפואר, כולל סלון פרטי, מטבחון מאובזר ומרפסת גדולה עם נוף מרהיב.',
      price: '₪850 / לילה',
      image: '../../../assets/forest1.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
