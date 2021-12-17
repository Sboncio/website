fetch("../data/experience-data.json")
    .then(mockResponses => {
        return mockResponses.json();
    })
    .then(data => {
        //console.log(data[0].title)
        for (let i = 0; i < data.length; i++) {
            let order = "";
            if (i % 2 == 0) {
                order = "even"
            } else {
                order = "odd"
            }
            document.getElementById("experiences").innerHTML +=
                `<details open class=` + order + `>
                <summary>` + data[i].title + `<br />` +
                data[i].location + `<br />` +
                data[i].date
                + `</summary>
                    <div id="uniqueDetailsDiv"><hr />` +
                data[i].description
                + `</div>
            </details><br/>`
        }
    }
    )


