import { Box, Stack, Step, StepLabel, Stepper, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { useState } from 'react';

const steps = [
    { name: 'Category', icon: CategoryOutlinedIcon, text: 'Hola como esta' },
    { name: 'Description', icon: DescriptionOutlinedIcon, text: 'Hola como esta' },
    { name: 'Partners', icon: GroupAddOutlinedIcon, text: 'Hola como esta' },
    { name: 'financing', icon: AccountBalanceOutlinedIcon, text: 'Hola como esta' },
    { name: 'ads', icon: ShareOutlinedIcon, text: 'Hola como esta' },
    { name: 'Finish', icon: RocketLaunchOutlinedIcon, text: 'Hola como esta' },
];

const CreateProjects = () => {

    const [formStep, setFormStep] = useState(-1)

    const backStep = () => {
        if (formStep <= 1) {
            setFormStep(0)
        } else {
            setFormStep(formStep - 1)
        }
    }

    const nextStep = () => {
        if (formStep == (steps.length - 1)) {
            setFormStep(formStep)

        } else {
            setFormStep(formStep + 1)

        }

    }

    return (
        <Stack sx={{ flex: 1 }}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={formStep} alternativeLabel>
                    {steps.map((label) => (
                       
                            <Step key={label.name}>
                                <StepLabel StepIconComponent={label.icon}>{label.name}</StepLabel>
                            </Step>
                    
                    ))}
                </Stepper>
                <ButtonGroup variant="text" color="primary" aria-label="">
                    <Button onClick={backStep}>Back</Button>
                    <Button onClick={nextStep}>Next</Button>
                </ButtonGroup>
            </Box>
        </Stack>
    )
}

export default CreateProjects