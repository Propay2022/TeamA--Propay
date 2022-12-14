import { Component } from '@angular/core';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-billpaymentpage',
  templateUrl: './billpaymentpage.component.html',
  styleUrls: ['./billpaymentpage.component.css']
})
export class BillpaymentpageComponent {
  operator=sessionStorage.getItem('ope');
  mobile=sessionStorage.getItem('mob')
  plan=sessionStorage.getItem('plans');
    captureScreen() {
      let data = document.getElementById('contentToConvert');
      html2canvas(data as any).then(canvas => {
          var imgWidth = 210;
          var pageHeight = 295;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          const contentDataURL = canvas.toDataURL('image/png');
          let pdfData = new jsPDF('p', 'mm', 'a4');
          var position = 0;
          pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
          pdfData.save(`MyPdf.pdf`);
      });
  }
}
