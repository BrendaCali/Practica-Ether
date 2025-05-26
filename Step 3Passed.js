function getAverage(scores) {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    // Usar la función getGrade para obtener la letra de calificación
    const grade = getGrade(score);
    
    // Verificar si la calificación NO es "F" (es decir, es una calificación aprobatoria)
    if (grade !== "F") {
        return true;
    } else {
        return false;
    }
}

// Pruebas
console.log(hasPassingGrade(100)); // true
console.log(hasPassingGrade(53));  // false
console.log(hasPassingGrade(87));  // true