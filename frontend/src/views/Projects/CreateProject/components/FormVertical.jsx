import React, { useState } from 'react'
import axios from 'axios'
import { Alert, AlertTitle, Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import CategoryForm from './CategoryForm';
import DescriptionForm from './DescriptionForm';
import FinancialForm from './FinancialForm';
import { useNavigate } from 'react-router-dom'
import getConfig from '../../../../config';

const steps = [
    {
        label: 'Project Description',
        form: <DescriptionForm />,
    },
    {
        label: 'Financial Description',
        form: <FinancialForm />,
    },
    {
        label: 'Create an ad',
        form: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];


const FormVertical = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [descriptionData, setDescriptionData] = useState()
    const [financialData, setFinancialData] = useState()
    const [img, setImg] = useState()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const navigate = useNavigate()

    const createProject = () => {

        const body = {
            title: descriptionData.title,
            subtitle: descriptionData.subtitle,
            description: descriptionData.description,
            risk: descriptionData.risk,
            textUrl: descriptionData.url,
            projectImg: descriptionData.img,
            amount: financialData.amount,
            wallet: financialData.wallet,
        }

        axios.post('http://localhost:3000/project/create' , body, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        console.log(body)
     

        handleNext()
    }



    return (
        <Box sx={{ maxWidth: 1000, maxHeight: 710, overflow: 'scroll' }}>
            <Stepper activeStep={activeStep} orientation="vertical">

                <Step>
                    <StepLabel

                    >
                        Project Description
                    </StepLabel>
                    <StepContent>
                        <DescriptionForm handleBack={handleBack} handleNext={handleNext} setDescriptionData={setDescriptionData} />

                    </StepContent>
                </Step>
                <Step>
                    <StepLabel

                    >
                        Financial Description
                    </StepLabel>
                    <StepContent>
                        <FinancialForm handleBack={handleBack} handleNext={handleNext} setFinancialData={setFinancialData} />

                    </StepContent>
                </Step>
                <Step>
                    <StepLabel

                    >
                        Finish
                    </StepLabel>
                    <StepContent>
                        <Alert sx={{ width: '100%' }} severity="info">
                            <AlertTitle>Info</AlertTitle>
                            Esta a punto de crear un proyecto de exposicion global — <strong>Se precavido</strong>
                        </Alert>
                        <Box sx={{ mb: 2 }}>
                            <div>
                                <Button
                                    variant="contained"
                                    onClick={createProject}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Finish
                                </Button>

                                <Button

                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Back
                                </Button>
                            </div>
                        </Box>
                    </StepContent>
                </Step>


            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={() => navigate('/projects')} sx={{ mt: 1, mr: 1 }}>
                        Ver todos los proyectos
                    </Button>
                </Paper>
            )}
        </Box>
    );
}

export default FormVertical