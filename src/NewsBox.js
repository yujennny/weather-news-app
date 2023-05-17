import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import News from './News';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(i) {
  return (
    <Card variant = "outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography component="div">
          {News(i)}
        </Typography>
      </CardContent>
    </Card>
  );
}