import { concat } from 'rxjs/operator/concat';
import { any } from 'codelyzer/util/function';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos: any;
  url: any;
  
  constructor() {
    this.datos = {
      "face": {
        "eyes": [
          "eyes1",
          "eyes10",
          "eyes2",
          "eyes3",
          "eyes4",
          "eyes5",
          "eyes6",
          "eyes7",
          "eyes9"
        ],
        "nose": [
          "nose2",
          "nose3",
          "nose4",
          "nose5",
          "nose6",
          "nose7",
          "nose8",
          "nose9"
        ],
        "mouth": [
          "mouth1",
          "mouth10",
          "mouth11",
          "mouth3",
          "mouth5",
          "mouth6",
          "mouth7",
          "mouth9"
        ],
        "color": [
          "d32f2f",
          "aa00ff",
          "3f51b5 ",
          "304ffe",
          "ccff90",
          "ffc107",
          "757575",
          "b0bec5",
          "689f38",
          "00bfa5",
          "3B0944",
          "AC0C0C"
        ]
      }
    }

    setInterval(() => {

      let eyes = this.datos.face.eyes[this.generate(0, 8)];
      let nose = this.datos.face.nose[this.generate(0, 7)];
      let mouth = this.datos.face.mouth[this.generate(0, 7)];
      let color = this.datos.face.color[this.generate(0, 9)];

      this.url = "https://api.adorable.io/avatars/face/" + eyes + "/" + nose + "/" + mouth + "/" + this.datos.face.color[this.generate(0, 9)];
      
    }, 2500)
  }

  generate(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


}
