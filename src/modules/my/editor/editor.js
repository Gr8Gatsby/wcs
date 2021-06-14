import {LightningElement, api, track} from 'lwc';

export default class Editor extends LightningElement {
  handleInput (event) {
    let text = event.target.value;
    console.log (text);
    let match = /\r|\n/.exec (text);
    if (match) {
      console.log ('newline!', match.index);
    }
  }
}
