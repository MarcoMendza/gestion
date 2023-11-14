import { Card, CardContent, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export const CardQuestion = ({ pregunta, opciones = [], selectedValue, onRadioChange }) => {
    return (
        <Card variant="outlined" sx={{ minWidth: 275, mb: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {pregunta}
                </Typography>
                <br/>
                <RadioGroup
                    value={selectedValue || ''}
                    onChange={onRadioChange}
                >
                    {opciones.map((opcion, index) => (
                        <FormControlLabel key={index} value={opcion} control={<Radio />} label={opcion} />
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
};
