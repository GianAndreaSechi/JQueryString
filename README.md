# JQueryString
*A simple way to QueryString using JQuery*

*This library allows to facilitate the use of querystrings in JQuery.*

### Required:
JQuery (tested on 3.6.0)

# How to use it
*Firstable you have to initialize the object*
var req = new request();

req.init();

### Get QueryString parameter value:
req.queryString(ParameterName); 

### Get Parameters List:
*retrieve the parameter list {name: parameter_name, value: parameter_value}*

req.search_parameters


### Add new Parameter and its value to your actual QueryString
req.addQSParameter(txtName,txtValue); or req.addQSParameter(txtName,txtValue,false);

### Add new Parameter and its value to new QueryString (discard the last one)
req.addQSParameter(txtName,txtValue,true);


