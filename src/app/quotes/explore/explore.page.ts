import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote.model";
import {QuotesService} from "../quotes.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  quotes: Quote[];

  constructor(private quotesService: QuotesService) {
    this.quotes = this.quotesService.quotes;
  }

  ngOnInit() {
  }

}
