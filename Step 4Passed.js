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
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    // Obtener el promedio de la clase
    const classAverage = getAverage(totalScores);
    
    // Obtener la calificación del estudiante
    const studentGrade = getGrade(studentScore);
    
    // Verificar si el estudiante pasó o falló
    if (hasPassingGrade(studentScore)) {
        // Si pasó el curso
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course.";
    } else {
        // Si falló el curso
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course.";
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));