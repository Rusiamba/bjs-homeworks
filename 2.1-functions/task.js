//Задача 1

function getSolutions( a, b, c ) {
    let D = b** - 4*a*c;

    if(D < 0) {
        return { D: D , roots: [] }
    }

    if(D === 0) {
        let x1 = -b / 2*a;
        return { D: D , roots: [x1] }
    }

    if(D > 0) {
        let x1 =  -b * Math.sqrt(d)/2*a;
        let x2 = b * Math.sqrt(d)/2*a;
        return { D: D , roots: [x1 , x2] }
    }
}


function showSolutionsMessage( a, b, c ) {
    let result = D;

    console.log('Вычисляем корни квадратного уравнения ax² + bx + c');
    console.log('Значение дискриминанта:' + result);

    if(result < 0) {
        console.log('Уравнение не имеет вещественных корней');
    }

    if(result === 0) {
        console.log('Уравнение имеет один корень X₁ =' + x1);
    }

    if(result > 0) {
        console.log('Уравнение имеет два корня. X₁ =' + x1, 'X₂ =' + x2);
    }
}

//Задача 2

function getAverageScore(data) {
    let data = {
        algebra: [2, 4, 3],
        russian: [5, 4, 2],
        average: data,
    }
}


function getAverageMark(marks) {
    let average;

    average = (data / 3);
}
