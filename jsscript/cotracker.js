


//Decalring the Different Variable and Objects
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById('countries_stat')
// Fetching the Data from the server

//Fetching the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53"
    }
})
    .then(response => response.json().then(data => {
        console.log(data);
        total_cases.innerHTML = data.total_cases;
        new_cases.innerHTML = data.new_cases;
        new_death.innerHTML = data.new_deaths;
        total_death.innerHTML = data.total_deaths;
        total_recovered.innerHTML = data.total_recovered;

    })).catch(err => {
        console.log(err);
    });

//Fetching The Case by Country Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53"
    }
})
    .then(response => response.json().then(data => {
        console.log(data)
        let countries_stat = data.countries_stat;
        //Getting all the country statistic using a loop
        for (let i = 0; i < countries_stat.length; i++) {
            console.log(countries_stat[i]);
            //we will start by inserting the new rows inside our table
            let row = table.insertRow(i + 1);
            let country_name = row.insertCell(0);
            let cases = row.insertCell(1);
            let deaths = row.insertCell(2);
            let serious_critical = row.insertCell(3);
            let recovered_per_country = row.insertCell(4);
            country_name.innerHTML = countries_stat[i].country_name;
            cases.innerHTML = countries_stat[i].cases;
            deaths.innerHTML = countries_stat[i].deaths;
            serious_critical.innerHTML = countries_stat[i].serious_critical;
            recovered_per_country.innerHTML = countries_stat[i].total_recovered;

        }
    }))
    .catch(err => {
        console.log(err);
    });

    // grap
const api = 'https://disease.sh/v3/covid-19/historical/all?lastdays=90';

const getData = async () => {
    const response = await fetch(`${api}`);
    if (response.ok) {
        return await response.json();
    } else {
        return Promise.reject(response.status);
    }
};

const result = getData();
result
    .then((data) => {
        let date = Object.keys(data.cases);
        let total = Object.values(data.cases);
        let deaths = Object.values(data.deaths);
        let recovered = Object.values(data.recovered);
        var ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: date,
                datasets: [
                    {
                        label: 'Total Cases',
                        data: total,
                        borderColor: 'rgba(255, 99, 132)',
                        fill: false,
                    },
                    {
                        label: 'Recovered Cases',
                        data: recovered,
                        borderColor: 'rgba(153, 102, 255, 1)',
                        fill: false,
                    },
                    {
                        label: 'Deaths',
                        data: deaths,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        fill: false,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: 'Number of Cases',
                            },
                        },
                    ],
                    xAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: 'Date(DD/MM/YYYY)',
                            },
                        },
                    ],
                },
                title: {
                    display: true,
                    text: `Coronavirus Cases in the World for 90 Days`,
                },
            },
        });
    })
    .catch((error) => {
        console.log('Error: ', error);
    });

    // indian
fetch("https://corona.lmao.ninja/v2/countries/india")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("flag").src = data.countryInfo.flag;
        document.getElementById("country").innerHTML = data.country;
        document.getElementById("Active_Cases").innerHTML = data.active;
        document.getElementById("Total_Cases").innerHTML = data.cases;
        document.getElementById("Critical_Cases").innerHTML = data.critical;
        document.getElementById("Total_Death").innerHTML = data.deaths;
        document.getElementById("Recovered_Cases").innerHTML = data.recovered;
        document.getElementById("Total_Test_Done").innerHTML = data.tests;
    });
