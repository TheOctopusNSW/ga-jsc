// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdw_FjVERdQkItTcWVnt6cWxxxvXSIiS0",
    authDomain: "js-circuits-83cb6.firebaseapp.com",
    databaseURL: "https://js-circuits-83cb6.firebaseio.com",
    storageBucket: "js-circuits-83cb6.appspot.com",
    messagingSenderId: "1088098295674"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

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

    var mpBoston = new location("MaidPro Boston - Downtown", "F000", 363, "77 N Washington St", "Boston", "MA", "02114", "Ana Donovan", "https://www.facebook.com/MaidProBoston", "https://www.maidpro.com/boston-maidpro", "(617) 742-8080", 42.3650024, -71.0601921);
    var mpFortMyers = new location("MaidPro Fort Myers","F009",428, "6237 Presidential Court Suite 120", "Fort Myers", "FL", "33919", "Brett Shraiar", "https://www.facebook.com/MaidProSWFlorida/reviews", "https://www.maidpro.com/fortmyers", "(239) 437-5520", 26.559863, -81.888532);
    var mpMarcoIsland = new location("MaidPro Marco Island", "F009", 76, "1761 San Marco Rd", "Marco Island", "FL", "34145", "Brett Shraiar", "https://www.facebook.com/MaidProSWFlorida/reviews", "https://www.maidpro.com/marco-island", "(239) 206-2881", 25.9341038, -81.702437);
    var mpNaples = new location("MaidPro Naples", "F009", 467, "2085 Pine Ridge Rd", "Naples", "FL", "34109", "Brett Shraiar", "https://www.facebook.com/MaidProSWFlorida/reviews", "https://www.maidpro.com/naples", "(239) 596-5200", 26.2121584, -81.7787488);
    var mpSandy = new location("MaidPro Sandy", "F010", 312, "8526 S 1300 E", "Sandy", "UT", "84094", "Ana Donovan", "https://www.facebook.com/pages/MaidPro-Sandy/388415048011296", "https://www.maidpro.com/saltlakecity", "(801) 352-7070", 40.5964606, -111.856592);
 var mpPlano = new location(
 
   "MaidPro Plano",
     "F012", 222,
   "2501 N. Josey Lane Suite 112",
   "Carrollton",
   "TX",
   "75006",
   "Kevin Shea",
   "https://www.facebook.com/MaidProPlano",
   "https://www.maidpro.com/plano",
   "(972) 466-1899",
   33.0781615,
   -96.9355056
 );
 var mpCedarGrove = new location(
 
   "MaidPro Cedar Grove",
     "F014", 273,
   "610 Pompton Ave.",
   "Cedar Grove",
   "NJ",
   "7009",
   "Ames Forish",
   "https://www.facebook.com/maidprofanpage",
   "https://www.maidpro.com/cedargrove",
   "(973) 571-1242",
   40.854031,
   -74.2322721
 );
 var mpTukwila = new location(
 
   "MaidPro Tukwila",
     "F015", 103,
   "572 Industry Dr",
   "Tukwila",
   "WA",
   "98188",
   "Kevin Shea",
   "https://www.facebook.com/MaidProTukwila1/?ref=hl",
   "https://www.maidpro.com/tukwila",
   "(206) 575-6331",
   47.454194,
   -122.2504188
 );
 var mpBellevue = new location(
 
   "MaidPro Bellevue",
     "F015", 463,
   "2047 152nd Ave NE",
   "Redmond",
   "WA",
   "98052",
   "Kevin Shea",
   "https://www.facebook.com/MaidPro-Bellevue-162923975539/?ref=hl",
   "https://www.maidpro.com/bellevue",
   "(425) 746-2800",
   47.6288264,
   -122.1400542
 );
 var mpSeattle = new location(
 
   "MaidPro Seattle",
     "F015", 306,
   "8003 Lake City Way NE",
   "Seattle",
   "WA",
   "98115",
   "Kevin Shea",
   "https://www.facebook.com/MaidPro-Seattle-1038187566256603/",
   "https://www.maidpro.com/seattle",
   "(206) 696-7023",
   47.6871506,
   -122.3152161
 );
 var mpBeaverton = new location(
 
   "MaidPro Beaverton",
     "F015", 72,
   "7697 SW Cirrus Dr 32 B",
   "Beaverton",
   "OR",
   "97008",
   "Kevin Shea",
   "https://www.facebook.com/MaidPro-Beaverton-198800243813976/",
   "https://www.maidpro.com/beaverton",
   "(503) 482-6406",
   45.4640925,
   -122.7929545
 );
 var mpTampa = new location(
 
   "MaidPro Tampa",
     "F017", 226,
   "1441 East Fletcher Ave. Suite 301",
   "Tampa",
   "FL",
   "33612",
   "Brett Shraiar",
   "https://www.facebook.com/maidprotampa/",
   "https://www.maidpro.com/tampa",
   "(813) 903-8000",
   28.0678247,
   -82.445871
 );
 var mpWestPalm = new location(
 
   "MaidPro West Palm",
     "F018", 174,
   "1759 North Florida Mango Road Suite 7",
   "West Palm Beach",
   "FL",
   "33409",
   "Brett Shraiar",
   "https://www.facebook.com/maidprofanpage",
   "https://www.maidpro.com/westpalm",
   "(561) 684-6556",
   26.7026213,
   -80.0809284
 );
 var mpAnnapolis = new location(
 
   "MaidPro Annapolis",
     "F022", 91,
   "910 Bestgate Rd Ste C",
   "Annapolis",
   "MD",
   "21401",
   "Kevin Shea",
   "https://www.facebook.com/maidproannapolis/",
   "http://www.maidpro.com/annapolis",
   "(410) 266-3166",
   38.9924351,
   -76.54939
 );
 var mpDerry = new location(
 
   "MaidPro Derry",
     "F023", 72,
   "18 Folsom Rd.",
   "Derry",
   "NH",
   "3038",
   "Richard Sparacio",
   "https://www.facebook.com/maidprofanpage",
   "https://www.maidpro.com/windham",
   "(603) 890-9977",
   42.8929267,
   -71.3300591
 );
 var mpTyngsboro = new location(

   "MaidPro Tyngsboro",
     "F023", 107,
   "150 Westford Rd #36",
   "Tyngsborough",
   "MA",
   "1879",
   "Richard Sparacio",
   "https://www.facebook.com/maidprofanpage",
   "https://www.maidpro.com/chelmsford",
   "(978) 649-2500",
   42.6540116,
   -71.433528
 );
 var mpHenderson = new location(
 
   "MaidPro Henderson",
     "F024", null,
   "12211 S Eastern Ave. Suite 120",
   "Henderson",
   "NV",
   "89052",
   "Brett Shraiar",
   "",
   "https://www.maidpro.com/lasvegas-south",
   "(702) 586-5472",
   35.9693551,
   -115.1039616
 );
 var mpWindsor = new location(
 
   "MaidPro Windsor",
     "F024", 98,
   "266 Basher Drive Unit 8",
   "Berthoud",
   "CO",
   "80513",
   "Brett Shraiar",
   "",
   "https://www.maidpro.com/windsor",
   "(970) 674-7990",
   38.1373052,
   -112.2918361
 );
 var mpBroomfield = new location(
 
   "MaidPro Broomfield",
     "F024", 153,
   "555 Hwy. 287 Unit G",
   "Broomfield",
   "CO",
   "80020",
   "Brett Shraiar",
   "",
   "https://www.maidpro.com/broomfield",
   "(303) 664-5666",
   39.9255816,
   -105.0987357
 );

    listOfLocations.push(mpBoston);
    listOfLocations.push(mpFortMyers);
    listOfLocations.push(mpMarcoIsland);
    listOfLocations.push(mpNaples);
    listOfLocations.push(mpBroomfield);
    listOfLocations.push(mpWindsor);
    listOfLocations.push(mpHenderson);
    listOfLocations.push(mpTyngsboro);
    listOfLocations.push(mpDerry);
    listOfLocations.push(mpAnnapolis);
    listOfLocations.push(mpTampa);
    listOfLocations.push(mpBeaverton);
    listOfLocations.push(mpSeattle);
    listOfLocations.push(mpBellevue);
    listOfLocations.push(mpTukwila);
    listOfLocations.push(mpPlano);
    listOfLocations.push(mpSandy);
    listOfLocations.push(mpWestPalm);
    listOfLocations.push(mpCedarGrove);


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


initMap();
