/* global process */
function output(...t) {
  const [type, ...o] = t;
  if (process.env.NODE_ENV !== 'production') {
    switch (type) {
      case 'error':
        console.error(...o);
        break;
      case 'log':
      default:
        console.log(...o);
        break;
    }
  }
}

export const dbg = {
  log(...t) {
    output('log', ...t);
  },
  error(...t) {
    output('error', ...t);
  },
};

export const sortResult = (obj, compareFn) => {
  const sorted = {};
  if (typeof compareFn !== 'function') {
    Object.keys(obj).sort().forEach((key) => {
      sorted[key] = obj[key];
    });
  } else {
    Object.keys(obj).sort((a, b) => compareFn(a, b, obj)).forEach((key) => {
      sorted[key] = obj[key];
    });
  }
  return sorted;
};

export const timeFormat = (time, format = 'shortdate') => {
  const fix2 = num => (`0${num}`).substr(-2);
  const d = new Date(time);
  const {
    yyyy,
    MM,
    dd,
    hh,
    mm,
    ss,
  } = {
    yyyy: d.getFullYear(),
    MM: fix2(d.getMonth() + 1),
    dd: fix2(d.getDate()),
    hh: fix2(d.getHours()),
    mm: fix2(d.getMinutes()),
    ss: fix2(d.getSeconds()),
  };

  let ret;
  switch (format) {
    case 'hour':
      ret = `${hh}:00-${hh}:59`;
      break;
    case 'hourarray':
      ret = [+hh, +mm, +ss];
      break;
    case 'shorttime':
    case 'time':
      ret = `${hh}:${mm}:${ss}`;
      break;
    case 'full':
      ret = `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
      break;
    case 'shortdate':
    case 'date':
    default:
      ret = `${yyyy}-${MM}-${dd}`;
      break;
  }
  return ret;
};
