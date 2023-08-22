# ParkNow

ParkNow is a website that allows users to search for car park lots availability around Singapore. 

The website is available [here](https://parknow.fly.dev/). The [data](https://datamall.lta.gov.sg/content/datamall/en.html) used is provided by LTA's Carpark Availability API.

## Run the application locally

### Requirements
- [Node.js 16](https://nodejs.org/download/release/v16.18.1/)

### Install and run in a local environment
1. Install dependencies.
```
cd server
npm install
cd ../client
npm install
```
2. Under the `server` folder, create a `.env` file with the following contents filled up:
```
# mongoDB uri
MONGODB_URI=

PORT=3001

# api key from LTA
API_KEY=

# mogonDB uri for testing
TEST_MONGODB_URI=
```
3. Start the development server.
```
cd server
npm run dev
```
4. Open a new terminal with `client` as the directory
```
npm run start
```
