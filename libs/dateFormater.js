var monthMap = [
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
    'December'
];

var UpdatedDate = {
    longForm: function(d) {
        return monthMap[d.getMonth()]+' '+d.getDate() +', '+d.getFullYear();
        //return ;
    }
};

module.exports = UpdatedDate;
