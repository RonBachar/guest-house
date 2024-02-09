import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'אינטרנט',
      description: 'חיבור אינטרנט עבור המתארחים',
      image: '../../../assets/services/wifi.png'
    },
    {
      title: 'ג`קוזי זרמים זוגי',
      description: `בכל סוויטה קיים ג'קוזי רומנטי מפנק`,
      image: '../../../assets/services/tub.png'
    },
    {
      title: 'מטבחון מאובזר',
      description: 'פינת קפה, כיריים, קומקום חשמלי, מקרר, מיקרוגל, כלי הגשה, סירים, מחבתות.',
      image: '../../../assets/services/kitchen.png'
    },
    {
      title: 'חצר גדולה',
      description: 'ערסלים, מדשאה, מנגל, פינת ישיבה, נדנדה, שמשיות, עצים, פרחי נוי.',
      image: '../../../assets/services/yard.png'
    },
    {
      title: 'חוגגים לבן/בת הזוג',
      description: 'סידור הצימר לימי הולדת, הצעות נישואין ושאר אירועים מיוחדים',
      image: '../../../assets/services/champagne.png'
    },
    {
      title: 'טיפולים ועיסויים',
      description: 'בהזמנה מוקדמת ניתן להזמין טיפול זוגי מפנק ',
      image: '../../../assets/services/massage.png'
    }
  ];




  constructor() { }
}
