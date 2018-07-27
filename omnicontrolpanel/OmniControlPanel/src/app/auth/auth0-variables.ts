interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
 /* test  clientID: 'MIC1W2QmDhxmDm90XaUQDo0-ATS7NKN4',
  domain: 'lahjeq.auth0.com',
  callbackURL: 'http://localhost:4200/callback' */

  /* production */
   clientID: '7qe4pWfrHTbY1b3PcKr9IW4Izg6SsKHu',
   domain: 'lahjeq.auth0.com',
   callbackURL: 'http://104.154.73.19/'
};
