export const environment = {
    production: false,
    apiBaseUrl: "https://liuqbotdemo.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "913f18ec-7f26-4c5f-a816-784fe9a58edd",
        clientId: "39bf054c-f3a0-4d81-9847-c220a520bdb6",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
