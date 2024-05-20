var entries = {}; //Declared the dictionary that will house all journal entries
function GrabEntry(month, day, year) { //Gets what the user has already put into an entry in the past
    var dateCode = GetDateCode(month, day, year);
  if (dateCode in entries) {
      return entries(dateCode)
  }
  else {
    return ""
  }
    
}
function SaveEntry(month, day, year, newText) { //Saves the entry for later getting
    var dateCode = GetDateCode(month, day, year);
    if (dateCode in entries) {
      entries.dateCode = newText;
  }
    else {
      entries[dateCode] = newText;
    }

}

function GetDateCode(month, day, year) { //Turns the date input into a string that the dictionary can use as keys for journal entry values
    var monthDat = month;
    var dayDat = day;
    var yearDat = year;
    return (month + day + year);
}
export default GrabEntry; SaveEntry;

