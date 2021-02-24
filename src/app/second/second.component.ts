import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  growDetails: string[] = [
    "Data protection and control",
    "Reporting and analytics",
    "Use single sign-on and multi-factor authentication to secure accounts",
    "Enterprise integration with other tools"
  ];

  offices: { name: string, address: string }[] = [
    { name: 'Nigeria', address: "33a, Adeola Odeku, Victoria Island, Lagos. +234-(0)-8000000000" },
    { name: 'Ghana', address: "45, El-Senoussi Street, Accra +233-(0)-277619819" },
    { name: 'South Africa', address: "474, Cheriton Drive, Port Shepstone, Kwazulu-Natal +27-(0)-857926978" },
    { name: 'Egypt', address: "72, Gameat El-Dewal El-Arabia St., Giza. +20-(0)-35924295" },
    { name: 'Kenya', address: "41, Enterprise Rd., Industrial Area , Niarobi +254-(0)-20536766" },
    { name: 'Tunisia', address: "13, Rue de Makthar, Dhraa Governorate Kasserine +216-(0)-77367410" },
    { name: 'Mali', address: "22, Badalabougou Est., Bamako. +223-(0)-78175387" },
    { name: 'Tanzania', address: "Mbezi Beach, P.O.B: 70339, Dar Salaam +255-(0)-222120119" },
    { name: 'Togo', address: "10, E rue des Echis, Lome +228-(0)-22229600" },
  ];

  office!: { name: string, address: string } | undefined;
  officeStyle!: any;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails(event: MouseEvent) {
    const id = (event.target as HTMLElement).id;
    this.office = this.offices.find(f => f.name.toLocaleLowerCase() == id) as { name: string, address: string };    

    this.officeStyle = {
      top: `${event.clientY + 20}px`,
      left: `${event.clientX+ 20}px`,
    }
  }

  closeDetails() {
    this.office = undefined;
  }

}
