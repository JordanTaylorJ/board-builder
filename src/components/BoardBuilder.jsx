import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Selector from './Selector';

/*
const steps = [
  {
    label: 'Select a deck',
    description: `Standard decks are best for tricks and skateparks. Cruiser decks
                are similar to a standard deck, but typically with only a rear kicktail,
                making them ideal for short commutes. Old school decks are typically
                wider and longer than a standard deck. The longboard, is intended for 
                long distances, high speeds, and downhill riding.`,
  },
  {
    label: 'Choose your trucks',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Select your wheels',
    description: `The main differences between wheels are size, hardness, and grip.
              Harder smaller wheels are best in skateparks and bigger, grippier
              wheels handle better for distance and commute rides.`,
  },
  {
    label: 'Add risers',
    description: `While risers are not necessary, they add height between the board
                and trucks, giving the rider more clearance for sharper, snappier 
                turns and tricks.`,
  },
  {
    label: 'Grip tape',
    description: `You'll want to add some grip to your deck. The standard route is
                griptape, but you can also use a spray-on grip. This is typically
                for preserving the asthetics of the board.`,
  },
]; */

const BoardBuilder =({boards, onAddBoard}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/steps")
    .then(r => r.json())
    .then(data => setSteps(data))
  }, []);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                  <Selector parts={step.parts} boards={boards} onAddBoard={onAddBoard} />
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default BoardBuilder;