function doPost(e) {
  var appointmentSpreadSheetId = "1LVDR49mx3e4cleKGt3VoouL7S3cGAiqyV_NLEm8dmY4";
  var sheet = SpreadsheetApp.openById(appointmentSpreadSheetId).getSheetByName("weekendSignups");
  var data = JSON.parse(e.postData.contents);
  Logger.log("New signup :");
  Logger.log(data);
  sheet.appendRow([data.firstName, data.lastName, data.email, data.phone, data.insuranceCompany, new Date().toISOString()]);
  
    let output = JSON.stringify("Good");

  return ContentService.createTextOutput(output);
}



function testDoPost() {
  var form = {
    firstName : "Test FirstName1",
    lastName : "Test LastName",
    email : "test@email.com",
    phone :"123-55-261651",
    insuranceCompany : "Test company"
  };
  var requestBody = JSON.stringify(form);
  var mockRequest = {
    postData: {
      type: 'application/json',
      contents: requestBody
    }
  };
  Logger.log(mockRequest,"testDOPostData");
  Logger.log(requestBody);
  doPost(mockRequest);
}