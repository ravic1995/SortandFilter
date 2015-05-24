Yoga = new Mongo.Collection('yoga');

if (Meteor.isClient) {

  Session.set("type" , "");
  Session.set("city" , "");
  Session.set("freetrial" , "");
  Session.set("price" , "");
  Session.set("sort" , "");

  Template.searchbar.helpers({

      meteoryoga : function(){
        var qry = {};
        if(Session.get('type')!="")
          qry['type'] = Session.get('type');
        if(Session.get('city')!="")
          qry['city'] = Session.get('city');
        if(Session.get('freetrial')!="")
          qry['freetrial'] = Session.get('freetrial');
        if(Session.get('price')!="")
          qry['price'] = {$lte : parseInt(Session.get('price'))};

        return Yoga.find(qry , {sort : [Session.get('sort') , "asc"]});
        //return Yoga.find({type : Session.get('type') , city : Session.get('city') , freetrial : Session.get('freetrial') , price : {$lte : parseInt(Session.get('price'))} } , {sort : [Session.get('sort') , "asc"]});         //return Yoga.find({type : Session.get("type")},{sort : ["price" , "asc"]});
      }
    });

  Template.searchbar.events({
      "submit form" : function(event){

       var _type = event.target.typeOfYoga.value;
        var _city = event.target.city.value;  
        var _freeTrial = event.target.freeTrial.value;  
        var _pricemax = event.target.priceRange.value;
        var _sort  = event.target.sort.value;

        Session.set("sort" , _sort);
        Session.set("city" , _city);
        Session.set("type" , _type);
        Session.set("freetrial" , _freeTrial);
        Session.set("price" , _pricemax);
        
        console.log(Session.get("freetrial"));
        console.log(Session.get("price"));

        event.target.typeOfYoga.value = ""; 
        event.target.city.value = "";  
        event.target.freeTrial.value = "";  
        event.target.priceRange.value = 2000;
        
        return false;
      }
    });

    
    Template.searchoptions.helpers({
        yoga : function(){
          return Yoga.find({},{sort: ["srno" , "asc"]});
     }
  });

    
}

if (Meteor.isServer) {

  Meteor.startup(function () {

    /*if (Yoga.find().count() === 0) {
        console.log("Importing private/products.json to db")

        var data = JSON.parse(Assets.getText("data.json"));

        data.forEach(function (item, index, array) {
            Yoga.insert(item);
        })
    }
   if(Yoga.find().count()===0)
  {Yoga.insert({
  "srno" : 1 ,
  "name" : "Abc" ,
  "type" : "Bikram" ,
  "city" : "Mumbai" ,
  "price": 900 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 2 ,
  "name" : "Adc" ,
  "type" : "Hatha" ,
  "city" : "Delhi" ,
  "price": 2000 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 3 ,
  "name" : "Akc" ,
  "type" : "Ashtanga" ,
  "city" : "Kolkata" ,
  "price": 1200 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 4 ,
  "name" : "Lk kks" ,
  "type" : "Bikram" ,
  "city" : "Gurgoan" ,
  "price": 1900 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 5 ,
  "name" : "Jikl " ,
  "type" : "Hatha" ,
  "city" : "Delhi" ,
  "price": 2000 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 6 ,
  "name" : "Kiol " ,
  "type" : "Ashtanga" ,
  "city" : "Chennai" ,
  "price": 200 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 7 ,
  "name" : "Adc" ,
  "type" : "Hastha" ,
  "city" : "Delhi" ,
  "price": 180 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 8 ,
  "name" : "Abc" ,
  "type" : "Bikram" ,
  "city" : "Kolkata" ,
  "price": 900 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 9 ,
  "name" : "Adc" ,
  "type" : "Hastha" ,
  "city" : "Delhi" ,
  "price": 2000 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 10 ,
  "name" : "Abc" ,
  "type" : "Bikram" ,
  "city" : "Mumbai" ,
  "price": 1450 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 11 ,
  "name" : "Adc" ,
  "type" : "Hatha" ,
  "city" : "Gurgoan" ,
  "price": 2000 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 12 ,
  "name" : "Akc" ,
  "type" : "Ashtanga" ,
  "city" : "Mumbai" ,
  "price": 750 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 13 ,
  "name" : "Lk kks" ,
  "type" : "Bikram" ,
  "city" : "Gurgoan" ,
  "price": 1150 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 14 ,
  "name" : "Jikl " ,
  "type" : "Hatha" ,
  "city" : "Chennai" ,
  "price": 1800 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 15 ,
  "name" : "Kiol " ,
  "type" : "Ashtanga" ,
  "city" : "Kolkata" ,
  "price": 1200 ,
  "freetrial" : "Yes"
});
Yoga.insert({
  "srno" : 16 ,
  "name" : "Abc" ,
  "type" : "Bikram" ,
  "city" : "Delhi" ,
  "price": 800 ,
  "freetrial" : "No"
});
Yoga.insert({
  "srno" : 17 ,
  "name" : "Adc" ,
  "type" : "Hastha" ,
  "city" : "Mumbai" ,
  "price": 1700 ,
  "freetrial" : "Yes"
}); // insert close
//Yoga.insert(mydocs);
} //close if
*/
  });   // code to run on server at startup
}
