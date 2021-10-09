import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonFormData } from 'src/app/models/inputFormModel';

@Component({
  selector: 'app-truenorthform',
  templateUrl: './truenorthform.component.html',
  styleUrls: ['./truenorthform.component.scss']
})
export class TruenorthformComponent implements OnInit {
  // temporary im fething your json here
  JsonFormData: JsonFormData
  public Form: FormGroup = this.fb.group({})
  constructor(private _http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    // getting json Object
    this._http.get('assets/input.json').subscribe((data: JsonFormData) => {
      this.JsonFormData = data
      this.createForm(this.JsonFormData)
    })
  }
  // Creating Form structure
  createForm(controls: JsonFormData) {
    this.Form.addControl('section', this.fb.array([]))
    this.createSectionObjects(controls)
  }
  // creating Section Objects
  createSectionObjects(controls: JsonFormData) {
    controls.section.forEach((sectionObjects, index) => {
      const name = sectionObjects.name
      this.getSectionArrayFromJson.push(this.fb.group({
        name: this.fb.control(name),
        group: this.createGroupArray(sectionObjects)
      }))
    })
  }
  // creating Group Object
  createGroupArray(sectionObjects) {
    var groupArray = this.fb.array([])
    sectionObjects.group.forEach(group => {
      const name = group.name
      groupArray.push(this.fb.group({
        name: this.fb.control(name),
        parameters: this.createParametersArray(group)
      }))
    })
    return groupArray
  }
  change(event){
console.log(event)
  }
  //creating Parameters Array
  createParametersArray(group) {
    var parameterArray = this.fb.array([])
    group.parameters.forEach(parameters => {
      const key = parameters.key
      parameterArray.push(this.fb.group({
        key: this.fb.control(key),
        value: this.fb.control(null,[Validators.required])
      }))
    })
    return parameterArray
  }
  //Form Getters
  public get getSectionArrayFromJson(): FormArray {
  return this.Form.get('section') as FormArray
}


  // Form Submition
  public submitForm() {
  console.log(this.Form.value)
}
}
