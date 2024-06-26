import * as React from 'react';
import * as RN from 'react-native';

class MyCalendar extends React.Component {
  render() {
    return (
      <RN.View>
        <RN.Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          {this.months[this.state.activeDate.getMonth()]}
          {this.state.activeDate.getFullYear()}
        </RN.Text>
      </RN.View>
    );
  }
}

var rows = [];
rows = matrix.map((row, rowIndex) => {
  var rowItems = row.map((item, colIndex) => {
    return (
      <RN.Text
        style={{
          flex: 1,
          height: 18,
          textAlign: 'center',
          // Highlight header
          backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
          // Highlight Sundays
          color: colIndex == 0 ? '#a00' : '#000',
          // Highlight current date
          fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '',
        }}
        onPress={() => this._onPress(item)}>
        {item != -1 ? item : ''}
      </RN.Text>
    );
  });
  return (
    <RN.View
      style={{
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {rowItems}
      <RN.Button title="Previous" onPress={() => this.changeMonth(-1)} />
      <RN.Button title="Next" onPress={() => this.changeMonth(+1)} />
    </RN.View>
  );
});

changeMonth = (n) => {
  this.setState(() => {
    this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n);
    return this.state;
  });
};

setMonth = (month) => {
  let monthNo = this.months.indexOf(month); // get month number
  let dateObject = Object.assign({}, this.state.dateObject);
  dateObject = moment(dateObject).set('month', monthNo); // change month value
  this.setState({
    dateObject: dateObject, // add to state
  });
};

props.data.map((data) => {
  months.push(
    <td
      key={data}
      className="calendar-month"
      onClick={(e) => {
        this.setMonth(data);
      }}>
      <span>{data}</span>
    </td>
  );
});

state = {
  activeDate: new Date(),
};

var year = this.state.activeDate.getFullYear();
var month = this.state.activeDate.getMonth();
var firstDay = new Date(year, month, 1).getDay();
var maxDays = this.nDays[month];
if (month == 1) {
  // February
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    maxDays += 1;
  }
}

months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

