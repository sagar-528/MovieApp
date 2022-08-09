// import {API_URL} from '@env';

export default function API(variable, method, info) {
  var headers = {
    Authorization: `Bearer ${Key.token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  };

  var params =
    method === 'GET'
      ? {
          method: method,
          headers: headers,
        }
      : {
          method: method,
          body: info, // make sure it's JSON
          headers: headers,
        };
  console.log('APIrequest : ', API_URL + variable, params);
  return fetch(`${API_URL + variable}`, params)
    .then(resp =>
      resp.json().then(res => {
        var data = {
          status: 200,
          body: res,
        };
        console.log('APIresponse : ', JSON.stringify(data));
        return data;
      }),
    )
    .catch(e => {
      console.log(e);
      return {
        body: {
          code: 400,
          Message: 'Sorry, something went wrong, please try again in sometime.',
        },
      };
    });
}
