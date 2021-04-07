# JQueryString
*A simple way to QueryString using JQuery*

*This library allows to facilitate the use of querystrings in JQuery.*

### Required:
JQuery (tested on 3.6.0)

# How to use it
*Firstable you have to initialize the object*

```javascript
var req = new request();

req.init();
```
### Get QueryString parameter value:
```javascript
req.queryString(ParameterName); 
```
### Get Parameters List:
*retrieve the parameter list {name: parameter_name, value: parameter_value}*
```javascript
req.search_parameters;
```

### Add new Parameter and its value to your actual QueryString
```javascript
req.addQSParameter(txtName,txtValue); 
```
or 
```javascript
req.addQSParameter(txtName,txtValue,false);
```
### Add new Parameter and its value to new QueryString (discard the last one)
```javascript
req.addQSParameter(txtName,txtValue,true);
```

