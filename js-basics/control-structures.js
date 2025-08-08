

const day = "saturday"


// if-else
if (day === "sunday" || day === "saturday") {
    console.log("holiday");
} else {
    if (day === "friday") {
        console.log("weekend");
    } else {
        console.log("weekday");
    }
}

//else if statement
if (day === "sunday" || day === "saturday") {
    console.log("holiday");
} else if (day === "friday") {
    console.log("weekend");
} else {
    console.log("weekday");
}



// switch case

switch (day) {
    case "sunday":
    case "saturday":
        console.log("holiday");
        break;
    case "friday":
        console.log("weekend");
        break;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("weekday");
        break;
    default:
        console.log("invalid");
        break;
}
