## Second task

After John successfully evaluated the different yields of his field,
he now thinks about expanding his strawberry enterprise. He wants to
select the best spots around Slovakia to expand his business. Strawberries however
require specific temperature, so these spots needs to be selected very carefully.
John would like to automate the process of selecting the best spots, temperature
wise, but he's missing a key component - the temperature API.
The API should be able to list all the spots with recorded temperature and respond
to requests for specific spots. It should be also updated daily, so John always gets
the latest data.

### Task

Your task is to create a REST API to help John with his automation
and a scraper that will scrape the temperature data real-time.
You can find all necessary data on [this website](http://www.shmu.sk/sk/?page=1&id=meteo_num_alad&mesto=BRATISLAVA).
For the purpose of the task, you don't need to scrape the website daily, just create
an endpoint that will trigger the scraping when called - e.g. GET /api/temperature/scrape.
You can store the data however you like, there's no need for a real database.

The REST API should expose two routes

- `GET /api/temperature` - to list all the places with recorded temperature
- `GET /api/temperature/<identifier>` - to get the entry based on identifier

You are free to use any library you find suitable for the task.

### Example of the API

The structure could for example look like this (but you can do it any way you like)

```text
GET /api/temperature
Response
{
    "success": "true",
    "data": [
        {
            "id": "bratislava",
            "city": "Bratislava",
            "temperature": {
                "low": 19
                "high": 25
            }            
        },
        {
            "id": "trnava",
            "city": "Trnava",
            "temperature": {
                "low": 17
                "high": 24
            }
        }, ...
    ]
}
```

```text
GET /api/temperature/bratislava
Response
{
    "success": "true",
    "data": {
        "id": "bratislava",
        "city": "Bratislava",
        "temperature": {
            "low": 19
            "high": 25
        }
    }
}
```

### Your solution description of second task

My solution is based on usage of libraries:

* expressJS -> allowed to build listening server
* puppeteer -> allowed to scrape forecast data

Local server adress: http://localhost:5050/api/temperature

To run this application it is neccesary to install mention libraries by:

```text
$ npm install
```

Then server can be initialized with command:

```text
$ npm run start-second-task
```