import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import numeral from 'numeral';
import './InfoBox.css';

interface IINfoBoxProps {
  title: string;
  cases: number;
  total: number;
  active: boolean;
  isRed?: boolean;
  onClick: () => void;
}

const InfoBox: React.FC<IINfoBoxProps> = ({
  title,
  cases,
  total,
  active,
  isRed,
  onClick,
}: IINfoBoxProps) => {
  return (
    <Card
      className={`infoBox ${active && 'infoBox--selected'} ${
        isRed && 'infoBox--red'
      }`}
      onClick={onClick}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          {numeral(total).format('0.0a')} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
