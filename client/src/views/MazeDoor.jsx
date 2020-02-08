import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { TextField, Button, Grid, Card, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core'


export default () => {
    const [ password, setPassword ] = useState("");
    const [ door, setDoor ] = useState(false);
    const [ fail, setFail ] = useState("");

    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })

    const classes = useStyles();

    const onSubmitPassword = e => {
        e.preventDefault();
        if (password == "OPIA"){
            console.log("you unlocked the door")
            setDoor(true);
        }
        else{
            setFail("that didn't seem to work....")
        }
    }
    
    let onchangeHandlerPassword = e => {
        e.preventDefault();
        setFail("");
        setPassword(e.target.value);
        
    }

    return (
        <div className="Maze">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography>
                                (There's a door! The wizard must be behind it. The door reads:)<br />
                                "To open and enter through the door, firmly SHOUT the password and enter"<br />
                            </Typography>
                            <CardActions style={{justifyContent: 'center'}}>
                                
                                <form onSubmit={onSubmitPassword}>
                                    {door == false ? <h4>Firmly shout the password</h4> : <h4>You Opened the Door!</h4> }
                                    {door == false ? <TextField onChange={e => {setPassword(e.target.value); setFail("")}} id="outlined-basic" label="Magic Word" variant="outlined" /> : <div></div> }
                                </form>

                            </CardActions>
                            <Typography>
                                { door == true ? <div><Button variant="outlined" onClick={() => navigate("/maze/center")}>Enter through the door</Button></div> : <div></div> }
                                { door == false ? <p>{fail}</p> : <p></p> }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            { door == false ? <img className="Door" src="https://attachment.outlook.live.net/owa/michael_w_butler@live.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATMwMAItOWI2OC1iNmNmLTAwAi0wMAoARgAAA0vmBjXS1eFDpAcGQ6%2F5rOEHABK1fyeDPpxEl2sr4MRSuRoAAAIBDAAAABK1fyeDPpxEl2sr4MRSuRoAA%2BrmU4cAAAABEgAQAJD1jDWCuDlGsZdlRAmnB6Y%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020012701.07&isc=1&X-OWA-CANARY=zJFTOmuAlkmHXYUEFZmpsuDZrBFBpdcY-bSNhaPKaLP8ftz84-6sgwc_DohlDpHJv0oZLObr2f8.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJTSVAiLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTE5NjYwOC0yNjA3MzMxMDIzXCIsXCJwdWlkXCI6XCI4NDQ0Mjc1Mzc0NjI5OTFcIixcIm9pZFwiOlwiMDAwMzAwMDAtOWI2OC1iNmNmLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1ODAzNjAzMTIsImV4cCI6MTU4MDM2MDkxMiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.ShOjgCNPSC49pfXSmgc6mdPanTiPWo9v4rUN_DiwkN-Q1jY0XRA18CeURmGHHnq0GeheEBN4W5_9tO4hbmBVlnpOhoxVksZ30Wlgi6HiCMevJuyNZRo_vznVGSNterjp1rSIoYCwzY1qHFATGgS2kp8AUQRi8PJU1hSpekwUsaG0tlzmWv3ARE_cCIqUikHNQ4Fv2rXhfnykBvfeJltPfMM-BQIRrogmyVOJIgNiJNCanCrzkAqUpCuJbI6oZPojW1ehbdUQIpACtqtKWhRbJK5OkUILnSs9BQkeCL8qMjhW7WGEM80-qKvruqFR-OMxYEwvxruNdu28Mxk6PWDflA&animation=true" /> : <></> }
            { door == true ? <img className="Door" src="https://attachment.outlook.live.net/owa/michael_w_butler@live.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATMwMAItOWI2OC1iNmNmLTAwAi0wMAoARgAAA0vmBjXS1eFDpAcGQ6%2F5rOEHABK1fyeDPpxEl2sr4MRSuRoAAAIBDAAAABK1fyeDPpxEl2sr4MRSuRoAA%2BrmU4cAAAABEgAQAIm%2BSqau6TdCgy7f7rlhdn0%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020012701.07&isc=1&X-OWA-CANARY=zJFTOmuAlkmHXYUEFZmpsuDZrBFBpdcY-bSNhaPKaLP8ftz84-6sgwc_DohlDpHJv0oZLObr2f8.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJTSVAiLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTE5NjYwOC0yNjA3MzMxMDIzXCIsXCJwdWlkXCI6XCI4NDQ0Mjc1Mzc0NjI5OTFcIixcIm9pZFwiOlwiMDAwMzAwMDAtOWI2OC1iNmNmLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1ODAzNjAzMTIsImV4cCI6MTU4MDM2MDkxMiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.ShOjgCNPSC49pfXSmgc6mdPanTiPWo9v4rUN_DiwkN-Q1jY0XRA18CeURmGHHnq0GeheEBN4W5_9tO4hbmBVlnpOhoxVksZ30Wlgi6HiCMevJuyNZRo_vznVGSNterjp1rSIoYCwzY1qHFATGgS2kp8AUQRi8PJU1hSpekwUsaG0tlzmWv3ARE_cCIqUikHNQ4Fv2rXhfnykBvfeJltPfMM-BQIRrogmyVOJIgNiJNCanCrzkAqUpCuJbI6oZPojW1ehbdUQIpACtqtKWhRbJK5OkUILnSs9BQkeCL8qMjhW7WGEM80-qKvruqFR-OMxYEwvxruNdu28Mxk6PWDflA&animation=true" /> : <></> }
        </div>
    )
}

