import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../common/EmployeeService';
import { Employee } from '../common/Employee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  empList: Employee[];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.findList().subscribe(empList => this.empList = empList);
  }

  delete(id: string) {
    const currentList = this.empList;
    this.service.delete(id).subscribe(emp => this.empList = currentList.filter(x => x.id !== id));
  }
}
