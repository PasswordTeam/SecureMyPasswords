import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={4}> 
        {/* Tried to replace logo image with custom "application-logo.png", but doesn't appear on page */}
          <Image size='small' src="\images\application-logo.png"/> 
        </Grid.Column>

        <Grid.Column width={8}>
          <h1>Welcome to SecureMyPasswords!</h1>
          <p>A simple, secure, and easy to use password manager</p>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;
