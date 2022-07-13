import { Staff } from "./Staff";
import { Student } from "./student";

export class Department {
    departmentId!: number;
    departmentName!: string;
    departmentHead!: string;
    departmentCoordinate!: string;
    student!:Student;
    staff!:Staff;
}