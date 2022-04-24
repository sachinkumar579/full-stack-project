# full-stack-project

Contains 2 folders <br><br>

1. react-webpack-reduxtk-axios <br> UI created using ReactJS library <br> Uses Webpack for build <br> redux , react-redux, reduxjs/toolkit libraries are used for state management <br> axios library for making HTTP calls <br> Configuring Webpack and babel https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9 <br> Setting up the store   <br> 1. Create store object using configureStore of RTK <br> 2. Create action object and reducer using createSlice of RTK <br> 3. Export store and update action in index.js <br> 4. Call dispatch function of react-redux with JSON payload size in fetchUsers function <br> 5. Use useSelector hook to get redux stores data . It works as a subscriber <br> 6. When dispatch function is called it updates the store and DisplayCount component is rerendered with new total count value <br><br> How does it work? When you click 'Display All' or 'Display Few' button axios makes a REST API call and receives a JSON payload. On receiving the payload the handler in then is called where it updates users list and calls dispatch function which will update the store . The update in store will trigger useSelector hook in DisplayCount and it will be rerendered to display the new count of users list <br> <br> 

2. express-rest-api <br> REST API created using express.js <br>
endpoints - <br> http://localhost:3003/all/ returns a 1.35 MB JSON payload <br> http://localhost:3003/few/ returns a 1KB JSON payload <br> Dummy JSON payload generator https://json-generator.com/# <br><br>


![](./assets/Page.gif)
