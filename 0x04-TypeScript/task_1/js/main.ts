// 1. Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string; 
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;     
  
    
    [key: string]: any; 
  }
  
  // 2. Create an instance of Teacher with additional attributes
  const teacher3: Teacher = {
    firstName: 'Shaffie',
    lastName: 'Weru',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
  // 3. Log the teacher object
  console.log(teacher3);
  