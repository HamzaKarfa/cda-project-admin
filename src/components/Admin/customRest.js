import { stringify } from 'query-string';
import { fetchUtils } from 'react-admin';
import { ENTRYPOINT } from '../../entrypoint';
import { loadBody } from './LoadBody';

const GET_LIST = 'GET_LIST';
const GET_ONE = 'GET_ONE';
const GET_MANY = 'GET_MANY';
const GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const DELETE_MANY = 'DELETE_MANY';

/**
 * Maps admin-on-rest queries to a simple REST API
 *
 * The REST dialect is similar to the one of FakeRest
 * @see https://github.com/marmelab/FakeRest
 * @example
 * GET_LIST     => GET http://my.api.url/posts?sort=['title','ASC']&range=[0, 24]
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts?filter={ids:[123,456,789]}
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts/123
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default function customRest(apiUrl, httpClient = fetchUtils.fetchJson) {
    /**
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The REST request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    const convertRESTRequestToHTTP = async (type, resource, params) => {
        let url = '';
        const options = {};
        switch (type) {
            case GET_LIST: {
                const { field, order } = params.sort;
                const query = {
                    sort: JSON.stringify([field, order]),
                    page: JSON.stringify(params.pagination.page),
                    filter: JSON.stringify(params.filter),
                };
                url = `${apiUrl}/${resource}?${stringify(query)}`;
                break;
            }
            case GET_ONE:
                url = `${apiUrl}/${resource}/${params.id}`;
                break;
            case GET_MANY: {
                const query = {
                    filter: JSON.stringify({ id: params.ids }),
                };
                url = `${apiUrl}/${resource}?${stringify(query)}`;
                break;
            }
            case GET_MANY_REFERENCE: {
                const { field, order } = params.sort;
                const query = {
                    sort: JSON.stringify([field, order]),
                    filter: JSON.stringify({
                        ...params.filter,
                        [params.target]: params.id,
                    }),
                };
                url = `${apiUrl}/${resource}?${stringify(query)}`;
                break;
            }
            case UPDATE:
                url = `${apiUrl}/${resource}/${params.id}`;
                options.method = 'PUT';
                options.body = JSON.stringify(params.data);
                break;
            case CREATE:
                let form = new FormData() 
                Object.keys(params.data).forEach((key) => {
                    if (key === 'image') {
                        form.append('image', params.data[key].rawFile)
                    }else if (key === 'sub_categories'){
                        form.append('subCategory', params.data[key].id)
                    }else{
                        form.append(key, params.data[key])
                    }
                });
                url = `${apiUrl}/${resource}`;
                options.method = 'POST';
                options.body = form
                break;
            case DELETE_MANY:
                const query = {
                    filter: JSON.stringify({ id: params.ids}),
                };
                console.log(test)
                url = `${apiUrl}/${resource}/${stringify(query)}`;
                options.method = 'DELETE';
                break;
            case DELETE:
                
                url = `${apiUrl}/${resource}/${params.id}`;
                options.method = 'DELETE';
                break;
            default:
                throw new Error(`Unsupported fetch action type ${type}`);
        }
        return { url, options };
    };

    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The REST request params, depending on the type
     * @returns {Object} REST response
     */
    const convertHTTPResponseToREST = (response, type, resource, params) => {
        const { headers, json } = response;
        switch (type) {
            case GET_LIST:
                return {
                    data: json,
                    total: json.length
                    
                };
            case GET_MANY_REFERENCE:
                return {
                    data: json,
                    total: parseInt(
                        json.length,
                        10
                    ),
                };
            case CREATE:
                return { data: { ...params.data, id: json.id } };
            default:
                return { data: json };
        }
    };

    /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a REST response
     */
    return async (type, resource, params) => {
        console.log(params, type, resource);


            const { url, options } = await convertRESTRequestToHTTP(
                type,
                resource,
                params
            );
            
            return httpClient(url, options).then(response =>
                convertHTTPResponseToREST(response, type, resource, params)
            );

    };

};