import React from 'react';
import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import styled from 'react-emotion';

const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    padding: '20px'
  }) 

  const FlexSpacer = styled('div')({
    display: 'flex',
    flex: '1 0 auto'
  })




const InvestType = () => (
    <CardContainer>
    <Card>
        <CardContent> Individual</CardContent>
        <CardActions>
          <Button size="small">create</Button>
        </CardActions>
    </Card>
    <FlexSpacer />
    <Card>
        <CardContent> Joint</CardContent>
        <CardActions>
          <Button size="small">create</Button>
        </CardActions>
    </Card>
    <FlexSpacer />
    <Card>
        <CardContent> Company</CardContent>
        <CardActions>
          <Button size="small">create</Button>
        </CardActions>
    </Card>
    <FlexSpacer />
    <Card>
        <CardContent> Trustee</CardContent>
        <CardActions>
          <Button size="small">create</Button>
        </CardActions>
    </Card>
    <FlexSpacer />
    </CardContainer>
)

export default InvestType