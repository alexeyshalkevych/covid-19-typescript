import numeral from 'numeral';

const prettyPrintStat = (stat: any) =>
  stat ? `+${numeral(stat).format('0.0a')}` : '+0';

export default prettyPrintStat;
