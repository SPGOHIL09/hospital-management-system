import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GaugeIcon from '@mui/icons-material';
import HotelIcon from '@mui/icons-material/Hotel';
import KeyIcon from '@mui/icons-material/Key';
import ScissorsIcon from '@mui/icons-material';
import EyeIcon from '@mui/icons-material/Visibility';
import EggIcon from '@mui/icons-material/PregnantWoman';
import { Home } from '@mui/icons-material';

export default function SpecialtiesCarousel() {
  return (
    <Grid container spacing={3} alignItems="center" justify = "space-between" sx= {{margin : 10}}>
    <Grid item>
      <Button color="primary" variant="text">
        <ChevronLeftIcon />
      </Button>
    </Grid>
    {categories.map((category, index) => (
      <Grid key={index} item direction="row" alignItems="center">
        <Paper elevation={3} className="rounded-full bg-blue-100 p-4">
          {getIconByCategory(category)}
        </Paper>
        <Typography variant="body2" color="textSecondary" className="font-semibold text-gray-700">
          {category}
        </Typography>
      </Grid>
    ))}
    <Grid item>
      <Button color="primary" variant="text">
        <ChevronRightIcon />
      </Button>
    </Grid>
    <Grid item container justifyContent="center">
      <Button
        className="rounded-md border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-500"
        variant="outlined"
      >
        View All
      </Button>
    </Grid>
  </Grid>
  );
}

const categories = [
  'Endocrinology',
  'Eye Care / Ophthalmology',
  'General Surgery',
  'In Vitro Fertilization (IVF)',
  'Internal Medicine',
  'Nephrology',
];

function getIconByCategory(category) {
  switch (category) {
    case 'Endocrinology':
      return <Home sx={{ fontSize: 40, color: 'blue' }} />;
    case 'Eye Care / Ophthalmology':
      return <Home sx={{ fontSize: 40, color: 'blue' }} />;
    case 'General Surgery':
      return <Home sx={{ fontSize: 40, color: 'blue' }} />;
    case 'In Vitro Fertilization (IVF)':
      return <Home sx={{ fontSize: 40, color: 'blue' }} />;
    case 'Internal Medicine':
      return <Home sx={{ fontSize: 40, color: 'blue' }} />;
    case 'Nephrology':
      return <Home sx={{ fontSize: 40, color: 'blue' }} />;
    default:
      return null;
  }
}
