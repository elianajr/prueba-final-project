import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import '../../styles/inputphoto.scss'

export const AddSpotForm = props => {
    const { store, actions } = useContext(Context);

    const kitesurf = <img src="https://i.ibb.co/ssMzJnP/mdi-kitesurfing.png" alt="surf" />
    const snorkel = <img src="https://i.ibb.co/JBVt1Tt/mdi-diving-snorkel.png" alt="snorkel" />
    const surf = <img src="https://i.ibb.co/GVKWPVT/map-surfing.png" alt="kitesurf" />
    const diving = <img src="https://i.ibb.co/pfCWKG5/mdi-diving-helmet.png" alt="diving" />

    const [open, setOpen] = React.useState(false);
    const [sport, setSport] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [form, setForm] = React.useState({
        account_id: 1,
        sport_id:null,
        name:"",
        photo:"",
        level:"",
        description:"",
        latitude:"",
        longitude:"",
    })

    const sports = [
        {
            value: 4,
            label: snorkel,
            name: 'Snorkel',
        },
        {
            value: 2,
            label: surf,
            name: 'Surf',
        },
        {
            value: 3,
            label: kitesurf,
            name: 'KiteSurf',
        },
        {
            value: 1,
            label: diving,
            name: 'Scuba',
        },

    ];

    const levels = [
        {
            value: 'Noob',
            label: 'Noob',
        },
        {
            value: 'Experienced',
            label: 'Experienced',
        },
        {
            value: 'Professional',
            label: 'Professional',
        },
    ];

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        if (name == "name") {
            setForm({ ...form, name: value });
        }
        if (name == "photo") {
            setForm({ ...form, photo: value });
        }
        if (name == "sport") {
            setSport(e.target.value);
            setForm({ ...form, sport_id: value });
        }
        if (name == "level") {
            setLevel(e.target.value);
            setForm({ ...form, level: value });
        }
        if (name == "description"){
            setForm({...form, description: value})
        }        
        
    };
    
    useEffect (()=>{
        setForm({...form, latitude: props.lat.toString(), longitude: props.lng.toString()});
    },[props.lat,props.lng])
    

    const submitForm =()=>{
        props.spotForm(form)
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const setimage=(e)=>{
		props.files(e.target.files[0])
	}

    return (
        <div className="hotspot-midbody">
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add A HOTSPOT</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the HotSpot Name Please
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="outlined-basic"
                        name="name"
                        label="Name"
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <div>   
                          <input id="inputphoto" className="uploadinput__addphoto" accept=".jpg,.png" type="file" onChange={setimage}/>
                         <label htmlFor="inputphoto" className="uploadinput__labelphoto">Add a photo of the place</label>
                         <hr></hr>
                   </div>
                    <DialogContentText>
                        Select a Sport from here please!
                    </DialogContentText>
                    <TextField
                        id="outlined-select-sport"
                        select
                        name="sport"
                        label="sport"
                        value={sport}
                        onChange={handleChange}
                        helperText="Add a Sport"
                    >
                        {sports.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}{option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <DialogContentText>
                        Add a description of the places as acurate as you want
                    </DialogContentText>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        name="description"
                        multiline
                        rows={4}
                        onChange={handleChange}
                        defaultValue=
                        "This place is amazing!! Location, Depth, Visibility, Water temperature, Type of diving, Level, Fauna and Flora, Not lose"
                    />
                    <DialogContentText>
                        Select level
                    </DialogContentText>
                    <TextField
                        id="outlined-select-sport"
                        select
                        name="level"
                        label="Level"
                        value={level}
                        onChange={handleChange}
                        helperText="Add a Sport"
                    >
                        {levels.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={(e)=>{
                        submitForm(e);
                        handleClose(e);                      
                        }}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
AddSpotForm.propTypes = {
    spotForm: PropTypes.func,
    lat: PropTypes.number,
    lng: PropTypes.number,
    files:PropTypes.func
};
