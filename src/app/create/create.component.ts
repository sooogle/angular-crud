import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../common/Employee';
import { EmployeeService } from '../common/EmployeeService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  emp = new Employee();

  constructor(private router: Router, private service: EmployeeService) { }

  ngOnInit() {
  }

  create() {
    this.emp.dept = '1';
    console.log(JSON.stringify(this.emp));
    this.service.create(this.emp).subscribe(emp => this.router.navigateByUrl('/'));
  }

}
