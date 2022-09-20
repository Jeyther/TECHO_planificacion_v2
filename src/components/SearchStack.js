import React from 'react';
import { styled, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';


const GoalsQuantity = styled(Typography)(({ theme }) => ({

    backgroundColor: theme.palette.mode === "light" ? "#333" : "#F3F3F4",
    color: theme.palette.background.default,
    borderRadius: "50%",
    padding: theme.spacing(2.25),
    lineHeight: 0.6,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: "bold",

}));

const SearchStack = ({quantity, title,searchPlaceholder}) => {
    return (

        <Toolbar disableGutters sx={{ mb: 2 }}>

            <GoalsQuantity>{quantity}</GoalsQuantity>
            <Typography variant='subtitle1' sx={{ fontWeight: "bold", marginLeft: 2,textTransform: 'uppercase' }}>{title}</Typography>
            <SearchBar title = {searchPlaceholder} />

        </Toolbar>

    );
}

export default SearchStack;
