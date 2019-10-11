// replace your-lambda-artifacts-bucket-name with the name of the bucket you created in step 1
// then, replace 'custom-prefix-' in siteAssetsBucket and apiAssetsBucket with your name / your org name / some unique identifier
// the resulting bucket names need to be globally unique

module.exports = {
    // required; bucket must be pre-made
    buildAssetsBucket: `terrahub-developer-portal-artifacts`,

    // required; created by stack
    stackName: `terrahub-dev-portal`,
    siteAssetsBucket: `terrahub-dev-portal-static-assets`,
    apiAssetsBucket: `terrahub-dev-portal-artifacts`,

    // optional values (uncomment and change values if you want to use them)

    // Change the name of the customer's table. Useful for multiple stacks. Defaults to `DevPortalCustomers`
    // customersTableName: `DevPortalCustomers`,

    // Turns on cognito hosted sign in / sign up UI; Defaults to `` (blank string)
    // cognitoDomainName: `auth-url`,

    // Set this to overwrite-content if you want to reset your custom content back to the defaults. Defaults to ``
    // staticAssetRebuildMode: `overwrite-content` // ONLY SET

    // AWS SAM CLI profile option: optional specific profile from your AWS credential file. Not used by default
    //awsSamCliProfile: "my-profile"
}
