module.exports = function(string) {
  var ch, special = '', parseSpecial = false, res = '', unicodeNum = '';

  for (var i = 0, len = string.length; i < len; i++) {
    ch = string[i];

    if (parseSpecial) {
      if (unicodeNum || !isNaN(parseInt(ch, 16))) {
        if (unicodeNum.length === 3) {
          res += String.fromCharCode(parseInt(unicodeNum + ch, 16));
          unicodeNum = '';
          parseSpecial = false;
        } else
          unicodeNum += ch;

        continue;
      } else if (ch === '*' || ch === '@' || ch === '¤')
        res += ch;
      else if  (ch === 'å')
        res += '\ua733';
      else if (ch === 'Å')
        res += '\ua732';

      parseSpecial = false;
    }
    else if (ch === '@')
      parseSpecial = true;
    else
      res += ch;
  }

  return res;
}
