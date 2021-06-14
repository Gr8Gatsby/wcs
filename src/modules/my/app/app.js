import {LightningElement} from 'lwc';

export default class App extends LightningElement {
  constructor () {
    super ();
    this.template.addEventListener ('emoji-click', this.handleEmojiClick);
  }

  handleEmojiClick (event) {
    console.log (event.details);
  }
}
