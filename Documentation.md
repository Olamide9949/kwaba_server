# Kwaba Loans Test API

 steps to deploy this server:
  - clone this repo
  - open terminal/cmd from the root directory(folder)
  - type: npm install && npm install nodemon
  - create a file with file name .env
  - type PORT=3005 in the .env file and save
  - in your terminal/cmd type: npm run start

# Directory(Folder) and File Listing in the Root Directory(Folder)

server:
  - api
  - api/loan
  - api/loan/loan.controller.js
  - api/loan/loan.router.js
  - api/loan/loan.service.js
  - .gitignore
  - App.js
  - loans.json
  - package.json

# NB: Root directory(folder) name is server.

# Endpoints.

  - POST: /api/loan           :to create/submit loan request
  - GET: /api/loan            :homepage of the api
  - GET: /api/loan/[id]       :to get loan data 
