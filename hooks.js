
/**
 * Hook (callback) functions - catch/modify SAML flow
 */

// Executed on /signin endpoint before completing calling samlp.auth()
const onSignInBeforeSamlAuth = (authOptions, req) => {
    console.log("hook onSignInBeforeSamlAuth");
};

module.exports = {
    onSignInBeforeSamlAuth
};