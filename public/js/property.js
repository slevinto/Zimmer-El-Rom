$(document).ready(function() {    

    
    function add_recur_events() {
        $('#calendar').fullCalendar('addEventSource', expand_recur_events);  
    }
      
    function load_ics(property){
        $.get("/getCalendar?property=" + property, function(result){
            $('#calendar').fullCalendar('addEventSource', fc_events(result, {color: "#F87171"}))
        });  
    }

    $('#calendar').fullCalendar({
        header: {
            left: 'next,prev',            
        },
        defaultView: 'month',
        firstDay: '1',
        locale: 'he',
        lang: 'he',
        editable: false,
        eventLimit: true, 
        contentHeight: 250, 
        displayEventTime : false,
        eventConstraint: {
            start: moment().format('YYYY-MM-DD'),
            end: '2100-01-01' 
        }
    });   

    let searchParams = new URLSearchParams(window.location.search);  
    
    if (searchParams.get('property') == 'Botz')
    {
        $("#title")[0].innerText = "צימר אדמה";
        $("#guests")[0].innerText = "3 אורחים";
        $("#price")[0].innerText = " מחיר: 650 " + "\u20AA" + " לזוג " ;
        $("#price2")[0].innerText =  "בן אדם נוסף מגיל שנתיים 100 " + "\u20AA"; 
        $("#rule")[0].innerText = "הגעה מ 15:00, עזיבה עד 11:00";
        $("#bed")[0].innerText = "מיטה זוגית, כורסה ניפתחת למיטה נוחה";        

        tns({
            container: '.zimmerBotz',            
            autoplay: true,
            speed: 1000,
            autoplayButtonOutput: false,
            mouseDrag: true,
            gutter: 15,
            nav: false,            
            controls: false, 
            responsive: {
              320: {
                items: 1
              }, 
              640: {
                items: 3
              }

            }                      
        });

        $("#Etz")[0].style.display = 'none';
    }   

    if (searchParams.get('property') == 'Etz')
    {
        $("#title")[0].innerText = "צימר עץ";
        $("#guests")[0].innerText = "6 אורחים";
        $("#price")[0].innerText = " מחיר: 700 " + "\u20AA" + " לזוג " ;
        $("#price2")[0].innerText = "בן אדם נוסף מגיל שנתיים 100 " + "\u20AA"; 
        $("#rule")[0].innerText = "הגעה מ 15:00, עזיבה עד 11:00";
        $("#bed")[0].innerText = "מיטה זוגית, 4 כורסאות ניפתחות למיטה נוחה";
    
        $('#fireplace')[0].style.display = 'none';

        tns({
          container: '.zimmerEtz',            
          autoplay: true,
          speed: 1000,
          autoplayButtonOutput: false,
          mouseDrag: true,
          gutter: 15,
          nav: false,
          controls: false, 
          responsive: {
            320: {
              items: 1
            }, 
            640: {
              items: 3
            }
          }                      
        });
        
        $("#Botz")[0].style.display = 'none';
    } 

    load_ics(searchParams.get('property'));
    add_recur_events();    
})