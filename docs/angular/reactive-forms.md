---
title: Reactive Forms
sidebar_label: Reactive Forms
---

## Notes

- uses **immutable** approach
- built around **observable streams**
- form inputs and values are provided as streams of input values

## Bind single input

- import module `ReactiveFormsModule` from the `@angular/forms` to application module
- create component
- create property with initial value `FormControl('')` for input, import `FormControl` from `@angular/forms`
- bind property to input with `[formControl]` directive (ex. - `[formControl]="name"`)

## Bind form with several fields

- create `FormGroup` instance as component property
  
  - with `FormGroup` class
    
    - pass object as constructor parameter with map of `property -> FormControl`
    
  - with `FormBuilder`
  
    - import `FormBuilder` to constructor
  
    - use `group()` method of `FormBuilder` to build `FormGroup`
  
      ```javascript
      .group({
      	firstName: [''],
        lastName: ['']
      })
      ```
  
- bind form group to view
  - bind form group to form tag with `[formGroup]` directive: `[formGroup]="user"`
  - mark each input with `formControlName` - `formControlName="firstName"`
  
- submit form value
  - add `(ngSubmit)` event listener to `form`: `(ngSubmit)="onSubmit()"`
  - create `onSubmit()` method in component
  
- submit only valid form

  - add `[disabled]` directive to button: `[disabled]="!userForm.valid"`

## Add validator to `FormControl`

Add validator as second parameter to control's value: `firstName: ["default", Validators.required]`

## Fetch from status

To fetch form status use `status` property