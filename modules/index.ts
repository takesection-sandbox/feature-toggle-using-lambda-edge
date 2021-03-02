declare const PASS_LIST: Array<string>;

export const handler = async function(event: any, context: any) {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    const passList = PASS_LIST;

    console.log(passList[0]);
    console.log(passList[1]);
    console.log(passList[2]);

    console.log(JSON.stringify(request));
    console.log(JSON.stringify(headers));

    request.uri = "/sub/index.html";
    return request;
}
