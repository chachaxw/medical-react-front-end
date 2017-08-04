import request from 'utils/axios';

export async function axios(url, options) {
    return request(url, {
        method: options.method || 'get',
        headers:options.headers || {},
        data: options.data || {},
    });
}

//
// export async function update(url, params) {
//     return request(url, {
//         method: 'put',
//         body: qs.stringify(params),
//     });
// }
//
// export async function remove(url, params) {
//     return request(url, {
//         method: 'delete',
//         body: qs.stringify(params),
//     });
// }
