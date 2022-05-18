
const apiBaseUrl: string = 'https://weddingjava-app-2.herokuapp.com'
const APPLICATION_NAME: string = '/wedding'

export const environment = {
  production: true,
  partnerApiUrl : apiBaseUrl + APPLICATION_NAME + '/partner-api',
  customerApiUrl: apiBaseUrl + APPLICATION_NAME + '/customer-api'
};
