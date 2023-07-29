import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature-user',
  templateUrl: './signature-user.component.html',
  styleUrls: ['./signature-user.component.scss'],
})
export class SignatureUserComponent {
  signPad: any;
  @ViewChild('signPadCanvas', { static: false }) signaturePadElement: any;
  @Output('handleSignature') handleSignature = new EventEmitter<File>();
  signImage: any;

  ngAfterViewInit() {
    this.signPad = new SignaturePad(this.signaturePadElement.nativeElement, {});
    this.signPad.height = this.signPad.offsetHeight;
    this.signPad.width = this.signPad.offsetWidth;
  }
  /*It's work in devices*/
  startSignPadDrawing(event: Event) {
    console.log(event);
  }
  /*It's work in devices*/
  movedFinger(event: Event) {}
  /*Undo last step from the signature*/
  undoSign() {
    const data = this.signPad.toData();
    if (data) {
      data.pop(); // remove the last step
      this.signPad.fromData(data);
    }
  }
  /*Clean whole the signature*/
  clearSignPad() {
    this.signPad.clear();
  }
  /*Here you can save the signature as a Image*/
  saveSignPad() {
    const base64ImageData = this.signPad.toDataURL();
    this.signImage = base64ImageData;

    const blob = this.dataURLtoBlob(this.signImage);
    const file = new File([blob], 'firma.png', { type: 'image/png' });

    this.handleSignature.emit(file);
  }

  dataURLtoBlob(dataURL: string): Blob {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
}
