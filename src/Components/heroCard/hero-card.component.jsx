import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const HeroCard = () => {
    const [value, setValue] = React.useState(new Date());

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker 
                    disableFuture
                    label="Responsive"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </>
    )
}

export default HeroCard