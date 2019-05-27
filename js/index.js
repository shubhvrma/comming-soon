var countdown = document.querySelector('.countdown');
// set the launchdate
var launchDate = new Date('29 June 2019 13:00:00').getTime();

// Interval that updates every second
var interval = setInterval(() => {
    // gets current time every second
    var now = new Date().getTime();
    // distance between now and launchdate
    var distance = launchDate - now;
    // get days, hours, minutes and seconds from the milliseconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60* 24) / (1000 * 60 * 60)));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // output the time with html
    countdown.innerHTML = `
    <div class="outer">
        <div class="circle">
            <p>${days}</p>
        </div>
        <p>Days</p>
    </div>
    <!-- _______________ -->
    <div class="outer">
        <div class="circle">
            <p>${hours}</p>
        </div>
        <p>Hours</p>
    </div>
    <!-- _______________ -->
    <div class="outer">
        <div class="circle">
            <p>${minutes}</p>
        </div>
        <p>Minutes</p>
    </div>
    <!-- _______________ -->
    <div class="outer">
        <div class="circle">
            <p>${seconds}</p>
        </div>
        <p>Seconds</p>
    </div>`;
}, 1000);