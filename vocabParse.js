fetch('vocab.json', {
    method: 'GET'
})
    .then(function (response) { return response.json(); })
    .then(function (json) {
        // use the json
    });

obj = JSON.parse(vocab.json);
