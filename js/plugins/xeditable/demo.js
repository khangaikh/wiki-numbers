$(function(){
  
    //enable / disable
   $('#enable').click(function() {
       $('#user .editable').editable('toggleDisabled');
   });    
    
    //editables 
    
    $('#hotel_name a').editable({
        name: '1',
        url: 'backend_update_hotel.php',
        display: function(value, response) {
        //render response into element
        var m = moment().format("YYYY-MM-DD");
        $(this).html(value);
        $(this).closest("p").text(m);
        //$(“input”).attr(“disabled”, true);
        }
    });

    $('#address a').editable({
        name: '2',
        url: 'backend_update_hotel.php',
        display: function(value, response) {
        //render response into element

        $(this).html(value);
        //$(this).closest("td").next().text(re);
        //$(“input”).attr(“disabled”, true);
        }
    });

    $('#phone a').editable({
        name: '3',
        url: 'backend_update_hotel.php',
        display: function(value, response) {
        //render response into element
        $(this).html(value);
        //$(this).closest("td").next().text(re);
        //$(“input”).attr(“disabled”, true);
        }
    });
    $('#account1 a').editable({
        name: '4',
        url: 'backend_update_hotel.php',
        display: function(value, response) {
        //render response into element
        $(this).html(value);
        //$(this).closest("td").next().text(re);
        //$(“input”).attr(“disabled”, true);
        }
    });
    $('#account2 a').editable({
        name: '5',
        url: 'backend_update_hotel.php',
        display: function(value, response) {
        //render response into element
        $(this).html(value);
        //$(this).closest("td").next().text(re);
        //$(“input”).attr(“disabled”, true);
        }
    });

    $('#vat').editable({
        source: [
            {value: 1, text: 'Тийм'},
            {value: 2, text: 'Үгүй'}
        ],
        name: '6',
        url: 'backend_update_hotel.php',
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    }); 

   
});