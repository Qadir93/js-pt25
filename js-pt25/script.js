function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 3)); 








function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024));









function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
    let s = calculateSemiPerimeter(a, b, c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

let a = 3, b = 4, c = 5;
console.log("Area of triangle:", calculateTriangleArea(a, b, c));









function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    return (total / 300) * 100;
}

function mainFunction(m1, m2, m3) {
    let avg = calculateAverage(m1, m2, m3);
    let percentage = calculatePercentage(m1, m2, m3);

    console.log("Average Marks:", avg.toFixed(2));
    console.log("Percentage:", percentage.toFixed(2) + "%");
}
mainFunction(85, 90, 78);









function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(customIndexOf("elephant", "p")); 
console.log(customIndexOf("elephant", "z")); 









function removeVowels(sentence) {
    if (sentence.length > 25) {
        return "Sentence too long!";
    }

    return sentence.replace(/[aeiouAEIOU]/g, '');
}

console.log(removeVowels("Hello World"));     
console.log(removeVowels("This is a sentence"));  










function countSuccessiveVowels(text) {
    let count = 0;
    text = text.toLowerCase();

    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i] + text[i + 1];

        switch (pair) {
            case 'aa': case 'ae': case 'ai': case 'ao': case 'au':
            case 'ea': case 'ee': case 'ei': case 'eo': case 'eu':
            case 'ia': case 'ie': case 'ii': case 'io': case 'iu':
            case 'oa': case 'oe': case 'oi': case 'oo': case 'ou':
            case 'ua': case 'ue': case 'ui': case 'uo': case 'uu':
                count++;
                break;
        }
    }

    return count;
}

let sentence = "Pleases read this application and give me gratuity";
console.log("Number of successive vowel pairs:", countSuccessiveVowels(sentence));











function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

let distanceKm = 5;
console.log("Distance in meters:", convertToMeters(distanceKm));
console.log("Distance in feet:", convertToFeet(distanceKm));
console.log("Distance in inches:", convertToInches(distanceKm));
console.log("Distance in centimeters:", convertToCentimeters(distanceKm));









function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12;

    if (hoursWorked <= regularHours) {
        return 0;
    }

    let overtimeHours = hoursWorked - regularHours;
    return overtimeHours * overtimeRate;
}

let hours = 45;
console.log("Overtime Pay: Rs.", calculateOvertimePay(hours));
