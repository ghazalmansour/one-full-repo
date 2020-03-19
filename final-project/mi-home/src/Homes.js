import Home from './Home';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import HomeDesign from './HomeDesign'


export default function Homes({homes}) {
//home design 
const [open, setOpen] = React.useState(false);
const [selectedHome, selectHome] = React.useState({});

const handleClickOpen = () => {
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
  };

/////////////

const numHomes = homes.length;
const numPages = Math.ceil(numHomes / 5);

const [activeStep, setActiveStep] = React.useState(0);
const homesOnPage =homes.slice(activeStep * 5, (activeStep * 5) + 5);
    
function handleNext () {
     setActiveStep(prevActiveStep => prevActiveStep + 1);
};

function handleBack () {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
};



    return (
        <div className="homes">
            <HomeDesign open={open} home = {selectedHome} handleClose={handleClose}/>
            <Typography variant="h3">
                MY HOME
            </Typography>

            {
                homesOnPage.map(
                    (home,i)=><Home key={i} home={home} onClick={()=>{ 
                    handleClickOpen();    
                    selectHome(home)
                    
                    }} />
                )
            }

    <div>
        Page {activeStep} of {numPages} 
    </div>
    <MobileStepper
      variant="progress"
      steps={numPages}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
          Next
         <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 4}>
         <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
    </div>
    )
}