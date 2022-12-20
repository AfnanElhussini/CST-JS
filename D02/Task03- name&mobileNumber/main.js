var userName = prompt('Enter you name ...');
var phoneNumber = prompt('Enter your phone number with format XXX-XXXXXXXX');

if (
  (userName != '' || userName.length >= 3) &&
  phoneNumber.length == 12 &&
  (phoneNumber.substring(0, 3) == '010' ||
    phoneNumber.substring(0, 3) == '011' ||
    phoneNumber.substring(0, 3) == '012' ||
    phoneNumber.substring(0, 3) == '015') &&
  phoneNumber[3] == '-'
&& !isNaN(phoneNumber.substring(4, 12))
) {
  alert('HI ' + userName + ' YOUR PHONE IS ' + phoneNumber);
} else {
  alert('PLEASE ENTER VALID DATA');
}
