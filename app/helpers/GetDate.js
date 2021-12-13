export function GetDate(props){

    let formatDate = new Date(props);
    const meses = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Obtober",
        "November",
        "December"

    ];

    const month = meses[formatDate.getMonth()];

    let [day, year] = [formatDate.getDate(), formatDate.getFullYear()];

    const newDate = `${month} ${day}, ${year}`;



    return newDate;
}