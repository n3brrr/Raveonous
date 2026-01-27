const YelpApi = '';
//const YelpId = '';

const Yelp = {
    search(term, location, sortBy) {
        const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        const headers = {
            Authorization: `Bearer ${YelpApi}`,
        };
        return fetch(url, { headers }).then((response) => {
            return response.json();
        });
    }
}

export default Yelp;