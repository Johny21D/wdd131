
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
const myGrades = ['A', 'C', 'B', 'A'];

const pointsArray = myGrades.map(convert);

console.log(pointsArray); 
          

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
    words.forEach(myfunction);
    function myfunction(items){
        console.log(items)
    }


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const fullNames = students.map(student=> `${student.first} ${student.last}`);
console.log(fullNames); 
