import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productMenuItems: { icon: string, title: string, description: string }[] = [
    { icon: "./../../../assets/public/svg/product-menu/client.svg", title: "Clients", description: "See the amazing team that uses Oneburner." },
    { icon: "./../../../assets/public/svg/product-menu/stores.svg", title: "Oneburner Stores", description: "Explore our ready made solutions to expand your business." },
    { icon: "./../../../assets/public/svg/product-menu/integrations.svg", title: "Integrations", description: "Connect different solutions to Oneburner and get more done." },
    { icon: "./../../../assets/public/svg/product-menu/why.svg", title: "Why Oneburner?", description: "Learn more about our features, success rates, benefits and demo." }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
