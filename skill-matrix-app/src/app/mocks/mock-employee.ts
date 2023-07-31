import {Employee} from "../models/employee";

export const EMPLOYEES: Employee[] = [
  {id: crypto.randomUUID(), name: 'Emily', surname: 'Brooks', skills: ['Java']},
  {id: crypto.randomUUID(), name: 'Alvaro', surname: 'Villa', skills: ['Python']},
  {id: crypto.randomUUID(), name: 'Kyle', surname: 'Rose', skills: ['Ruby']},
  {id: crypto.randomUUID(), name: 'Dan', surname: 'Watson', skills: ['Scala', 'JavaScript']},
  {id: crypto.randomUUID(), name: 'Sam', surname: 'Page', skills: ['Kotlin']}
];
