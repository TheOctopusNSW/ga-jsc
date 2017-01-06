//Login to Salesforce
function sfInit() {

  jsforce.browser.init({
    loginUrl: 'https://test.salesforce.com',
    clientId: '3MVG9oZtFCVWuSwNXcMxJ7f2yetjmDhstU1xXLwfiztdnAdzF5gh7yp_PKWtgbQYptk1EZdOx1y1AuMogTN1V',
    redirectUri: 'file:///Users/administrator/Desktop/jsc/Salesforce%20JS%20Project/GoogleMaps%20Overlay/index.html'
  });

  var officeRecords = [];
  
  jsforce.browser.on('connect', function(conn) 
  {
      conn.query("SELECT Office_Name_Marketing__c, Parent_F_Number__c, Active_Recurring_Count__c, BillingStreet, BillingCity, BillingState, BillingPostalCode, Parent_Business_Coach__c, Facebook_Page_URL__c, Office_URL__c, Phone FROM Account WHERE Type = 'Franchisee Single Location' OR Type = 'Franchisee Branch'", 
        function(err, result) {
      if (err) { return console.error(err); }

      console.log("total : " + result.totalSize);
      console.log("fetched : " + result.records.length);

      for (var i = 0; i < result.records.length; i++)
      {
        officeRecords.push(result.records[i]);
      }
      return officeRecords;
    });
  });   
}




//Initialize GoogleMaps API

var geoConfig = {
  apiKey: 'AIzaSyDOBzz2dFkqEpLwZyQ9ry-msadxwf_zh3c',
  URL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDOBzz2dFkqEpLwZyQ9ry-msadxwf_zh3c&callback=initMap'

}

function initMap() {
      
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat:39.5, lng: -98.35, title: 'Center of North America'}
        });

        createMarkers(map);

      }

function createMarkers(map){

    //SOON...
    //retrieveLocations();

    var location = function (Office_Name_Marketing__c, Parent_F_Number__c, Active_Recurring_Count__c, BillingStreet, BillingCity, BillingState, BillingPostalCode, Parent_Business_Coach__c, Facebook_Page_URL__c, Office_URL__c, Phone, lat, lng){
    this.Office_Name_Marketing__c = Office_Name_Marketing__c,
    this.Parent_F_Number__c = Parent_F_Number__c,
    this.Active_Recurring_Count__c = Active_Recurring_Count__c,
    this.BillingStreet = BillingStreet,
    this.BillingCity = BillingCity,
    this.BillingState = BillingState,
    this.BillingPostalCode = BillingPostalCode,
    this.Parent_Business_Coach__c = Parent_Business_Coach__c,
    this.Facebook_Page_URL__c = Facebook_Page_URL__c,
    this.Office_URL__c = Office_URL__c,
    this.Phone  = Phone,
    this.lat = lat,
    this.lng = lng
    };


    var listOfLocations = [];


    markersArray = Array();
    infoWindowsArray = Array();
    
    for (var i = 0; i<listOfLocations.length; i++){

            var newMarker = new google.maps.Marker({
              position: {lat: listOfLocations[i].lat, lng: listOfLocations[i].lng},
              map: map,
              animation: google.maps.Animation.DROP,
              title: listOfLocations[i].title,
              infoWindowIndex: i,
              //Here is where we should use Handlebars to make a clean sidebar
              newContentString : 
                                    "<div class='infoPanelTitle'>"
                                    + "<right><button id='escape'>X</button></right>"
                                    + "<center>" 
                                    + "<h3>" + listOfLocations[i].Office_Name_Marketing__c + "</h3>"
                                    + "</center>"
                                    + "<br/>"
                                    + "<div class='infoPanelInfo'>"
                                    + "<p>F Number: " + listOfLocations[i].Parent_F_Number__c + "</p>" 
                                    + "<p>Active Recurring Clients: " + listOfLocations[i].Active_Recurring_Count__c + "</p>"
                                    + "<p></p>"
                                    + "<p>" + listOfLocations[i].BillingStreet + "</p>"
                                    + "<p>" + listOfLocations[i].BillingCity + ", " + listOfLocations[i].BillingState + "</p>"
                                    + "<p>" + listOfLocations[i].BillingPostalCode + "</p>"
                                    + "<p></p>"
                                    + "<p>" + listOfLocations[i].Phone + "</p>"
                                    + "<p><a href='" + listOfLocations[i].Facebook_Page_URL__c + "'>Facebook Icon Here</a></p>"
                                    + "<p><a href='"+ listOfLocations[i].Office_URL__c + "'>" + listOfLocations[i].Office_Name_Marketing__c + "</a></p>"
                                    + "<p></p>"
                                    + "<p>Business Coach: " + listOfLocations[i].Parent_Business_Coach__c + "</p>"
                                    + "</div>"
                                    + "</div>"
                                  
                

            });

            google.maps.event.addListener(newMarker, 'click', 
              function(event) {
                //Listener on Markers
                      $('#map').css('width', '80%');
                      $('#infoBar').css('width','20%');
                      map.panTo(this.position);
                      map.setZoom(11);
                      $('#infoBar').html(this.newContentString);
                      $('#escape').on('click', function(e){
                          e.preventDefault();
                          $('#map').css('width', '100%');
                          $('#infoBar').css('width','0%');
                          initMap();
                      });
                     
              });

            markersArray.push(newMarker);
            //infoWindowsArray.push(newInfoWindow);

    }

}

function retrieveLocations(){

  //first we get the OAuth Token
  //then, we call the Salesforce
  //finally, we rule the world.
}

sfInit();
initMap();
