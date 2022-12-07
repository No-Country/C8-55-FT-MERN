import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const FinancialForm = ({ setFinancialData, handleNext, handleBack }) => {


  const creationFinancial = () => {
    setFinancialData({
      amount: amount.value,
      wallet: wallet.value
    })
    handleNext()
  }



  return (
    <Stack sx={{ display: 'flex', gap: '1em' }}>
      <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em', width: 700 }}>
          <TextField
            fullWidth
            label='Cantidad a recaudar'
            size='small'
            id='amount'
            required />

          <TextField
            fullWidth
            label='Wallet cripto'
            size='small'
            helperText="Introduzca una cartera de la red TRON"
            id='wallet'
            required />
        </Box>
        <Box sx={{ width: 700, padding: '1em', backgroundColor: '#23222F', borderRadius: '0.5em', textAlign: 'justify' }}>
          <Typography variant="body1" color="white">Agregue una cartera de criptomonedas en donde recibir donaciones e inversiones tanto de empresas como de usuarios.</Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <div>
          <Button
            variant="contained"
            onClick={creationFinancial}
            sx={{ mt: 1, mr: 1 }}
          >
            Continue
          </Button>

          <Button

            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Back
          </Button>
        </div>
      </Box>
    </Stack>
  )
}

export default FinancialForm