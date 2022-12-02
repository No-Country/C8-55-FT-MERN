import React from "react";
import { SnackbarProvider, useSnackbar } from 'notistack';

export default function IntegrationNotistack() {

    return (
      <SnackbarProvider maxSnack={3}>
        <MyApp />
      </SnackbarProvider>
    );
  }