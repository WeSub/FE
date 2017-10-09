import { Component, OnInit } from '@angular/core';
//convert to ngFOR and array
@Component({
  selector: 'app-footer',
  template: `
  <footer id="footer">
      <div id="footer-links">
        <a *ngFor="let sociallink of sociallinks" target="_blank" href="{{ sociallink }}"><i class="fab fa-{{ sociallink }}" aria-hidden="true"></i></a>
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
  sociallinks: string[];

  constructor() {
    this.cvr = 123456;
    this.sociallinks = ['twitter', 'facebook', 'instagram', 'linkedin', 'android', 'apple'];
  }


  ngOnInit() {
  }

}
