import fetch from 'node-fetch';

export const handleSearch = (req, res) => {
    const searchKey = process.env.SEARCH_KEY;
    const apiKey = process.env.API_KEY;
    const { searchTerms, start } = req.body;
    var searchParameters = formatSearchParameters(searchTerms);

    fetch(`https://www.googleapis.com/customsearch/v1/siterestrict?key=${apiKey}&cx=${searchKey}&q=${searchParameters}&start=${start}&num=10`)
    .then(res => res.json())
    .then(data => {
        res.json(data.items);
    })
    .catch(err => res.status(400).json('unable to reach search api'))
}

var formatSearchParameters = (searchTerms) => {
    return searchTerms.replace(/\s+/g, '+').toLowerCase();
}