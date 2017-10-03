import { Component, OnInit } from '@angular/core';
//convert to ngFOR and array
@Component({
  selector: 'app-footer',
  template: `
  <footer id="footer">
      <div id="footer-links">
        <a target="_blank" href="{{ facebook }}"><i class="fab fa-facebook" aria-hidden="true"></i></a>
        <a target="_blank" href="{{ twitter }}"><i class="fab fa-twitter" aria-hidden="true"></i></a>
        <a target="_blank" href="{{ linkedin }}"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
        <a target="_blank" href="{{ instagram }}"><i class="fab fa-instagram" aria-hidden="true"></i></a>
      </div>
      <div id="cvr">
          <p>CVR-nr.: {{ cvr }}</p>
      </div>
  </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  cvr: number;
  facebook: string;
  linkedin: string;
  instagram: string;
  twitter: string;

  constructor() {
    this.cvr = 123456;
    this.facebook = 'facebookURL';
    this.linkedin = 'linkedinURL';
    this.instagram = 'instagramURL';
    this.twitter = 'twitterURL';
  }

  ngOnInit() {
  }

}
