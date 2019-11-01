import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = makeStyles(theme => ({
    FormControl: {
        width:500
    }
}));

export default ({categories,onSubmit,setOpen,exercise})=>{

    const classes = styles();
    const [values,setValues] = useState(()=>(
        exercise?exercise:{
            title : 'Cat is the Hat',
            description : 'test 5 ',
            muscles : 'his si cat',
        }
    ));

    const handleChange = name =>event=>{
        setValues({...values,[name]:event.target.value})
    };

    const handleSubmit = ()=>{

       let editData =  exercise ? {...values}:{id:values.title.toLocaleLowerCase().replace(/ /g,'-'),...values};
        // setOpen(false);
        onSubmit(editData)

    };

    return (
        <form>
            <TextField
                label="Title"
                value={values.title}
                onChange={handleChange('title')}
                margin="normal"
                className={classes.FormControl}
            />

            <br />
            <FormControl  className={classes.FormControl} >
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select
                    value={values.muscles}
                    onChange={handleChange('muscles')}
                >
                    {
                        categories.map((category,index)=>{
                            return <MenuItem key={index} value={category}>{category}</MenuItem>
                        })
                    }

                </Select>
            </FormControl>

            <br />
            <TextField
                className={classes.FormControl}
                label="Description"
                multiline
                rows="4"
                value={values.description}
                onChange={handleChange('description')}
                margin="normal"
            />

            <br />

            <Button   color="primary" onClick={handleSubmit}>
                {exercise ? "Edit":"Create"}
            </Button>
        </form>
    );

}