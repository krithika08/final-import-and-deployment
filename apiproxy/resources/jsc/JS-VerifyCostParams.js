 // to retrieve startDate and endDate
var startDate = context.getVariable('extracted.startDate');
var endDate = context.getVariable('extracted.endDate');

// setup parameters
var errFlg = false;
var rspErrStatusCode = "";
var rspErrReasonPhrase = "";
var errResponse = "";

print("StartDate: "+startDate);

if(startDate === null || endDate === null)
{
    errFlg = true;
    rspErrStatusCode = 400;
    errResponse = 'Bad request';
    rspErrReasonPhrase = 'Enter valid start and end dates';
}

if(errFlg === true)
{
    context.setVariable('rspErrStatusCode', rspErrStatusCode);
    context.setVariable('errResponse', errResponse);
    context.setVariable('rspErrReasonPhrase', rspErrReasonPhrase);
}

// set flags for conditional 
context.setVariable('startDate', startDate);
context.setVariable('endDate', endDate);
context.setVariable('getCostsErrorFlg', errFlg);