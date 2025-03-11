class Person {
    #name;
  
    constructor(name, age) {
      this.#name = name;
      this.age = age;
    }
  
    getName() {
      return this.#name;
    }
  
    introduce() {
      return `Hi, my name is ${this.#name} and I am ${this.age} years old.`;
    }
  }
  
  class Employee extends Person {
    constructor(name, age, role, salary) {
      super(name, age);
      this.role = role;
      this.salary = salary;
    }
  }
  
  class Manager extends Employee {
    #bonus;
  
    constructor(name, age, jobtitle, salary, bonus) {
      super(name, age, "manager", salary);
      this.jobtitle = jobtitle;
      this.#bonus = bonus;
    }
  
    introduce() {
      const parentIntro = super.introduce();
      return `${parentIntro}\nSaya adalah ${this.jobtitle} dan saya menghasilkan ${this.salary} per bulan.`;
    }
  }
  
  class Department {
    constructor(name, manager) {
      this.name = name;
      this.employees = [];
      this.manager = manager;
    }
  
    getDepartmentInfo() {
      throw new Error("Method getDepartmentInfo() must be implemented");
    }
  }
  
  class ITDepartment extends Department {
    getDepartmentInfo() {
      return `Department ${this.name} is managed by ${this.manager.getName()}`;
    }
  }
  
  const employee1 = new Employee("ali", 25, "Software Engineer", 5000);
  console.log(employee1.introduce());
  
  const manager1 = new Manager("Bob", 30, "Manager", 10000, 5000);
  console.log(manager1.introduce());
  
  const itDept = new ITDepartment("IT", manager1);
  console.log(itDept.getDepartmentInfo());