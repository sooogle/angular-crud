import { InMemoryDbService } from 'angular-in-memory-web-api';

export class EmployeeData implements InMemoryDbService {
    // 注意: idという名前のfieldが必要
    createDb() {
        const employee = [
            { id: 'A0001', name: 'Satoh', age: 25, sex: '1', dept: '1' },
            { id: 'A0002', name: 'Suzuki', age: 25, sex: '2', dept: '1' },
            { id: 'A0003', name: 'Tanaka', age: 30, sex: '1', dept: '2' },
            { id: 'A0004', name: 'Matsumoto', age: 27, sex: '1', dept: '2' },
        ];
        return { employee };
    }
}
