import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopinfoComponent} from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // Destructuracion para obtener el valor que manda el componente hijo popInfoComponent
    //const {data} = await popover.onDidDismiss();
    const {data} = await popover.onWillDismiss();
    console.log("Padre: ", data);
  }

}