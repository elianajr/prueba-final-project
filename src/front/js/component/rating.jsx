import React, { useState } from "react";
import Rating from '@mui/material/Rating';

const Rate = () =>{
    const [value, setValue]= useState(3)
    const dropRate = <img src="https://i.ibb.co/Qf60tYs/Drop2.png" alt="drop full" />
    const dropEmpyRate = <img src="https://i.ibb.co/ySL9Lwc/Drop5.png" alt="empy drop" />
return (
    <div>
        <Rating
        name="drop-rating"
        value={value}
        max={5}
        icon={dropRate}
        emptyIcon={dropEmpyRate}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}/>
    </div>
)
}

export default Rate;