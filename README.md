# AirDNA Front End Code Exercise

Hey there! We'd like you to work on a simple React app which fetches the weather forecast from an API based on user search. The API doesn't support CORS, so you'll find it proxied through create-react-app. You can hit the API by making a request to `/api`.

There are 2 endpoints you'll need:

- Search Endpoint - Returns locations for a search string
  - GET `/api/location/search/?query=${query}`
- Location Endpoint - Returns weather for a location ID
  - GET `/api/location/${locationId}/`

The temperature comes back from the API in celsius, you'll find a conversion function in `utils/conversions`

Here's a list of priorities for you. Please don't spend more than 2-3 hours. We're looking for how you think and approach problems, not overly concerned with a 100% polished UI that you'd post on ProductHunt.

1. Working search & fetching weather data
1. Handle errors within the UI (for example, search returns no results)
1. Extended forecast in UI
1. Visual Styles

When you have completed this, please push to a repo on github and either send us a public link or add @mckernanin + @danhannigan as collaborators if you would rather make the repository private.
# simple-weather-app
