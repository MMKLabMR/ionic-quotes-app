import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.page.html',
  styleUrls: ['./fun-facts.page.scss'],
})
export class FunFactsPage implements OnInit, OnDestroy {

  constructor(private menuCtrl: MenuController) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  openMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
