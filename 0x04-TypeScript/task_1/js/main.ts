// 1. Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string; 
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;     
  
    
    [key: string]: any; 
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // 3. Create an instance of Directors
  const director1: Directors = {
    firstName: 'Shafie',
    lastName: 'Weru',
    location: 'Kenya',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }