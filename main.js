//Declaration of variables
var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 10);
var c = Math.floor(Math.random() * 10);
var d = Math.floor(Math.random() * 10);
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var z1 = 0;
var z2 = 0;
var z3 = 0;
var z4 = 0;
var feedBack = [];
var feed;
var empty;
var same;
var styles;
var fade_in_from = 0;
var fade_out_from = 10;
var message =
  "Congrats, you have gotten the number, do you want to play again hit the start button";
var seconds = 60;
var minutes = 4;
function _(x) {
  return document.getElementById(x);
}

function timerr(el) {
  seconds--;

  _(el).innerHTML = minutes + ":" + seconds;
  if (seconds == 0) {
    seconds = 60;
    minutes--;
  }
  if (minutes == 0) {
    _("container").innerHTML =
      "Whoops, your time is up..." +
      `<a href="#" onclick="start()" style="text-decoration: none;">Start</a>`;
    _(el).style.fontSize = "18px";
    _(el).style.backgroundColor = "#fff";
    _(el).innerHTML = "";
    _(el).style.display = "none";
    minutes = 0;
    clearTimeout(looper);
    return false;
  }

  var looper = setTimeout("timerr('" + el + "')", 1000);
}

//This is the help button control for newbees to our app
function help(el) {
  if (_("helped").innerHTML == "") {
    _("helped").style.backgroundColor = "rgba(215, 215, 215, 0.911)";
    _(
      "helped"
    ).innerHTML = `<strong><p>This is not a guess game, maybe not only for your first play</p></strong>
											 <strong><p>Pay close attention to hints after each check to navigate your way through</p></strong>
						 					 <strong><p>Each number must be chosen from 0 through 9 without repetition</p></strong>
						 					 <strong><p>Goodluck!!!</p></strong>`;
    _("toggle").innerHTML = `<button  onclick="help('helped')">hide?</button>`;
    fadeInOut(el);
  } else if (_("helped").innerHTML != "") {
    _(
      "toggle"
    ).innerHTML = `<button  onclick="help('helped')">Need help?</button>`;
    fadeOut(el);
  }
}

function Unfinished() {
  if (
    _("numbera").value == a &&
    _("numberb").value == b &&
    _("numberc").value == c &&
    _("numberd").value == d
  ) {
    _("container").innerHTML = "";
    _("timer").style.display = "none";
    Congrats();
  } else {
    feed = feedBack
      .map(function (item) {
        return `<span id="good">${item}</span><br><br>`;
      })
      .join("");

    _("container").innerHTML = `<form action="#" >
											   		<input type="number" id="numbera"  value="${
                              _("numbera").value
                            }" autofocus class="input-darke" maxlength="1" onkeyup="cleanUp(this)">
													<input type="number" id="numberb"  value="${
                            _("numberb").value
                          }"  class="input-darke" maxlength="1" onkeyup="cleanUp(this)">
													<input type="number" id="numberc"  value="${
                            _("numberc").value
                          }"  class="input-darke" maxlength="1" onkeyup="cleanUp(this)">
													<input type="number" id="numberd"  value="${
                            _("numberd").value
                          }"  class="input-darke" maxlength="1" onkeyup="cleanUp(this)">
													<button onclick="guess('crossCheck');" class="delete-post-button">Check</button>
												</form>
											    <div id="result">${feed}</div>
											   `;
  }
}

function genrand() {
  while (
    a == b ||
    a == c ||
    a == d ||
    b == a ||
    b == c ||
    b == d ||
    c == a ||
    c == b ||
    c == d ||
    d == a ||
    d == b ||
    d == c
  ) {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    c = Math.floor(Math.random() * 10);
    d = Math.floor(Math.random() * 10);
  }
}

document.body.addEventListener("keydown", whichKey);

function whichKey(event) {
  key = event.keyCode;
  switch (key) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
}

function moveRight() {
  if (_("numbera") === document.activeElement) {
    _("numbera").blur();
    _("numberb").focus();
    _("numberb").value = "";
  } else if (_("numberb") === document.activeElement) {
    _("numberb").blur();
    _("numberc").focus();
    _("numberc").value = "";
  } else if (_("numberc") === document.activeElement) {
    _("numberc").blur();
    _("numberd").focus();
    _("numberd").value = "";
  } else if (_("numberd") === document.activeElement) {
    _("numberd").blur();
    _("numbera").focus();
    _("numbera").value = "";
  }
}

function moveLeft() {
  if (_("numberd") === document.activeElement) {
    _("numberd").blur();
    _("numberc").focus();
    _("numberc").value = "";
  } else if (_("numberc") === document.activeElement) {
    _("numberc").blur();
    _("numberb").focus();
    _("numberb").value = "";
  } else if (_("numberb") === document.activeElement) {
    _("numberb").blur();
    _("numbera").focus();
    _("numbera").value = "";
  } else if (_("numbera") === document.activeElement) {
    _("numbera").blur();
    _("numberd").focus();
    _("numberd").value = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  _("numbera").addEventListener("keyup", () => {
    if (_("numbera").value != "") {
      _("numberb").focus();
    }
  });

  _("numberb").addEventListener("keyup", () => {
    if (_("numberb").value != "") {
      _("numberc").focus();
    }
  });

  _("numberc").addEventListener("keyup", () => {
    if (_("numberc").value != "") {
      _("numberd").focus();
    }
  });
  _("numberd").addEventListener("keyup", () => {
    if (_("numberd").value != "") {
      _("numbera").focus();
    }
  });
});

function Congrats() {
  if (myNewArray.length > 0) {
    _("container").innerHTML += myNewArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("Congrats()", 70);
}

function fadeInOut(el) {
  if (el == "helped") {
    _(el).style.display = "block";
    var newsetting = fade_in_from / 10;
    _(el).style.opacity = newsetting;
    fade_in_from++;
    if (fade_in_from == 10) {
      _(el).style.opacity = 1;
      clearTimeout(loopTimer);
      fade_in_from = 0;
      return false;
    }
    var loopTimer = setTimeout("fadeInOut('" + el + "')", 50);
  } else if (el == "crossCheck") {
    _(el).style.display = "block";
    var newsetting = fade_in_from / 10;
    _(el).style.opacity = newsetting;
    fade_in_from++;
    if (fade_in_from == 10) {
      _(el).style.opacity = 1;

      clearTimeout(loopTimer);
      fade_in_from = 0;
      return false;
    }
    var loopTimer = setTimeout("fadeInOut('" + el + "')", 50);
  } else if (el == "timer") {
    _(el).style.display = "block";
    var newsetting = fade_in_from / 10;
    _(el).style.opacity = newsetting;
    fade_in_from++;
    if (fade_in_from == 10) {
      _(el).style.opacity = 1;

      clearTimeout(loopTimer);
      fade_in_from = 0;
      return false;
    }
    var loopTimer = setTimeout("fadeInOut('" + el + "')", 50);
  }
}

function start() {
  _("container").style.display = "block";
  _("timer").style.display = "block";

  _("numbera").focus();
  timerr("timer");
}

function fadeOut(el) {
  if (el == "helped") {
    var newsettings = fade_out_from / 10;
    _(el).style.opacity = newsettings;
    fade_out_from--;
    if (fade_out_from == 0) {
      _(el).style.opacity = 0;
      _(el).style.display = "none";
      _("helped").innerHTML = "";
      clearTimeout(loopTimer);
      fade_out_from = 10;
      return false;
    }
    var loopTimer = setTimeout("fadeOut('" + el + "')", 50);
  } else if (el == "crossCheck") {
    var newsettings = fade_out_from / 10;
    _(el).style.opacity = newsettings;
    fade_out_from--;
    if (fade_out_from == 0) {
      _(el).style.opacity = 0;
      _(el).style.display = "none";
      clearTimeout(loopTimer);
      fade_out_from = 10;
      return false;
    }
    var loopTimer = setTimeout("fadeOut('" + el + "')", 50);
  } else if (el == "timer") {
    var newsettings = fade_out_from / 10;
    _(el).style.opacity = newsettings;
    fade_out_from--;
    if (fade_out_from == 0) {
      fadeInOut(el);
      _(el).style.opacity = 0;
      _(el).style.display = "none";
      clearTimeout(loopTimer);
      fade_out_from = 10;
      return false;
    }
    var loopTimer = setTimeout("fadeOut('" + el + "')", 50);
  }
}

function cleanUp(input) {
  var regex = /[^0-9]/g;
  input.value = input.value.replace(regex, "");
}

function guess(el) {
  genrand();

  if (
    _("numbera").value == "" ||
    _("numberb").value == "" ||
    _("numberc").value == "" ||
    _("numberd").value == ""
  ) {
    _("crossCheck").innerHTML =
      "please enter a number in all fields to continue";
    fadeInOut(el);
    Unfinished();
  } else if (
    _("numbera").value == _("numberb").value ||
    _("numbera").value == _("numberc").value ||
    _("numbera").value == _("numberd").value ||
    _("numberb").value == _("numbera").value ||
    _("numberb").value == _("numberc").value ||
    _("numberb").value == _("numberd").value ||
    _("numberc").value == _("numbera").value ||
    _("numberc").value == _("numberb").value ||
    _("numberc").value == _("numberd").value ||
    _("numberd").value == _("numbera").value ||
    _("numberd").value == _("numberb").value ||
    _("numberd").value == _("numberc").value
  ) {
    _("crossCheck").innerHTML = "The numbers must not be the same";
    fadeInOut(el);
    Unfinished();
  } else if (
    _("numbera").value > 9 ||
    _("numberb").value > 9 ||
    _("numberc").value > 9 ||
    _("numberd").value > 9
  ) {
    _("crossCheck").innerHTML = "The numbers must not be betwwen 0 and 9";
    fadeInOut(el);
    Unfinished();
  } else {
    fadeOut(el);
    if (parseInt(_("numbera").value, 10) == a) {
      y1 = 1;
    } else if (
      parseInt(_("numbera").value, 10) == b ||
      parseInt(_("numbera").value, 10) == c ||
      parseInt(_("numbera").value, 10) == d
    ) {
      z1 = 1;
    }

    if (parseInt(_("numberb").value, 10) == b) {
      y2 = 1;
    } else if (
      parseInt(_("numberb").value, 10) == a ||
      parseInt(_("numberb").value, 10) == c ||
      parseInt(_("numberb").value, 10) == d
    ) {
      z2 = 1;
    }

    if (parseInt(_("numberc").value, 10) == c) {
      y3 = 1;
    } else if (
      parseInt(_("numberc").value, 10) == a ||
      parseInt(_("numberc").value, 10) == b ||
      parseInt(_("numberc").value, 10) == d
    ) {
      z3 = 1;
    }

    if (parseInt(_("numberd").value, 10) == d) {
      y4 = 1;
    } else if (
      parseInt(_("numberd").value, 10) == b ||
      parseInt(_("numberd").value, 10) == c ||
      parseInt(_("numberd").value, 10) == a
    ) {
      z4 = 1;
    }
    var dead = y1 + y2 + y3 + y4;
    var wounded = z1 + z2 + z3 + z4;
    var outCome =
      "Previous guess is: " +
      _("numbera").value +
      _("numberb").value +
      _("numberc").value +
      _("numberd").value +
      " " +
      dead +
      "dead, " +
      wounded +
      "wounded ";

    for (var i = feedBack.length; i >= 0; i--) {
      if (feedBack[i - 1] == outCome) {
        _("crossCheck").innerHTML =
          "please change the number to get another hint";
        fadeInOut(el);
        feedBack.splice(i - 1, 1);
      }
    }

    feedBack.push(outCome);
    y1 = 0;
    y2 = 0;
    y3 = 0;
    y4 = 0;
    z1 = 0;
    z2 = 0;
    z3 = 0;
    z4 = 0;
    Unfinished();
  }
}
