function getFormatedDate(value, type, inMs) {
    if (!type) return value;

    if (!inMs) {
        value = value * 1000;
    }

    const date = new Date(value);
    console.log(date);

    let options;

    if (type === 'date') {
        options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
    } else if (type === "time") {
        options = {
            hour: "numeric",
            minute: "numeric"
        };
    }
    return new Intl.DateTimeFormat("en-us", options).format(date);
}


export { getFormatedDate };
