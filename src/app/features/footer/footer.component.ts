import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  details: any = {
    products: [
      "Features",
      "Enterprice",
      "Security",
      "Trust",
      "Customer Stories",
      "Pricing",
      "Integrations",
      "Oneburner Partners"
    ],
    company: [
      "About Us",
      "Contact Us",
      "Careers",
      "In the news"
    ],
    oneburner: [
      "Engineering",
      "Financial Services",
      "CRM and Sales",
      "IT",
      "Marketing",
      "Customer Support",
      "Human Resources",
      "Project Management",
      "Remote Work",
    ],
    resources: [
      "Community",
      "Guides",
      "Templates",
      "Video Tutorials",
      "Professional Services",
      "Knowledge Base",
      "Blog",
      "Webinars",
      "Find a Partner",
    ]
  };

  languages: string[] = [
    'English',
    'Igbo',
    'Hausa',
    'Yoruba',
    'French'
  ];

  socials: string[] = [
    "./../../../assets/public/svg/social/facebook.svg",
    "./../../../assets/public/svg/social/twitter.svg",
    "./../../../assets/public/svg/social/linkedin.svg",
    "./../../../assets/public/svg/social/youtube.svg"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
