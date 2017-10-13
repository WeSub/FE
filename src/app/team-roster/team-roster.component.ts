import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-roster',
  template: `
  <div class="ui massive relaxed middle aligned animated list">
      <div class="item" *ngFor="let member of team">
        <img class="ui avatar image" src="{{ member.avatar }}">
        <div class="content">
          <a class="header">{{ member.name }}</a>
          {{ member.email }} || 
          <a href="https://www.linkedin.com/in/{{ member.linkedin }}" target="_blank"><i class="linkedin icon"></i></a>
          <div class="description">{{ member.message }}</div>
        </div>
      </div>
  </div>
  `,
  styleUrls: ['./team-roster.component.scss']
})
export class TeamRosterComponent implements OnInit {
    team: Object[];

  constructor() {
      this.team = [
          {name: 'Benjamin', avatar: '../assets/images/avatars/benjamin.png', email: 'email@email.com', message: 'Show some personality here.', linkedin: 'benjamin-rej-notlev-5844618a'},
          {name:'Nikol', avatar: '../assets/images/avatars/nikol.png', email: 'email@email.com', message: 'Show some personality here.', linkedin: 'nikol-murtingerová-83261891'},
          {name:'Stephen', avatar: '../assets/images/avatars/stephen.png', email: 'stephen@codehammer.design', message: 'Show some personality here.', linkedin: 'chiangs'}
      ]
  }

  ngOnInit() {
  }

}
