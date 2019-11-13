import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  // mobileValidator(control: FormControl): any {
  //   var myreg = /^(((24[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   let valid = myreg.test(control.value);
  //   console.log('mobile的校验结果:'+valid);
  //   return valid?null:{mobile: true}; 
  // }

  // equalValidator(group: FormGroup): any {
  //   let password: FormControl = group.get("password") as FormControl;
  //   let pconfirm: FormControl = group.get("pconfirm") as FormControl;
  //   let valid:boolean = (password.value === pconfirm.value);
  //   console.log('password的校验结果:'+valid);
  //   return valid ? null: {equal: true};
  // }

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]], // 1默认值 2校验器
      mobile: ['', this.mobileValidator],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      }, {validator: this.equalValidator})
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    let isValid:boolean = this.formModel.get('username').valid;
    console.log('username的校验结果', isValid)
    let errors:any = this.formModel.get("username").errors;
    console.log('username的错误信息', errors)
    console.log(this.formModel.value)
  }

}
