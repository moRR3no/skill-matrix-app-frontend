import { Employee } from '../models/employee';

const manager: Employee = {
  id: '0f0f771a-1826-4260-9f04-af80724410bb',
  name: 'John',
  surname: 'Moore',
  date: new Date(1426287600000),
  skills: ['Python', 'Java', 'JavaScript'],
  projects: ['Project 1', 'Project 2', 'Project 3'],
};
export const EMPLOYEES: Employee[] = [
  {
    id: crypto.randomUUID(),
    name: 'Emily',
    surname: 'Brooks',
    manager: manager,
    date: new Date(1426287600000),
    skills: ['Python'],
    projects: ['Project 1'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Alvaro',
    surname: 'Villa',
    manager: manager,
    date: new Date(1426287600000),
    skills: ['Python'],
    projects: ['Project 2'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Kyle',
    surname: 'Rose',
    manager: manager,
    date: new Date(1424473200000),
    skills: ['Ruby'],
    projects: ['Project 3'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Dan',
    surname: 'Watson',
    manager: manager,
    date: new Date(1426374000000),
    skills: ['Scala', 'JavaScript'],
    projects: ['Project 1'],
  },
  {
    id: crypto.randomUUID(),
    name: 'Sam',
    surname: 'Page',
    manager: manager,
    date: new Date(1426287600000),
    skills: ['Kotlin'],
    projects: ['Project 2'],
  },
];
