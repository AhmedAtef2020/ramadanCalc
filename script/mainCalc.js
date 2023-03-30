// global variables
const remainingDaysEle = document.querySelector(".remainingDays");
const todaytDate = moment();
const todayHijryFormat = todaytDate.format("iYYYY/iM/iD");
const todayHijryDate = moment(todayHijryFormat, "iYYYY/iM/iD");
const currentHijriYear = parseInt(todayHijryDate.format("iYYYY"));
let ramadanStart = moment(`${currentHijriYear}/9/1`, "iYYYY/iM/iD");
let inRamadan = ramadanStart.daysInMonth() - 1;
let diff = todayHijryDate.diff(ramadanStart, "days");
let ramadanCase = document.getElementById("ramadanCase");

// if statment 
if (diff >= 0) {
    if (diff <= inRamadan) {//in ramadan
        ramadanCase.textContent = "في";
        diff = inRamadan - diff;
    }
    else {//after ramadan
        ramadanCase.textContent = "على";
        const nextHijriYear = currentHijriYear + 1;
        ramadanStart = moment(`${nextHijriYear}/9/1`, "iYYYY/iM/iD");
        diff = todayHijryDate.diff(ramadanStart, "days");
        console.log(diff);

    }
} else {
    //before ramadan
    ramadanCase.textContent = "على";
}

remainingDaysEle.textContent = Math.abs(diff).toLocaleString("ar-sa");

// today date placment
document.getElementById("today__date").textContent = todayHijryDate.format("iYYYY/iM/iD");