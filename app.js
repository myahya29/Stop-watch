
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let h = 0;
let m = 0;
let s = 0;
let time = null; // better name + starts as null

function start() {
    // stop any old timer first (prevents many timers running)
    stop();

    time = setInterval(() => {
        s = s + 1; // increment first

        // seconds
        if (s < 10) {
            second.textContent = "0" + s;
        } else {
            second.textContent = s;
        }

        // minutes
        if (s >= 60) {
            s = 0;
            second.textContent = "00";
            m = m + 1;

            if (m < 10) {
                minute.textContent = "0" + m;
            } else {
                minute.textContent = m;
            }

            // hours
            if (m >= 60) {
                m = 0;
                minute.textContent = "00";
                h = h + 1;

                if (h < 10) {
                    hour.textContent = "0" + h;
                } else {
                    hour.textContent = h;
                }
            }
        }
    }, 1000);
}

function stop() {
    if (time !== null) {
        clearInterval(time);
        time = null;
    }
}

function reset() {
    stop();
    h = 0;
    m = 0;
    s = 0;
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
}
