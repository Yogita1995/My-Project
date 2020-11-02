import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  form: FormGroup;
  typevisit: SelectItem[];
  data: any = {};
  conatctdata: any[] = [];
  currentdate=Date.now();

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.typevisit = [{ label: 'Meeting', value: 'Meeting' },
    { label: 'Delivery', value: 'Delivery' },
    { label: 'Personal', value: 'Personal' },
    ];
  }

  ngOnInit() {
    this.conatctdata = JSON.parse(localStorage.getItem('Data'));
    AOS.init();
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      entrydate: new FormControl(this.currentdate, [Validators.required]),
      entrytime: new FormControl('', [Validators.required]),
      exittime: new FormControl('', [Validators.required]),
      personvisit: new FormControl('', [Validators.required]),
      typevisit: new FormControl('', [Validators.required]),
    });
  }


  onSubmit() {
    console.log(this.form.value)
    this.data = Object.assign(this.form.value)
    this.MoreData(this.data)

  }
  MoreData(data) {
    let moredata = [];
    if (localStorage.getItem('Data')) {
      let olddata = JSON.parse(localStorage.getItem('Data'));
      moredata.push(data, ...olddata)
    } else {
      moredata = [data]
    }
    if (moredata) {
      localStorage.setItem('Data', JSON.stringify(moredata))
    }
    this.conatctdata = moredata


  }
  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  // onlatestnews(){
  //   console.log("start")    
  //   this.router.navigate[('./latest-news')]
  // }
}
