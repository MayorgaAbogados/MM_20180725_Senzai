import { Component } from "@angular/core";
import { Http } from "@angular/http";
import axios from "axios";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  public companyIsFocus = false;
  public nitIsFocus = false;
  public industryIsFocus = false;
  public cityIsFocus = false;
  public nameIsFocus = false;
  public emailIsFocus = false;
  public cellphoneIsFocus = false;
  public phoneIsFocus = false;
  public twitterIsFocus = false;
  public sendingFlag = false;

  public form = {
    company: null,
    industry: null,
    nit: null,
    city: null,
    contactName: null,
    contactEmail: null,
    contactCellphone: null,
    Phone: null,
    Ext: null,
    Twitter: null
  };
  constructor(private http: Http) {}

  ngOnInit() {}

  focusAnim(str) {
    if (str == "company" && !this.form.company) {
      this.companyIsFocus = false;
    }
    if (str == "nit" && !this.form.nit) {
      this.nitIsFocus = false;
    }
    if (str == "industry" && !this.form.industry) {
      this.industryIsFocus = false;
    }
    if (str == "city" && !this.form.city) {
      this.cityIsFocus = false;
    }
    if (str == "name" && !this.form.contactName) {
      this.nameIsFocus = false;
    }
    if (str == "email" && !this.form.contactEmail) {
      this.emailIsFocus = false;
    }
    if (str == "cellphone" && !this.form.contactCellphone) {
      this.cellphoneIsFocus = false;
    }
    if (str == "phone" && !this.form.Phone) {
      this.phoneIsFocus = false;
    }
    if (str == "twitter" && !this.form.Twitter) {
      this.twitterIsFocus = false;
    }
  }
  postForm() {
    let formData = new FormData();
    formData.append("company", this.form.company);
    formData.append("industry", this.form.industry);
    formData.append("nit", this.form.nit);
    formData.append("city", this.form.city);
    formData.append("contactName", this.form.contactName);
    formData.append("contactEmail", this.form.contactEmail);
    formData.append("contactCellphone", this.form.contactCellphone);
    formData.append("phone", this.form.Phone);
    formData.append("twitter", this.form.Twitter);

    let url = "http://membresia.mayorga.com.co/app/backend/main.php";
    let self = this;
    self.sendingFlag = true;
    axios
      .post(url, formData)
      .then(function(response) {
        self.sendingFlag = false;
        window.console.log("sdfsdf");
      })
      .catch(function(error) {
        window.console.log("error");
      });
  }
}
