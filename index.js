/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


 let createEmployeeRecord = function(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
   
}
 
let createEmployeeRecords = function(employeeData) {
    return employeeData.map((row) => {
        return createEmployeeRecord(row)
    })
}
 
let createTimeInEvent = function(dateIn) {
    let [date, hour] = dateIn.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}
 
let createTimeOutEvent = function(dateOut) {
    let [date, hour] = dateOut.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
    })
    return this
}
 
let hoursWorkedOnDate = function(dateForEmp) {
    let inEvent = this.timeInEvents.find((e) => {
        return e.date === dateForEmp
    })
 
    let outEvent = this.timeOutEvents.find((e) => {
        return e.date === dateForEmp
    })
 
    return (outEvent.hour - inEvent.hour) / 100
}
 

let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}
 
let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find((rec) => {
        return rec.firstName === firstName
    })
}
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((sum, employee) => {
      return sum+=allWagesFor.call(employee);
    }, 0);
  }

