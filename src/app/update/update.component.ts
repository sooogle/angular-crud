import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../common/Employee';
import { EmployeeService } from '../common/EmployeeService';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  emp = new Employee();

  constructor(private router: Router, private route: ActivatedRoute, private service: EmployeeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.find(params.id).subscribe(emp => this.emp = emp);
    });
  }

  update() {
    this.service.update(this.emp).subscribe(emp => this.router.navigateByUrl('/'));
  }
}
