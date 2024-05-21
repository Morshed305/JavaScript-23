const form = document.getElementById("form");
        const result = document.getElementById("result");

        form.addEventListener("submit", (e) => {
            const year = document.getElementById("year").value;
            e.preventDefault();

            if (LeapYear(year)) {
                result.innerHTML="It is a leap year";
            } else {
                result.innerHTML="It is not a leap year";
            }
        })

        function LeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        }
        






       