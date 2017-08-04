const mobile = new RegExp(/^1[3|4|5|7|8][0-9]{9}$/);

const idcard = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);

const thouComma = num => {
  num = num.toFixed(2).toString();
  if (num.indexOf(',') !== -1)num = num.replace(/,/g, '');
  let ps = num.split('').reverse();
  let pointIndex = ps.indexOf('.');
  pointIndex = pointIndex === -1 ? 0 : pointIndex + 1;
  let newps = [];
  ps.map((v, i) => {
    if ((i > pointIndex) && ((i - pointIndex) % 3 === 0)) newps.unshift(',');
    newps.unshift(v);
  });
  return newps.join('');
};

export {mobile, idcard, thouComma}
