import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select from './Select'; 

const BoardBuilder =({handleAddBoard}) => {
  const [activeStep, setActiveStep] = useState(0);

  const [steps, setSteps] = useState([]);

  const [newBoard, setNewBoard] = useState({
    deck: 'standard',
    trucks: 'standard kingpin',
    wheels: 'skatepark',
    risers: 'risers',
    griptape: 'griptape'
  });
  
  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    if (e.target.name === "5") {
      handleAddBoard(newBoard)
    } 
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }; 

  const handleReset = () => {
    setActiveStep(0)
    setNewBoard({
      deck: 'standard',
      trucks: 'standard kingpin',
      wheels: 'skatepark',
      risers: 'risers',
      griptape: 'griptape'
    })
  };

  useEffect(() => {
    fetch("http://localhost:3001/steps")
    .then(r => r.json())
    .then(data => setSteps(data))
  }, []);  

  const handleChange = (e) => {
    setNewBoard({...newBoard, [e.target.name] : e.target.value})
  };

  return (
    <>
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep}  orientation="vertical">
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
                  <Select 
                    step={step} 
                    handleAddBoard={handleAddBoard}
                    handleChange={handleChange}
                  />
                <div>
                  <Button
                    variant="contained"
                    name={step.id}
                    onClick={(e) => handleNext(e)}
                    sx={{ mt: 1, mr: 1}}
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
          <Typography>Click on the results - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    <Box> 
      <img 
      src={"https://images.unsplash.com/photo-1546345352-9b13905ebd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80}/"}
      alt="skate"
      />
    </Box>
    </>
  );
}

export default BoardBuilder;