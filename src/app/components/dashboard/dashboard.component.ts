import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() { }
  columns = [
    
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'date', header: 'Date' },
    { columnDef: 'company', header: 'Company' },
    { columnDef: 'country', header: 'Country' },
    { columnDef: 'city', header: 'City' },
    { columnDef: 'phone', header: 'Phone' },
  ]
  data: any[];
  ngOnInit() {
    // get data from API 
    this.data = [
      {
        "name": "Molly Pope",
        "date": "Jul 27, 2021",
        "company": "Faucibus Orci Institute",
        "country": "New Zealand",
        "city": "Campinas",
        "phone": "1-403-634-0276"
      },
      {
        "name": "Alfonso Vinson",
        "date": "May 11, 2021",
        "company": "Non Ante Corp.",
        "country": "United Kingdom",
        "city": "Redlands",
        "phone": "1-405-411-6336"
      },
      {
        "name": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "city": "Iguala",
        "phone": "(415) 628-6853"
      },
      {
        "name": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "city": "Manavgat",
        "phone": "1-545-823-7985"
      },
      {
        "name": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "city": "Niterói",
        "phone": "1-678-156-9674"
      },
      {
        "name": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "city": "Iguala",
        "phone": "(415) 628-6853"
      },
      {
        "name": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "city": "Manavgat",
        "phone": "1-545-823-7985"
      },
      {
        "name": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "city": "Niterói",
        "phone": "1-678-156-9674"
      }
    ];
  }

  onTableAction(event) {
    console.log('event', event)
  }
}
