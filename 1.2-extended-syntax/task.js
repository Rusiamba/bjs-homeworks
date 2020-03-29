function getResult(a,b,c){
    let d = b**2 - 4*a*c;
    if (d < 0) return [];
    
    if (d = 0) {
        let result = -b/2*a;
        return result;
    }
    
    if (d > 0) {
        let result1 = (-b + Math.sqrt(d))/2*a;
        let result2 = (-b - Math.sqrt(d))/2*a;
        return [result1, result2];
    }
}

function getAverageMark(marks){
    if (marks.length == 0) return 0;
    if (marks.length > 5) {
        console.log("Массив больше 5 значений");
        marks = marks.slice(0, 5);
    }

    let sum = 0;
    for (let i = 0; i< marks.length; i++) {
        sum += marks[i];
    }
    return sum/marks.length;
}

function askDrink(name,dateOfBirthday){
    // let name;
    // let dateOfBirthday;

    // return result;
}
