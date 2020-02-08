import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Card, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core'


export default () => {
    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })

    const classes = useStyles();

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
                        <br />
                        "Oh hello there, I have been roaming around these walls for sometime now.
                        I learned that the Wizard is named Orval and he contains a magical gem call Peridot, he'll give you one but
                        you have to answer all of his questions. His questions are usually about the Labyrinth so pay attention to things."
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Which way would you like to go?
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="outlined" onClick={() => navigate("/maze/5")} >Left</Button> 
                    <Button variant="outlined" onClick={() => navigate("/dead_end")} >Right</Button>
                </CardActions>
            </Card>
                <img className="OldMan" src="https://attachment.outlook.live.net/owa/michael_w_butler@live.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATMwMAItOWI2OC1iNmNmLTAwAi0wMAoARgAAA0vmBjXS1eFDpAcGQ6%2F5rOEHABK1fyeDPpxEl2sr4MRSuRoAAAIBDAAAABK1fyeDPpxEl2sr4MRSuRoAA%2BrmU4YAAAABEgAQALR7r%2Bzk21RPtOYna82n1cQ%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020012003.15&isc=1&X-OWA-CANARY=60xKtzcr1UOCaydniK6gZsAX9tM6pdcYLq1m6v8oV4Xe7h_6VKyo-0F3N0r3JcUQT34lZGLMAwg.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJTSVAiLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTE5NjYwOC0yNjA3MzMxMDIzXCIsXCJwdWlkXCI6XCI4NDQ0Mjc1Mzc0NjI5OTFcIixcIm9pZFwiOlwiMDAwMzAwMDAtOWI2OC1iNmNmLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1ODAzNTc2MzcsImV4cCI6MTU4MDM1ODIzNywiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.CgBQQXOCaW3tgeab6tbjr8jkdUMMoGUkR4ObUovLHLUKjAXPDQhYUm7nHg9VFKI9riuOhQM3W2sk82jhR1sso9u6V_mWK_8VzTGpYonm8S0y3Kr7tWHJVOSvvXFWa8daYnMcAhfUFONVNefsUwZfI6qkF2SHhpR4oIblBDEwMrxTREpLnuUll-ItxXPKvY3HxB4VdSYnH3h0WAopU3EuKKLOURzXqlylfy6D4xJ4JVW26YDe7s0Eg7DH9RuoAkPyEqexjYccepspu99pXqBODUyonGTKMvGQv4y4zu3Gebyvx5IMSN2AYxD-QVv3nGrSfZxiNl_ukfjtq68g0bU_nA&animation=true" />
            </Grid>
        </div>
    )
}

//interact with the oldman?