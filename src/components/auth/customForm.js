import * as React from 'react';
import { Field, Form } from 'react-final-form';
import {
    Button,
    CardActions,
    CircularProgress,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate, useLogin, useNotify, useSafeSetState } from 'ra-core';




const useStyles = makeStyles(
    () => ({
        form: {
            padding: '0 1em 1em 1em',
        },
        input: {
            marginTop: '1em',
        },
        button: {
            width: '100%',
        },
        icon: {
            marginRight: 0,
        },
    }),
    { name: 'RaLoginForm' }
);



const CustomForm = (props) => {
    console.log(props)
    const { redirectTo } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const login = useLogin();
    const translate = useTranslate();
    const notify = useNotify();
    const classes = useStyles(props);

   

    const submit = event => {
        event.preventDefault()
        console.log(event)
        setLoading(true);
        login({email:event.target[0].value,password: event.target[1].value }, redirectTo)
            .then(() => {
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                notify( 
                    typeof error === 'string' ? error : 
                        typeof error === 'undefined' || !error.message ? 'ra.auth.sign_in_error' : error.message, 'warning',
                        {
                            _:
                                typeof error === 'string'
                                    ? error
                                    : error && error.message
                                    ? error.message
                                    : undefined,
                        });
            });
    };

    return (
        <form onSubmit={submit}>
            <div className={classes.form}>
                <div className={classes.input}>
                    <TextField
                        autoFocus
                        id="email"
                        name="email"
                        label={translate('ra.auth.email')}
                        disabled={loading}
                    />
                </div>
                <div className={classes.input}>
                    <TextField
                        id="password"
                        name="password"
                        label={translate('ra.auth.password')}
                        type="password"
                        disabled={loading}
                        autoComplete="current-password"
                    />
                </div>
            </div>
            <CardActions>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    className={classes.button}
                >
                    {loading && (
                        <CircularProgress
                            className={classes.icon}
                            size={18}
                            thickness={2}
                        />
                    )}
                    {translate('ra.auth.sign_in')}
                </Button>
            </CardActions>
        </form>
        
    );
};


export default CustomForm;
