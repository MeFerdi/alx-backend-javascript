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
  
  console.log(director1);