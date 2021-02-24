import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {
  list: string[] = [
    "./../../../assets/public/png/integrations/slack.png",
    "./../../../assets/public/png/integrations/gmail.png",
    "./../../../assets/public/png/integrations/linkedin.png",
    "./../../../assets/public/png/integrations/mailchimp.png",
    "./../../../assets/public/png/integrations/dropbox.png",
    "./../../../assets/public/png/integrations/facebook.png",
    "./../../../assets/public/png/integrations/onenote.png",
    "./../../../assets/public/png/integrations/messager.png",
    "./../../../assets/public/png/integrations/whatsapp.png",
    "./../../../assets/public/png/integrations/sendgrid.png",
    "./../../../assets/public/png/integrations/github.png",
    "./../../../assets/public/png/integrations/outlook.png",
    "./../../../assets/public/png/integrations/box.png",
    "./../../../assets/public/png/integrations/onenote.png",
    "./../../../assets/public/png/integrations/teams.png",
    "./../../../assets/public/png/integrations/sharepoint.png",
    "./../../../assets/public/png/integrations/youtube.png",
    "./../../../assets/public/png/integrations/zeplin.png",
    "./../../../assets/public/png/integrations/excel.png",
    "./../../../assets/public/png/integrations/powerpoint.png",
    "./../../../assets/public/png/integrations/access.png",
    "./../../../assets/public/png/integrations/wordpress.png"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
