import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from "@capacitor-community/barcode-scanner";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-squad',
  templateUrl: './find-squad.component.html',
  styleUrls: ['./find-squad.component.scss'],
})
export class FindSquadComponent  implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.scanQRCode()
  }

  async scanQRCode() {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({force: true});

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    await BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      this.router.navigate(['/squads/' + result.content])
    }
  }

}
