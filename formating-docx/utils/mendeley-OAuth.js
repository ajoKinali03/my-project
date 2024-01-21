var sdk = require('@mendeley/api');
var api = sdk({
  authFlow: sdk.Auth.implicitGrantFlow({
    clientId: 17480
  })
});