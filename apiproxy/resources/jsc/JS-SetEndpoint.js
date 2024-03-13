var flow = context.getVariable('current.flow.name');
var endpoint = "costs";
if (flow == "GetUsers")
  endpoint = "users";
else if (flow == "GetProjects")
  endpoint = "products";
context.setVariable('endpoint', endpoint);