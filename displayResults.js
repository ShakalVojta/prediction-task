async function makePredictRequest() {
    const response = await fetch('http://localhost:3000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                "timestamp": "2018-09-24T00:00:00.000Z",
                "value": 43
                },
                {
                "timestamp": "2018-10-01T00:00:00.000Z",
                "value": 134
                },
                {
                "timestamp": "2018-10-08T00:00:00.000Z",
                "value": 324
                },
                {
                "timestamp": "2018-10-15T00:00:00.000Z",
                "value": 251
                },
                {
                "timestamp": "2018-10-22T00:00:00.000Z",
                "value": 532
                },
                {
                "timestamp": "2018-10-29T00:00:00.000Z",
                "value": 943
                },
                {
                "timestamp": "2018-11-05T00:00:00.000Z",
                "value": 1025
                },
                {
                "timestamp": "2018-11-12T00:00:00.000Z",
                "value": 859
                },
                {
                "timestamp": "2018-11-19T00:00:00.000Z",
                "value": 1313
                },
                {
                "timestamp": "2018-11-26T00:00:00.000Z",
                "value": 764
                },
                {
                "timestamp": "2018-12-03T00:00:00.000Z",
                "value": 861
                },
                {
                "timestamp": "2018-12-10T00:00:00.000Z",
                "value": 767
                },
                {
                "timestamp": "2018-12-17T00:00:00.000Z",
                "value": 343
                },
                {
                "timestamp": "2018-12-24T00:00:00.000Z",
                "value": 0
                },
                {
                "timestamp": "2018-12-31T00:00:00.000Z",
                "value": 599
                },
                {
                "timestamp": "2019-01-07T00:00:00.000Z",
                "value": 1119
                },
                {
                "timestamp": "2019-01-14T00:00:00.000Z",
                "value": 1637
                },
                {
                "timestamp": "2019-01-21T00:00:00.000Z",
                "value": 1439
                },
                {
                "timestamp": "2019-01-28T00:00:00.000Z",
                "value": 1715
                },
                {
                "timestamp": "2019-02-04T00:00:00.000Z",
                "value": 1376
                },
                {
                "timestamp": "2019-02-11T00:00:00.000Z",
                "value": 1234
                },
                {
                "timestamp": "2019-02-18T00:00:00.000Z",
                "value": 1151
                },
                {
                "timestamp": "2019-02-25T00:00:00.000Z",
                "value": 1744
                },
                {
                "timestamp": "2019-03-04T00:00:00.000Z",
                "value": 1848
                },
                {
                "timestamp": "2019-03-11T00:00:00.000Z",
                "value": 1858
                },
                {
                "timestamp": "2019-03-18T00:00:00.000Z",
                "value": 2067
                },
                {
                "timestamp": "2019-03-25T00:00:00.000Z",
                "value": 2283
                },
                {
                "timestamp": "2019-04-01T00:00:00.000Z",
                "value": 1929
                },
                {
                "timestamp": "2019-04-08T00:00:00.000Z",
                "value": 3237
                },
                {
                "timestamp": "2019-04-15T00:00:00.000Z",
                "value": 1110
                },
                {
                "timestamp": "2019-04-22T00:00:00.000Z",
                "value": 2615
                },
                {
                "timestamp": "2019-04-29T00:00:00.000Z",
                "value": 2520
                },
                {
                "timestamp": "2019-05-06T00:00:00.000Z",
                "value": 2456
                },
                {
                "timestamp": "2019-05-13T00:00:00.000Z",
                "value": 2534
                },
                {
                "timestamp": "2019-05-20T00:00:00.000Z",
                "value": 2922
                },
                {
                "timestamp": "2019-05-27T00:00:00.000Z",
                "value": 3239
                },
                {
                "timestamp": "2019-06-03T00:00:00.000Z",
                "value": 3057
                },
                {
                "timestamp": "2019-06-10T00:00:00.000Z",
                "value": 3058
                },
                {
                "timestamp": "2019-06-17T00:00:00.000Z",
                "value": 3942
                },
                {
                "timestamp": "2019-06-24T00:00:00.000Z",
                "value": 4575
                },
                {
                "timestamp": "2019-07-01T00:00:00.000Z",
                "value": 3087
                },
                {
                "timestamp": "2019-07-08T00:00:00.000Z",
                "value": 4028
                },
                {
                "timestamp": "2019-07-15T00:00:00.000Z",
                "value": 4251
                },
                {
                "timestamp": "2019-07-22T00:00:00.000Z",
                "value": 3811
                },
                {
                "timestamp": "2019-07-29T00:00:00.000Z",
                "value": 3854
                },
                {
                "timestamp": "2019-08-05T00:00:00.000Z",
                "value": 2682
                },
                {
                "timestamp": "2019-08-12T00:00:00.000Z",
                "value": 4661
                },
                {
                "timestamp": "2019-08-19T00:00:00.000Z",
                "value": 4250
                },
                {
                "timestamp": "2019-08-26T00:00:00.000Z",
                "value": 4486
                },
                {
                "timestamp": "2019-09-02T00:00:00.000Z",
                "value": 4600
                },
                {
                "timestamp": "2019-09-09T00:00:00.000Z",
                "value": 4830
                },
                {
                "timestamp": "2019-09-16T00:00:00.000Z",
                "value": 4875
                },
                {
                "timestamp": "2019-09-23T00:00:00.000Z",
                "value": 4592
                },
                {
                "timestamp": "2019-09-30T00:00:00.000Z",
                "value": 4736
                },
                {
                "timestamp": "2019-10-07T00:00:00.000Z",
                "value": 4894
                },
                {
                "timestamp": "2019-10-14T00:00:00.000Z",
                "value": 5008
                },
                {
                "timestamp": "2019-10-21T00:00:00.000Z",
                "value": 3622
                },
                {
                "timestamp": "2019-10-28T00:00:00.000Z",
                "value": 4607
                },
                {
                "timestamp": "2019-11-04T00:00:00.000Z",
                "value": 4270
                },
                {
                "timestamp": "2019-11-11T00:00:00.000Z",
                "value": 4143
                },
                {
                "timestamp": "2019-11-18T00:00:00.000Z",
                "value": 5052
                },
                {
                "timestamp": "2019-11-25T00:00:00.000Z",
                "value": 4488
                },
                {
                "timestamp": "2019-12-02T00:00:00.000Z",
                "value": 5613
                },
                {
                "timestamp": "2019-12-09T00:00:00.000Z",
                "value": 5306
                },
                {
                "timestamp": "2019-12-16T00:00:00.000Z",
                "value": 3745
                },
                {
                "timestamp": "2019-12-23T00:00:00.000Z",
                "value": 76
                },
                {
                "timestamp": "2019-12-30T00:00:00.000Z",
                "value": 2231
                },
                {
                "timestamp": "2020-01-06T00:00:00.000Z",
                "value": 6718
                },
                {
                "timestamp": "2020-01-13T00:00:00.000Z",
                "value": 5760
                },
                {
                "timestamp": "2020-01-20T00:00:00.000Z",
                "value": 6469
                },
                {
                "timestamp": "2020-01-27T00:00:00.000Z",
                "value": 5666
                },
                {
                "timestamp": "2020-02-03T00:00:00.000Z",
                "value": 6580
                },
                {
                "timestamp": "2020-02-10T00:00:00.000Z",
                "value": 8326
                },
                {
                "timestamp": "2020-02-17T00:00:00.000Z",
                "value": 7325
                },
                {
                "timestamp": "2020-02-24T00:00:00.000Z",
                "value": 8885
                },
                {
                "timestamp": "2020-03-02T00:00:00.000Z",
                "value": 9093
                },
                {
                "timestamp": "2020-03-09T00:00:00.000Z",
                "value": 9501
                },
                {
                "timestamp": "2020-03-16T00:00:00.000Z",
                "value": 5333
                },
                {
                "timestamp": "2020-03-23T00:00:00.000Z",
                "value": 4737
                },
                {
                "timestamp": "2020-03-30T00:00:00.000Z",
                "value": 4830
                },
                {
                "timestamp": "2020-04-06T00:00:00.000Z",
                "value": 2993
                },
                {
                "timestamp": "2020-04-13T00:00:00.000Z",
                "value": 4445
                },
                {
                "timestamp": "2020-04-20T00:00:00.000Z",
                "value": 5900
                },
                {
                "timestamp": "2020-04-27T00:00:00.000Z",
                "value": 4879
                },
                {
                "timestamp": "2020-05-04T00:00:00.000Z",
                "value": 5468
                },
                {
                "timestamp": "2020-05-11T00:00:00.000Z",
                "value": 7355
                },
                {
                "timestamp": "2020-05-18T00:00:00.000Z",
                "value": 7510
                },
                {
                "timestamp": "2020-05-25T00:00:00.000Z",
                "value": 7377
                },
                {
                "timestamp": "2020-06-01T00:00:00.000Z",
                "value": 8290
                },
                {
                "timestamp": "2020-06-08T00:00:00.000Z",
                "value": 8491
                },
                {
                "timestamp": "2020-06-15T00:00:00.000Z",
                "value": 9566
                },
                {
                "timestamp": "2020-06-22T00:00:00.000Z",
                "value": 10518
                },
                {
                "timestamp": "2020-06-29T00:00:00.000Z",
                "value": 8547
                },
                {
                "timestamp": "2020-07-06T00:00:00.000Z",
                "value": 10490
                },
                {
                "timestamp": "2020-07-13T00:00:00.000Z",
                "value": 11151
                },
                {
                "timestamp": "2020-07-20T00:00:00.000Z",
                "value": 11293
                },
                {
                "timestamp": "2020-07-27T00:00:00.000Z",
                "value": 10612
                },
                {
                "timestamp": "2020-08-03T00:00:00.000Z",
                "value": 10295
                },
                {
                "timestamp": "2020-08-10T00:00:00.000Z",
                "value": 11943
                },
                {
                "timestamp": "2020-08-17T00:00:00.000Z",
                "value": 11439
                },
                {
                "timestamp": "2020-08-24T00:00:00.000Z",
                "value": 10700
                },
                {
                "timestamp": "2020-08-31T00:00:00.000Z",
                "value": 11442
                },
                {
                "timestamp": "2020-09-07T00:00:00.000Z",
                "value": 12701
                },
                {
                "timestamp": "2020-09-14T00:00:00.000Z",
                "value": 13225
                },
                {
                "timestamp": "2020-09-21T00:00:00.000Z",
                "value": 10887
                },
                {
                "timestamp": "2020-09-28T00:00:00.000Z",
                "value": 13826
                },
                {
                "timestamp": "2020-10-05T00:00:00.000Z",
                "value": 12702
                },
                {
                "timestamp": "2020-10-12T00:00:00.000Z",
                "value": 11524
                },
                {
                "timestamp": "2020-10-19T00:00:00.000Z",
                "value": 12868
                },
                {
                "timestamp": "2020-10-26T00:00:00.000Z",
                "value": 10146
                },
                {
                "timestamp": "2020-11-02T00:00:00.000Z",
                "value": 11778
                },
                {
                "timestamp": "2020-11-09T00:00:00.000Z",
                "value": 10717
                },
                {
                "timestamp": "2020-11-16T00:00:00.000Z",
                "value": 9336
                },
                {
                "timestamp": "2020-11-23T00:00:00.000Z",
                "value": 11810
                },
                {
                "timestamp": "2020-11-30T00:00:00.000Z",
                "value": 11998
                },
                {
                "timestamp": "2020-12-07T00:00:00.000Z",
                "value": 11777
                },
                {
                "timestamp": "2020-12-14T00:00:00.000Z",
                "value": 12430
                },
                {
                "timestamp": "2020-12-21T00:00:00.000Z",
                "value": 4667
                },
                {
                "timestamp": "2020-12-28T00:00:00.000Z",
                "value": 3854
                },
                {
                "timestamp": "2021-01-04T00:00:00.000Z",
                "value": 13081
                },
                {
                "timestamp": "2021-01-11T00:00:00.000Z",
                "value": 11722
                },
                {
                "timestamp": "2021-01-18T00:00:00.000Z",
                "value": 11300
                },
                {
                "timestamp": "2021-01-25T00:00:00.000Z",
                "value": 12824
                },
                {
                "timestamp": "2021-02-01T00:00:00.000Z",
                "value": 11857
                },
                {
                "timestamp": "2021-02-08T00:00:00.000Z",
                "value": 12815
                },
                {
                "timestamp": "2021-02-15T00:00:00.000Z",
                "value": 14390
                },
                {
                "timestamp": "2021-02-22T00:00:00.000Z",
                "value": 13771
                },
                {
                "timestamp": "2021-03-01T00:00:00.000Z",
                "value": 14824
                },
                {
                "timestamp": "2021-03-08T00:00:00.000Z",
                "value": 12631
                },
                {
                "timestamp": "2021-03-15T00:00:00.000Z",
                "value": 12078
                },
                {
                "timestamp": "2021-03-22T00:00:00.000Z",
                "value": 13384
                },
                {
                "timestamp": "2021-03-29T00:00:00.000Z",
                "value": 8835
                },
                {
                "timestamp": "2021-04-05T00:00:00.000Z",
                "value": 11538
                },
                {
                "timestamp": "2021-04-12T00:00:00.000Z",
                "value": 11786
                },
                {
                "timestamp": "2021-04-19T00:00:00.000Z",
                "value": 12922
                },
                {
                "timestamp": "2021-04-26T00:00:00.000Z",
                "value": 14148
                },
                {
                "timestamp": "2021-05-03T00:00:00.000Z",
                "value": 13892
                },
                {
                "timestamp": "2021-05-10T00:00:00.000Z",
                "value": 14826
                },
                {
                "timestamp": "2021-05-17T00:00:00.000Z",
                "value": 13815
                },
                {
                "timestamp": "2021-05-24T00:00:00.000Z",
                "value": 13559
                },
                {
                "timestamp": "2021-05-31T00:00:00.000Z",
                "value": 14618
                },
                {
                "timestamp": "2021-06-07T00:00:00.000Z",
                "value": 15156
                },
                {
                "timestamp": "2021-06-14T00:00:00.000Z",
                "value": 15886
                },
                {
                "timestamp": "2021-06-21T00:00:00.000Z",
                "value": 17109
                }
                ]
        })
    });
    const result = await response.json();
    displayPredictions(result.data);
}

async function getPrediction() {
    const response = await fetch('http://localhost:3000/prediction');
    const result = await response.json();
    displayPredictions(result.data);
}

function displayPredictions(predictions) {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = "";

    predictions.map(prediction => {
        const card = document.createElement('div');
        card.classList.add('prediction-card');

        const timestamp = document.createElement('div');
        timestamp.classList.add('timestamp');
        timestamp.textContent = `Date: ${new Date(prediction.timestamp).toLocaleDateString()}`;

        const value = document.createElement('div');
        value.classList.add('value');
        value.textContent = `Value: ${Math.round(prediction.value)}`;

        card.appendChild(timestamp);
        card.appendChild(value);
        responseDiv.appendChild(card);
    });
}