# Flight-App

## Running the Application
To view the application, download the program files and extract to your machine.\
In the project directory, you can run:

```
npm start
```

This will runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


```
npm test
```

This will launch the test runner in the interactive watch mode.


```
npm run build
```

This will build the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.




## Project Proposal & Write-up

**Objective:** Create a website that can query and display real-time flight information from AviationStack API. 

**Rationale:**  Display the ability to create/edit/use website applications; Extract and use data from an external API; Integrate and Automate workflows.

**Goal:** Create a scalable website that will allow the user enter the Flight/IATA number for any flight and have all relevant flight data for their requested flight returned to them on the same page. 

**Technologies:** JavaScript, HTML, CSS, ReactJS, NodeJS, AviationStack API, VSCode, Linux Terminal.
Objective: Create a website that can query and display real-time flight information from AviationStack API. 

**Rationale:**  Display the ability to create/edit/use website applications; Extract and use data from an external API; Integrate and Automate workflows.

**Goal:** Create a scalable website that will allow the user enter the Flight/IATA number for any flight and have all relevant flight data for their requested flight returned to them on the same page. 

**Technologies:** JavaScript, HTML, CSS, ReactJS, NodeJS, AviationStack API, VSCode, Linux Terminal.

**Resources:** 2-3 hours of programming time. 

**Issues:** The free tier subscription of AviationStack API does not allow HTTPS encryption. Because of this, I am not able to host this project on GitHub pages or any other hosting domain that does not allow HTTP requests. In addition to this, during development, I kept receiving a 403 error for authentication/permissions error due to Chrome and Edge automatically converting HTTP requests into HTTPS requests. These issues were resolved by using Firefox for testing. 

## Review

 My main objective was to design and implement a project that would be evaluated well based on its visual design, website intuitiveness and code structure. I created a scalable website using JavaScript, HTML, CSS using ReactJS and NodeJS that will return data queried by the user. Specifically, the data in this case for the interview project will be flight data. The user will enter my website, type in their flight IATA number into the search bar, and flights relating to their flight number will be returned to them. I have been using DL437 as my IATA to test my program. For the time being, I have placed the API access key within my program, however once the 2-3 hour deadline is over, I will create a more secure solution.

## Project Example Images

![Homepage](ProjectExampleImages/Screenshot_20230814_003353.png?raw=true)
![Results](ProjectExampleImages/Screenshot_20230814_003414.png?raw=true)

