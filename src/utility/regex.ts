export const rgx_insecure = '[$()<>""\'#%{}~!"^|]'; //unsecure chars
export const rgx_date = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
export const rgx_frNo = /^[۰-۹]+$/;
export class dic {
  _en: string = "";
  _fa: string = "";
  constructor(en: string, fa: string) {
    this._en = en;
    this._fa = fa;
  }
}

export const turnToFa = (inputNumber: string) => {
  const persian = [
    new dic("0", "۰"),
    new dic("1", "۱"),
    new dic("2", "۲"),
    new dic("3", "۳"),
    new dic("4", "۴"),
    new dic("5", "۵"),
    new dic("6", "۶"),
    new dic("7", "۷"),
    new dic("8", "۸"),
    new dic("9", "۹"),
  ];

  const number = numberWithCommas(inputNumber)
  let rslt = "";
  if (number != undefined) {

    const tmp_number = number.toString().split("");
    for (let i = 0; i < tmp_number.length; i++) {
      let x: any;
      if (tmp_number[i] == '.' || tmp_number[i] == ',') {
        rslt = rslt + tmp_number[i];
      } else {
        const x = parseInt(tmp_number[i]);
        rslt = rslt + persian[x]._fa;
      }
    }
  }
  return rslt;
};

export const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
