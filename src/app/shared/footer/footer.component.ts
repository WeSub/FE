import { Component, OnInit, HostBinding } from '@angular/core';
//convert to ngFOR and array
@Component({
  selector: 'app-footer',
  template: `
    <div class="ui center aligned fluid container">
      <div class="ui stackable inverted divided grid">
        <div class="seven wide column">
          <h6 class="ui inverted header">Follow us to hear about the latest services added!</h6>
          <div class="ui inverted horizontal link list">
            <a class="item social" href="#{{ link }}" target="_blank" *ngFor="let link of socialLinks">
                <i class="icon big {{ link }}" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="two wide column">
          <div class="ui inverted link list">
              <a class="item" href="#{{ item.link }}" target="_blank" *ngFor="let item of middleLinks">
                  {{ item.name }}
              </a>
          </div>
        </div>
        <div class="seven wide column">
          <h6 class="ui inverted header">WeSub will be global</h6>
          <p>We're not available outside of Denmark yet, but keep checking back and:<br>
          <button class="ui tiny button pink inverted-link" href="">Tell us where you want to see WeSub next!</button></p>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <div class="ui horizontal inverted divided link list">
        <a class="item" href="{{ item.link }}" *ngFor="let item of bottomLinks">{{ item.name }}</a>
        <div id="cvr">
            CVR: {{ cvr }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  @HostBinding('attr.class') class = 'ui inverted vertical footer mini segment';
  @HostBinding('attr.id') id = 'footer';
  socialLinks: string[];
  middleLinks: Object[];
  bottomLinks: Object[];
  cvr: number;

  constructor() {
    this.cvr = 123456;
    this.socialLinks = ['twitter', 'facebook', 'instagram', 'linkedin', 'android', 'apple'];
    this.middleLinks = [
      { name: 'Investor Relations', link: '#investors' },
      { name: 'Careers', link: '#careers' },
      { name: 'Cookie Policy', link: '#cookies' }
    ];
    this.bottomLinks = [
      { name: 'Site Map', link: '#sitemap' },
      { name: 'Contact Us', link: '#contact' },
      { name: 'Terms and Conditions', link: '#terms' },
      { name: 'Privacy Policy', link: '#privacypolicy' }
    ];
  }


  ngOnInit() {
  }

}
