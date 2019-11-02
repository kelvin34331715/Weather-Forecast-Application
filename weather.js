var _appID = "";
function APIRequest() {
  var city = document.getElementsByName("city")[0].value;
  if (city != "") {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial" +
        "&APPID=" +
        _appID
    );
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var display = show(data);

        document.getElementById("display").innerHTML = display;
      } else {
        alert("Request failed.  Returned status of " + xhr.status);
      }
    };
    var xhr1 = new XMLHttpRequest();
    xhr1.open(
      "GET",
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        ",us" +
        "&units=imperial" +
        "&APPID=" +
        _appID
    );
    APIRequest5days(xhr1);

    xhr.send();
  } else {
    document.getElementById("display").innerHTML = "Enter City Name" + "<br>";
  }
}

function getLocation() {
  var x = document.getElementById("output");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  ApIRequestpoints(position.coords.latitude, position.coords.longitude);
}
function ApIRequestpoints(latitude, longitude) {
  var city = document.getElementsByName("city")[0].value;
  if (latitude != "" && longitude != "") {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&units=imperial" +
        "&APPID=" +
        _appID
    );
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var display = show(data);

        document.getElementById("display").innerHTML = display;
      } else {
        alert("Request failed.  Returned status of " + xhr.status);
      }
    };
    var xhr1 = new XMLHttpRequest();
    xhr1.open(
      "GET",
      "http://api.openweathermap.org/data/2.5/forecast?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&units=imperial" +
        "&APPID=" +
        _appID
    );
    APIRequest5days(xhr1);

    xhr.send();
  } else {
    document.getElementById("display").innerHTML = "Enter City Name" + "<br>";
  }
}

function show(data) {
  return (
    "<h3 style='font-size:30px; color:#fff'><strong>City Name</strong>: " +
    data.name +
    "," +
    data.sys.country +
    "</h3>" +
    "<h3 style='font-size:30px; color:#fff'>Temperature: " +
    data.main.temp +
    " F° " +
    " [" +
    data.main.temp_min +
    "°F ~ " +
    data.main.temp_max +
    "°F] " +
    "</h3>" +
    "<h3 style='font-size:30px; color:#fff'>Descrpition: <img src='http://openweathermap.org/img/w/" +
    data.weather[0].icon +
    ".png'>" +
    data.weather[0].description +
    "</h3>" +
    "<h3 style='font-size:30px; color:#fff'>Weather: " +
    data.weather[0].main +
    "</h3>" +
    "<h3 style='font-size:30px; color:#fff'>Humidity: " +
    data.main.humidity +
    " % " +
    "</h3>" +
    "<h3 style='font-size:30px; color:#fff'>Wind: " +
    data.wind.speed +
    " mph " +
    "," +
    data.wind.deg +
    " degree " +
    "</h3>" +
    "<h3 style='font-size:30px; color:#fff'>Cloud: " +
    data.clouds.all +
    " % " +
    "</h3>" +
    "<h3 style='font-size:30px; color:#fff'>Pressure: " +
    data.main.pressure +
    " hPa " +
    "</h3>"
  );
}

function APIRequestBaseZip() {
  document.getElementById("displayfilter").innerHTML = "";

  var inputdata = "";

  if (document.getElementById("inputdata") != "") {
    inputdata = document.getElementById("inputdata");
  }
  var inputzipcode = "";
  if (document.getElementById("inputzipcode") != "") {
    inputzipcode = document.getElementById("inputzipcode");
  }

  var inputime = "";
  if (document.getElementById("iputtime") != "") {
    inputime = document.getElementById("iputtime");
  }
  var inputid = "";
  if (document.getElementById("inputID") != "") {
    inputid = document.getElementById("inputID");
  }
  var inputstate = "";
  if (document.getElementById("inputsate") != "") {
    inputstate = document.getElementById("inputsate");
  }

  var f = (function() {
    var cars = [
      19936,
      19934,
      19891,
      19892,
      48033,
      48133,
      48135,
      48229,
      48233,
      32073,
      32080,
      32083,
      32082,
      32081,
      90013,
      90075,
      90306,
      90310,
      90711,
      27041,
      27027,
      27295,
      27522,
      27619,
      43044,
      43154,
      43346,
      43516,
      43713,
      97137,
      97305,
      97641,
      97639,
      97638,
      57223,
      57354,
      57501,
      57640,
      57748,
      57775,
      37135,
      37313,
      37658,
      37828,
      38077,
      38181,
      75060,
      75126,
      75210,
      75233,
      75402,
      75551,
      84061,
      84314,
      84621,
      84726,
      84773,
      84783,
      53178,
      53217,
      53522,
      53563,
      53968,
      54120,
      82524,
      82609,
      82832,
      83110,
      83414,
      83128,
      82435,
      82836,
      83128,
      53070,
      53095,
      53150,
      25063,
      25070,
      25139,
      22152,
      22159,
      22158,
      84041,
      84096,
      84130,
      75045,
      75104,
      75160,
      37035,
      37033,
      37075,
      57050,
      57052,
      57053,
      29114,
      29217,
      29403,
      15074,
      15209,
      15264,
      97121,
      97239,
      97333,
      43055,
      43142,
      43235,
      58033,
      58106,
      58241,
      27361,
      27503,
      27545,
      11207,
      11375,
      10031,
      87026,
      87131,
      87347,
      89042,
      89134,
      89179,
      68059,
      68132,
      68319,
      59055,
      59111,
      59322,
      63074,
      63130,
      63197,
      38661,
      38773,
      38862,
      55078,
      55346,
      55384,
      48073,
      48157,
      48197,
      48243,
      20643,
      20725,
      20769,
      20850,
      70452,
      70456,
      70522,
      70577,
      40119,
      40213,
      40282,
      40355,
      66032,
      66109,
      66285,
      50028,
      50035,
      50036,
      46072,
      46168,
      46226,
      60029,
      60304,
      60305,
      83261,
      83342,
      83445,
      96730,
      96753,
      96773,
      30016,
      30049,
      30086,
      32053,
      32081,
      32112,
      19721,
      19886,
      19930,
      80018,
      80022,
      80117,
      90013,
      90029,
      90061,
      71655,
      71657,
      71721,
      85012,
      85045,
      85066,
      99583,
      99619,
      99658,
      35040,
      35043,
      16510,
      16748,
      16510,
      16563,
      14512,
      16352,
      16730,
      16407,
      14213,
      14209,
      14212,
      14206,
      20140,
      20168,
      20170,
      22102,
      22152,
      97019,
      97020,
      97041,
      97062,
      97065,
      82071,
      82336,
      82450,
      82633,
      82836,
      53069,
      53120,
      53147,
      53177,
      53215,
      24836,
      24898,
      24985,
      25063,
      25134,
      84038,
      84101,
      84180,
      84333,
      84530,
      75002,
      75060,
      75087,
      75132,
      75182,
      37032,
      37101,
      37073,
      37190,
      37244,
      57027,
      57029,
      57072,
      57223,
      57249,
      29041,
      29145,
      29217,
      29333,
      29372,
      15051,
      15074,
      15102,
      15137,
      15209,
      73042,
      73068,
      73090,
      73109,
      73153,
      43023,
      43056,
      43080,
      43142,
      43213,
      58038,
      58062,
      58104,
      58214,
      58240,
      27040,
      27104,
      27261,
      27371,
      27373,
      87021,
      87048,
      87105,
      87106,
      87107,
      35040,
      35035,
      35038,
      35062,
      35064,
      99501,
      99502,
      99503,
      99523,
      99530,
      85012,
      85013,
      85032,
      85044,
      85065,
      71902,
      71910,
      71921,
      71922,
      71949,
      90071,
      90083,
      90088,
      90210,
      90230,
      19890,
      19730,
      19885,
      19884,
      19891,
      32044,
      32052,
      32055,
      32080,
      32111,
      30016,
      30017,
      30035,
      30047,
      30048,
      96748,
      96771,
      96792,
      96816,
      96841,
      83229,
      83233,
      83256,
      83263,
      60026,
      60045,
      60047,
      60062,
      60075,
      46014,
      46047,
      46070,
      46117,
      46146,
      50001,
      50002,
      50003,
      50005,
      66032,
      66035,
      66058,
      66083,
      66109,
      40036,
      40037,
      40062,
      40117,
      40160,
      70049,
      70071,
      70094,
      70128,
      70157,
      20620,
      20621,
      20624,
      20623,
      20643,
      48107,
      48128,
      48152,
      48174,
      48191,
      55024,
      55047,
      55077,
      55106,
      55122,
      38652,
      38680,
      38738,
      38772,
      38833,
      63047,
      63077,
      63110,
      63129,
      63130,
      59053,
      59057,
      59077,
      59108,
      59226,
      68123,
      68172,
      68316,
      68336,
      68357,
      89015,
      89040
    ];

    var data = new Array(500);
    var xhr = [];
    var inputselect = document.getElementById("inputselected").innerHTML;

    if (inputselect == "") {
      alert("Please select a state");
      return;
    }

    let inputime = "";
    if (
      !securityCompareTwoString(
        document.getElementById("timeSelected").innerHTML,
        ""
      )
    ) {
      inputimeString = document.getElementById("timeSelected").innerHTML;
      let date = inputimeString.split(" ");
      let month =
        "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(inputimeString[0]) / 3 +
        1;
      if (month < 10) {
        inputime = date[2] + "-0" + month + "-" + date[1];
      } else {
        inputime = date[2] + "-" + month + "-" + date[1];
      }
    }
    for (i = 0; i < cars.length; i++) {
      if (cars[i] == inputzipcode.value || inputzipcode.value == "") {
        (function(i) {
          xhr[i] = new XMLHttpRequest();

          xhr[i].open("GET", "http://api.zippopotam.us/us/" + cars[i], true);
          xhr[i].onreadystatechange = function() {
            if (xhr[i].readyState == 4 && xhr[i].status == 200) {
              var stateobject = JSON.parse(xhr[i].response);

              if (
                stateobject.places[0].state == inputselect ||
                inputselect == ""
              ) {
                xhr[i] = new XMLHttpRequest();

                xhr[i].open(
                  "GET",
                  "http://api.openweathermap.org/data/2.5/forecast?zip=" +
                    cars[i] +
                    ",us" +
                    "&units=metric" +
                    "&APPID=148879e8a34e170687a768d7878d7f31",
                  true
                );
                xhr[i].onreadystatechange = function() {
                  if (xhr[i].readyState == 4 && xhr[i].status == 200) {
                    var javaobj = JSON.parse(xhr[i].response);

                    var javaobjcityTolower = javaobj.city.name.toUpperCase();
                    var inputdataTolower = inputdata.value.toUpperCase();

                    if (
                      javaobjcityTolower == inputdataTolower ||
                      inputdataTolower == ""
                    ) {
                      if (
                        javaobj.city.id == inputid.value ||
                        inputid.value == ""
                      ) {
                        for (var k = 0; k < javaobj.list.length; k++) {
                          if (
                            securityCompareTwoString(
                              javaobj.list[k].dt_txt,
                              inputime +
                                " " +
                                document.getElementById("timePicker").innerHTML
                            ) ||
                            securityCompareTwoString(inputime, "") ||
                            securityCompareTwoString(
                              document.getElementById("timePicker").innerHTML,
                              ""
                            )
                          ) {
                            if (
                              inputdataTolower == "" &&
                              inputzipcode.value == "" &&
                              inputid.value == "" &&
                              inputselect == "" &&
                              (securityCompareTwoString(inputime, "") &&
                                securityCompareTwoString(
                                  document.getElementById("timePicker")
                                    .innerHTML,
                                  ""
                                ))
                            ) {
                              alert("Inputs can't be empty.");
                              return;
                            }

                            if (
                              securityCompareTwoString(inputime, "") !=
                              securityCompareTwoString(
                                document.getElementById("timePicker").innerHTML,
                                ""
                              )
                            ) {
                              alert(
                                "Select both date and time for valid output."
                              );
                              return;
                            }

                            document.getElementById(
                              "displayfilter"
                            ).innerHTML +=
                              "<button onclick='open_box(" +
                              cars[i] +
                              k +
                              ");' class='btn btn-primary' style='margin-left:10px; margin-top: 10px; margin-bottom: 10px; font-size:20px;'>City Name: " +
                              javaobj.city.name +
                              "<br>" +
                              "City ID: " +
                              javaobj.city.id +
                              "<br>" +
                              "zipcode: " +
                              cars[i] +
                              "<br>" +
                              "State: " +
                              stateobject.places[0].state +
                              "<br>" +
                              "Date: " +
                              javaobj.list[k].dt_txt.substr(0, 10) +
                              "</button>";
                            break;
                          }
                        }
                      }
                    }
                  }
                };
                xhr[i].send();
              }
            }
          };
          xhr[i].send();
        })(i);
      }
    }
  })();
}

function securityCompareTwoString(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  for (i = 0; i < str1.length; i++) {
    if (str1.charAt(i) != str2.charAt(i)) {
      return false;
    }
  }
  return true;
}

function APIRequest5days(xhr) {
  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var time = [];
      var tempature = [];
      for (i = 0; i < 24; i++) {
        time[i] = convertAPM(data.list[i].dt_txt.substring(11, 13));
        tempature[i] = data.list[i].main.temp;
      }
      const CHART = document.getElementById("lineChart");
      let lineChart = new Chart(CHART, {
        type: "line",
        data: {
          labels: time,
          datasets: [
            {
              fill: false,

              label: "3 Days Temperature",
              backgroundColor: "rgb(255,128,0)",
              borderColor: "rgb(255,128,0)",

              data: tempature,
              pointRadius: 1
            }
          ]
        },
        options: {
          scaleFontColor: "red",
          responsive: true,
          legend: {
            labels: {
              fontSize: 30,
              fontColor: "#fff"
            }
          },
          tooltips: {
            mode: "single"
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  fontSize: 15,
                  fontColor: "#fff"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {},
                ticks: {
                  fontSize: 20,
                  fontColor: "#fff"
                }
              }
            ]
          }
        }
      });
    } else {
      alert("Request failed.  Returned status of " + xhr.status);
    }
  };
  xhr.send();
}

function convertAPM(apm) {
  if (apm == "00") {
    return "12 am";
  }
  if (apm.substring(0, 1) == "0") {
    return apm.substring(1, 2) + " am";
  } else {
    var time = parseInt(apm);
    switch (time) {
      case 12:
        return time + " pm";
      default:
        return time - 12 + " pm";
    }
  }
}

function open_box(zipcode) {
  if (zipcode != "") {
    var xhr = new XMLHttpRequest();
    zipcode = "" + zipcode;
    xhr.open(
      "GET",
      "http://api.openweathermap.org/data/2.5/forecast?zip=" +
        zipcode.substr(0, 5) +
        ",us" +
        "&units=imperial" +
        "&APPID=" +
        _appID
    );
    let k = parseInt(zipcode.substr(5, 6));
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById("dynamic").innerHTML =
          "<div id='overLayer'> <div id='box_frame'> <div id='box'>" +
          "<h3 style='font-size:30px; color:#fff'><strong>City Name</strong>: " +
          data.city.name +
          "," +
          data.city.country +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Temperature: " +
          data.list[k].main.temp +
          " F° " +
          " [" +
          data.list[k].main.temp_min +
          "°F ~ " +
          data.list[k].main.temp_max +
          "°F] " +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Descrpition: <img src='http://openweathermap.org/img/w/" +
          data.list[k].weather[0].icon +
          ".png'>" +
          data.list[k].weather[0].description +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Weather: " +
          data.list[k].weather[0].main +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Humidity: " +
          data.list[k].main.humidity +
          " % " +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Wind: " +
          data.list[k].wind.speed +
          " mph " +
          "," +
          data.list[4].wind.deg +
          " degree " +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Cloud: " +
          data.list[k].clouds.all +
          " % " +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Pressure: " +
          data.list[k].main.pressure +
          " hPa " +
          "</h3>" +
          "<h3 style='font-size:30px; color:#fff'>Time: " +
          data.list[k].dt_txt +
          "</h3>" +
          "<br /> <id='closeButton' button style='color:#fff'onclick='reset_dynamic();'>Close</button></div></div></div>";
      } else {
        alert("Request failed.  Returned status of " + xhr.status);
      }
    };
    xhr.send();
  } else {
    alert("Zipcode not defined");
  }
}

function reset_dynamic() {
  document.getElementById("dynamic").innerHTML = "";
}
