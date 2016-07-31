function getSeniorsDiscounts(suburb) {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetSeniorsDiscounts><tem:suburb>' + suburb + '</tem:suburb></tem:GetSeniorsDiscounts></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetSeniorsDiscounts'
        },
        success: function (data, status, xhr) {

            // read and process xml here
            var csvDiscounts = $(xhr.responseXML).find('GetSeniorsDiscountsResult').text();
            //alert(csvDiscounts + "no results");

            var strArr;
            /*if()
                strArr = csvDiscounts.split(',,,');
            else*/
            strArr = csvDiscounts.split(',,,');
            strArr.forEach(function(item, index){
                $('#discountsTable tr:last').after("<tr><td>" + item + "</td></tr>");
            });

            if(strArr == undefined)
                $('#discountsTable tr:last').after("<tr><td>No Discounts in your area</td></tr>");
        }
    });
}

function getEducation(suburb) {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetEducation><tem:suburb>' + suburb + '</tem:suburb></tem:GetEducation></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetEducation'
        },
        success: function (data, status, xhr) {

            // read and process xml here
            var csvDiscounts = $(xhr.responseXML).find('GetEducationResult').text();
            //alert(csvDiscounts + "no results");

            var strArr = csvDiscounts.split(',,,');

            strArr.forEach(function (item, index) {
                $('#discountsTable tr:last').after("<tr><td>" + item + "</td></tr>");
            });
        }
    });
}

function getCulture(suburb) {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetCulture><tem:suburb>' + suburb + '</tem:suburb></tem:GetCulture></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetCulture'
        },
        success: function (data, status, xhr) {

            // read and process xml here
            var csvDiscounts = $(xhr.responseXML).find('GetCultureResult').text();
            //alert(csvDiscounts + "no results");

            var strArr = csvDiscounts.split(',,,');

            strArr.forEach(function (item, index) {
                $('#cultureTable tr:last').after("<tr><td>" + item + "</td></tr>");
            });
        }
    });
}

function getActivities(suburb) {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetActivities><tem:suburb>' + suburb + '</tem:suburb></tem:GetActivities></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetActivities'
        },
        success: function (data, status, xhr) {

            // read and process xml here
            var csvDiscounts = $(xhr.responseXML).find('GetActivitiesResult').text();
            //alert(csvDiscounts + "no results");

            var strArr = csvDiscounts.split(',,,');

            strArr.forEach(function (item, index) {
                $('#discountsTable tr:last').after("<tr><td>" + item + "</td></tr>");
            });
        }
    });
}

function getCommunityCentres(suburb) {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetCommunityCentres><tem:suburb>' + suburb + '</tem:suburb></tem:GetCommunityCentres></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetCommunityCentres'
        },
        success: function (data, status, xhr) {

            // read and process xml here
            var csvDiscounts = $(xhr.responseXML).find('GetCommunityCentresResult').text();
            //alert(csvDiscounts + "no results");

            var strArr = csvDiscounts.split(',,,');

            strArr.forEach(function (item, index) {
                $('#communityTable tr:last').after("<tr><td>" + item + "</td></tr>");
            });
        }
    });
}

function getEvents(suburb) {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetEvents><tem:suburb>' + suburb + '</tem:suburb></tem:GetEvents></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetEvents'
        },
        success: function (data, status, xhr) {

            // read and process xml here
            var csvDiscounts = $(xhr.responseXML).find('GetEventsResult').text();
            //alert(csvDiscounts + "no results");

            var strArr = csvDiscounts.split(',,,');

            strArr.forEach(function (item, index) {
                $('#eventsTable tr:last').after("<tr><td>" + item + "</td></tr>");
            });
        }
    });
}

function findSeniorInformation() {
    var suburb = $('#suburbInput').val();
    getSeniorsDiscounts(suburb);
    getEducation(suburb);
    getCulture(suburb);
    getActivities(suburb);
    getCommunityCentres(suburb);
    getEvents(suburb);
}

function loadLgas() {

    //make soap request for lga list
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:FindAnzac><tem:querystring>' + sessionStorage.getItem('query') + '</tem:querystring></tem:FindAnzac></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost/GoodOldLife/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoo/FindInformation'
        },
        success: function (data, status, xhr) {
            // read and process xml here
            $("#lgaDatalist").append('<option value="So many options">');
        }
    });
}

// Test function
function getReportInfo() {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetData><tem:value>555</tem:value></tem:GetData></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetData'
        },
        success: function (data, status, xhr) {
            // read and process xml here
            //$("#pageholder").append(xhr);
            alert("success returned");
            alert(xhr.responseXML.text());
        }
    });
}

// Test Function
function getData() {
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:GetData><tem:value>555</tem:value></tem:GetData></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost:56120/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoodOldService/GetData'
        },
        success: function (data, status, xhr) {
            // read and process xml here
            //$("#pageholder").append(xhr);
            alert("success returned");
            alert(xhr.responseXML.text());
        }
    });
}

// test function
function alertMessage() {
    
    loadLgas();
    //GetInformationBySuburb("maroochydore");
}

// Test function
function GetInformationBySuburb() {

    var suburbChosen = ""; //put the suburb into this variable
    var soapMsg = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"><soapenv:Header/><soapenv:Body><tem:FindAnzac><tem:querystring>' + sessionStorage.getItem('query') + '</tem:querystring></tem:FindAnzac></soapenv:Body></soapenv:Envelope>';

    $.ajax({
        url: "http://localhost/GoodOldLife/GoodOldService.svc",
        type: "POST",
        dataType: "xml",
        data: soapMsg,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        headers: {
            SOAPAction: 'http://tempuri.org/IGoo/FindInformation'
        },
        success: function (data, status, xhr) {
            // read and process xml here
        }
    });
}