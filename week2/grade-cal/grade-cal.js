const gradeCalculator = (grade) => {
    if (grade>=90 && grade<=100) {
      console.log(`You got an A (${grade}%)`)  
    } else if (grade>=80 && grade<89) {
        console.log(`You got a B (${grade}%)`)  
      } else if (grade>=70 && grade<79) {
        console.log(`You got a C (${grade}%)`)  
      } else if (grade>=60 && grade<69) {
        console.log(`You got a D (${grade}%)`)  
      } else if (grade>=50 && grade<59) {
        console.log(`You got an E (${grade}%)`)  
      } else if (grade>=0 && grade<49) {
        console.log(`You got a F (${grade}%)`)  
      }
};

gradeCalculator(0);
gradeCalculator(100);
gradeCalculator(75);