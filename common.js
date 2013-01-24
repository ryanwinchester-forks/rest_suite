var formatReply = function(params, result, exception) {
  exception = exception || false;

  var reply = {};

  reply['params']  = params;
  reply['result']  = result;

  if(exception) {
    reply['exception'] = exception;
    reply['success']   = false;
  } else {
    reply['success'] = true;
  }

  return reply;
}

var formatException = function(exception) {
  var formattedException = {};

  formattedException['message'] = exception.message;

  try {
    formattedException['trace'] = exception.getStackTrace();
  } catch(stack_fetch_error) {
    formattedException['trace'] = stack_fetch_error.message;
  }

  return formattedException;
}

