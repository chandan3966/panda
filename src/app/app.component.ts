import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'panda';
  tabs = ['Blog/Article','Newsletter/E-mailer','Whitepaper','E-book','Report/Guide','Product Description','Website Content','Video Script','Company Profile/Brochure','Press Release']
  subtabs = ['from Rs.500','from Rs.1000','from Rs.2000','from Rs.1000','from Rs.1000','from Rs.500','from Rs.1000','from Rs.1000','from Rs.2000','from Rs.2000']
}
