import {LightningElement, track} from 'lwc';

export default class Editor extends LightningElement {
  
  @track editorElement;
  
  handleInput (event) {
    console.log(event.target.selectionStart,event.target.selectionEnd);
  }

  insertMarkdown(symbol){
    let nSelStart = this.editorElement.selectionStart
    let nSelEnd = this.editorElement.selectionEnd
    let sOldText = this.editorElement.value;
    let update = '';
    if(sOldText.substring(nSelEnd,nSelEnd-1) === ' ' && sOldText.substring(nSelEnd,nSelEnd-2) !== ' ' ){
      update = sOldText.substring(0,nSelStart) + symbol + sOldText.substring(nSelStart,nSelEnd -1) + symbol + ' ' + sOldText.substring(nSelEnd);
    } else {
      update = sOldText.substring(0,nSelStart) + symbol + sOldText.substring(nSelStart,nSelEnd) + symbol + sOldText.substring(nSelEnd);
    }
    this.editorElement.value = update;
    // sOldText.substring(0, nSelStart) + (bDouble ? sStartTag + sOldText.substring(nSelStart, nSelEnd) + sEndTag : sStartTag) + sOldText.substring(nSelEnd);
  }

  addBold(){
    this.insertMarkdown("*");
  }

  renderedCallback(){
    this.editorElement = this.template.querySelector('textarea');
    console.log(this.editorElement);
  }
}
