import React from 'react';
import {styled, alpha, Accordion, AccordionSummary, AccordionDetails, Typography, InputBase, Slider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';



function valuetext(value) {
  return `${value} €`;
}

const RangeSlider = () => {
  const [value, setValue] = React.useState([1000, 10000]); // min and max price

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ margin: '0 auto', paddingTop: '20px' }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};


const FilterInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 40,
    border: '1px solid #EDEDED',
    width: 105,
    height: 30,
    paddingLeft: 16,
    fontSize: 12,
    boxSizing: 'border-box',

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.15)} 0 0 0 0.12rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

/* eslint-disable react/jsx-props-no-spreading */
const OutlinedButton = styled((props) => <Button variant="outlined"  {...props} />)(({ theme }) => ({
  borderRadius: 40,
  border: '1px solid #EDEDED',
  background: 'none',
  fontWeight: 500,
  fontSize: 12,
  lineHeight: 15,
  padding: '0 15px',
  textTransform: 'none',
  width: 105,
  height: 40,

  '&:active': {
    borderColor: theme.palette.primary.main,
  },

  '&:hover': {
    borderColor: theme.palette.primary.main,
  },

}));

const AccordionTitle = styled((props) => <Typography variant="body1" {...props} />)(() => ({
  padding: 0,
  flexShrink: 0,
  fontWeight: 700,
}));

const CatalogMainFilter = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* --------- Price ---------- */}
      <Accordion sx={{ boxShadow: 0 }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          sx={{ padding: '0' }}
          expandIcon={<AddIcon color="primary" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionTitle>Price</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FilterInput />
            <FilterInput />
          </Box>
          <RangeSlider />
        </AccordionDetails>
      </Accordion>

      {/* --------- Tourists ---------- */}

      <Accordion sx={{ boxShadow: 0 }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          sx={{ padding: '0' }}
          expandIcon={<AddIcon color="primary" />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <AccordionTitle>Tourists</AccordionTitle>
        </AccordionSummary>
        <Grid container spacing={1} >
          <Grid><OutlinedButton>1 person</OutlinedButton></Grid>
          <Grid><OutlinedButton>1 person</OutlinedButton></Grid>
          <Grid><OutlinedButton>1 person</OutlinedButton></Grid>
          <Grid><OutlinedButton>1 person</OutlinedButton></Grid>
          <Grid><OutlinedButton>1 person</OutlinedButton></Grid>
          <Grid><OutlinedButton>1 person</OutlinedButton></Grid>
        </Grid>
      </Accordion>

      {/* --------- Region ---------- */}

      <Accordion sx={{ boxShadow: 0 }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
        sx={{ padding: '0' }}
          expandIcon={<AddIcon color="primary" />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <AccordionTitle>Region</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas
            augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* --------- ??? ---------- */}

      {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
        sx={{ padding: '0' }}
          expandIcon={<AddIcon color="primary" />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <AccordionTitle>???</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas
            augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
};


export default CatalogMainFilter;
