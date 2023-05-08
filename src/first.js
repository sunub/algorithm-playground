function calculateDaysBetweenDates(date1, date2) {
    // your code goes here
    date1 = new Date(date1)
    date2 = new Date(date2)
    var Difference_In_Time = date2.getTime() - date1.getTime()
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
    return Difference_In_Days
}
