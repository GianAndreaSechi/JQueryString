class request{
    constructor(){
        this.hash = $(location).attr('hash'); //Sets or returns the anchor part (#) of a URL
        this.host = $(location).attr('host'); //Sets or returns the hostname and port number of a URL
        this.hostname = $(location).attr('hostname'); //Sets or returns the hostname of a URL
        this.origin = $(location).attr('origin'); //Returns the protocol, hostname and port number of a URL
        this.pathname = $(location).attr('pathname'); //Sets or returns the path name of a URL
        this.port = $(location).attr('port'); //Sets or returns the port number of a URL
        this.protocol = $(location).attr('protocol'); //Sets or returns the protocol of a URL
        this.url = $(location).attr('href'); //Sets or returns the entire URL
        this.search = $(location).attr('search'); //Sets or returns the querystring part of a URL
        this.search_parameters = [];
        console.log(this.host);
    }
    queryString(name){
      //method used to call the function queryString, that return the value of QueryString parameter
        var res = queryString(name,this);
        return res;
    }
    addQSParameter(name,value,newSearch=false){
      //this method add a new QueryString parameter and his value; newSearch set the parameter as a new Querystring, deleting the last one.
        if (newSearch) {
            this.resetSearch();
            this.search = '?';
        } else {
            this.search = this.search + '&';
        }
        var search_parameter = {};
        search_parameter['name'] = name;
        search_parameter['value'] = value;

        this.search_parameters.push(search_parameter);

        this.search = this.search + search_parameter['name'] + '=' + search_parameter['value'];
    }
    resetSearch(){
      //reset the entire QueryString parameter
        this.search = '';
        this.search_parameters=[];
    }
    init(){
      //set the default value of the request object
        getQSList(this);
    }

}
function getQSList(req){
    //retrieve the parameter list {name: parameter_name, value: parameter_value}
    var url_par = (req.search).substring(1,req.search.lenght);
    var par_value_list  = url_par.split("&");

    $.each(par_value_list, function(i,v){
        //regex solution
        //var splitted = v.split(/=(.+)/);
        //avoid regex solution
        var splitted = v.split('=');
        var splitted = [splitted.shift(), splitted.join('=')];
        var search_parameter = {};
        search_parameter['name'] = splitted[0];
        search_parameter['value'] = splitted[1];
        req.search_parameters.push(search_parameter);
    });
}
function queryString(name, req){
  //scroll the entire list of parameter and search for the requested.
  //if it found the searched parameter it return his value.
    var search_parameters = req.search_parameters;
    var res = '';
    $.each(search_parameters, function(i,search_parameter){
        if (search_parameter['name'] == name){
            res = search_parameter['value'];
            return false;
        }
    });
    return res;
}

//example of using.
//var req = new request();
//req.init();
//var res = req.queryString("test");

//req.addQSParameter("nome","andre",true);
//req.addQSParameter("nome","andre");

//console.log(req.search);
