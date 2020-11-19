import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useStyle from "../../../styles/style";
import Button from '@material-ui/core/Button';
export default function MaterialPage() {
    const classes  = useStyle();
    return (
        <div className = {classes.content}>
            <h1 className = {classes.title}>This is materialPAge</h1>
            <Button variant="contained" color="secondary">
                Primary
            </Button>
            <span>
                Hoang123
            </span>
        </div>
    )
}
