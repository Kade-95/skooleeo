import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  list: string[] = [
    "./../../../assets/public/png/companies/paystack.png",
    "./../../../assets/public/png/companies/egyptair.png",
    "./../../../assets/public/png/companies/dangote.png",
    "./../../../assets/public/png/companies/standardbank.png",
    "./../../../assets/public/png/companies/MTN.png",
    "./../../../assets/public/png/companies/gtbank.png",
    "./../../../assets/public/png/companies/another-logo.png"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
