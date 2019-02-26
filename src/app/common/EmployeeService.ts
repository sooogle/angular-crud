import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './Employee';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) {}

    findList(): Observable<Employee[]> {
        return this.http.get<Employee[]>('/api/employee');
    }

    find(id: string): Observable<Employee> {
        return this.http.get<Employee>('/api/employee/' + id);
    }

    create(emp: Employee): Observable<Employee> {
        return this.http.post<Employee>('/api/employee', emp);
    }

    update(emp: Employee): Observable<Employee> {
        return this.http.put<Employee>('/api/employee/' + emp.id, emp);
    }

    delete(id: string): Observable<Employee> {
        return this.http.delete<Employee>('/api/employee/' + id);
    }

}
