import React, { useState } from "react";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import {Dialog} from "@mui/material";
import {DialogActions} from "@mui/material";
import {DialogContent} from "@mui/material";
import {DialogTitle} from "@mui/material";


function AddItem(props) {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({
        product:'',
        amount: ''
    });

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        setItem({...item,
        [e.target.name]: e.target.value});
    }
    const addItem = () => {
        props.addItem(item);
        setItem({product: '', amount: ''});
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>
                Add Item
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Item</DialogTitle>
                <DialogContent>
                    <TextField value={item.product} margin="dense"
                    onChange={handleChange} name="product"
                    label="Product" fullWidth />
                    <TextField value={item.amount} margin="dense"
                    onChange={handleChange} name="amount"
                    label="Amount" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={addItem}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddItem;