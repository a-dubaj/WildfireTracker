# Online Fire Tracker

Online Fire tracker is an app for tracking wildfires around the world. This application uses NASA API for geolocation purposes.

---
## Requirements

- node js
- git

---
## How to run a project

To run a project you should type:

- install dependencies
``` shell
$ npm i
```
- run project
``` shell
$ npm start
```
---

## Important

This project uses a NASA API for grabbing data coordinates and display on the map. A key is needed for correct work of the  application. To correct setup create `.env` file in main directory of the procject. In this file add as fallows:


`REACT_APP_API_KEY= ...
`

This line is a key that call the API for coordinates.