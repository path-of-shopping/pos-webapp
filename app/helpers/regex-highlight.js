import {helper} from '@ember/component/helper';
import {htmlSafe} from '@ember/string';

export function regexHighlight([regex, item, key, cssModifier]) {
  let value = item.get(key);
  const match = value.match(regex);

  if (!match) return value;

  match.shift(); // Wipe the dummy first result

  let letterToWrap = match.shift();

  if (!letterToWrap) return value; // Handle the empty regex case

  let isWrapping = false;

  return htmlSafe(value.split('').reduce((formattedValue, letter) => {
    let buffer = '';

    if (letterToWrap && letter.toLowerCase() === letterToWrap.toLowerCase()) {
      if (!isWrapping) {
        buffer += `<span class="${cssModifier}">`;
        isWrapping = true;
      }
      letterToWrap = match.shift();
    } else if (isWrapping) {
      buffer += '</span>';
      isWrapping = false;
    };
    buffer += letter;

    return formattedValue + buffer;
  }, ''));
}

export default helper(regexHighlight);
