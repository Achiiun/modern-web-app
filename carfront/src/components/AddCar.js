import React, {useState} from "react";
import { Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function AddCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand:'',
        model: '',
        color: '',
        year: '',
        fuel: '',
        price: ''
    });
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose= () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    }
    const handleSave= () => {
        props.addCar(car);
        handleClose();
    }

    return (
        <div>
            <Button variant="contained"
                onClick={handleClickOpen}>
                New Car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField label="Brand" name="brand" 
                        autoFocus
                        variant="standard" value={car.brand}
                        onchange={handleChange} />
                        <TextField label="Model" name="model" 
                        variant="standard" value={car.model}
                        onchange={handleChange} />
                        <TextField label="Color" name="color" 
                        variant="standard" value={car.color}
                        onchange={handleChange} />
                        <TextField label="Year" name="year" 
                        variant="standard" value={car.year}
                        onchange={handleChange} />
                        <TextField label="Price" name="price" 
                        variant="standard" value={car.price}
                        onchange={handleChange} />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCar;