var table1Fixture, table2Fixture, table3Fixture, table4Fixture, table5Fixture, filtertest, resetDataFixture,
  additionalDataFixture, updateSelectFixture, remoteDataFixture1, remoteDataFixture2, remoteDataFixture3,
  remoteDataFilteringFixture1, remoteDataFilteringFixture2, remoteDataSortingFixture1, remoteDataSortingFixture2;
var getStyle = function (el, style){
  return window.getComputedStyle( el, null ).getPropertyValue( style );
};

var data =[
  {
    "index": 0,
    "name": "Liz Grimes",
    "first": "Isabel long name to test left elipse",
    "last": "Conrad",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/enda/73.jpg",
    "boolean": true,
    "guid": "8ea90ed8-83e1-4a28-a371-e5c0e1d0e021",
    "integer": 28,
    "date": "Sun Aug 14 1994 03:27:03 GMT-0700 (PDT)",
    "address": "3 Vista Place",
    "city": "Longbranch",
    "state": "North Carolina",
    "zip": 64470,
    "country": "Lesotho",
    "email": "isabelconrad@scentric.com",
    "phone": "(817) 426-2901",
    "color": "rgb(76,120,108)"
  },
  {
    "index": 1,
    "name": "Frazier Lara",
    "first": "Jocelyn",
    "last": "Wooten",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/guillogo/73.jpg",
    "boolean": false,
    "guid": "7017f9b1-690e-4c9d-8eee-f63285ca5148",
    "integer": 10,
    "date": "Tue May 24 1988 14:10:20 GMT-0700 (PDT)",
    "address": "2 Catherine Street",
    "city": "Healy",
    "state": "Connecticut",
    "zip": 41121,
    "country": "Mongolia",
    "email": "jocelynwooten@scentric.com",
    "phone": "(901) 441-2582",
    "color": "rgb(134,91,60)"
  },
  {
    "index": 2,
    "name": "Dora Griffith",
    "first": "Valentine",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "valentinemeyer@scentric.com",
    "phone": "(956) 428-2996",
    "color": "rgb(201,142,97)"
  },
  {
    "index": 3,
    "name": "Shelley Molina",
    "first": "Silva",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "silvaalexander@scentric.com",
    "phone": "(823) 415-2224",
    "color": "rgb(113,105,251)"
  },
  {
    "index": 4,
    "name": "Rita Lopez",
    "first": "Hopkins",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "hopkinswong@scentric.com",
    "phone": "(814) 488-2063",
    "color": "rgb(133,126,66)"
  },
  {
    "index": 5,
    "name": "Wagner Shelton",
    "first": "Harriet",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "harrietsherman@scentric.com",
    "phone": "(887) 497-3612",
    "color": "rgb(195,89,110)"
  },
  {
    "index": 6,
    "name": "Bethany Adkins",
    "first": "Stacie",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "staciebartlett@scentric.com",
    "phone": "(957) 412-3261",
    "color": "rgb(164,84,221)"
  },
  {
    "index": 7,
    "name": "Angelia Rowe",
    "first": "Charlene",
    "last": "Stevens",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thewillbeard/73.jpg",
    "boolean": true,
    "guid": "f3c6a195-d50e-479f-9c2a-c54c2a629852",
    "integer": 13,
    "date": "Sat Jan 04 1992 04:10:22 GMT-0800 (PST)",
    "address": "4 Tiffany Place",
    "city": "Dargan",
    "state": "Vermont",
    "zip": 31427,
    "country": "Burkina Faso",
    "email": "charlenestevens@scentric.com",
    "phone": "(946) 404-2511",
    "color": "rgb(99,147,74)"
  },
  {
    "index": 8,
    "name": "Knox Rivers",
    "first": "Reyes",
    "last": "Hartman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/73.jpg",
    "boolean": true,
    "guid": "88e71d65-5a7a-4973-a1dc-9f5c1df485c8",
    "integer": 41,
    "date": "Sat May 28 1994 15:27:35 GMT-0700 (PDT)",
    "address": "3 Wythe Place",
    "city": "Coldiron",
    "state": "Nebraska",
    "zip": 76971,
    "country": "Greenland",
    "email": "reyeshartman@scentric.com",
    "phone": "(910) 533-3832",
    "color": "rgb(99,55,193)"
  },
  {
    "index": 9,
    "name": "Warren Scott",
    "first": "Alissa",
    "last": "Duncan",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/73.jpg",
    "boolean": true,
    "guid": "dfc23019-ab40-4597-91fe-74bcf60a9e2b",
    "integer": 54,
    "date": "Sun Feb 08 2009 21:57:53 GMT-0800 (PST)",
    "address": "4 Henderson Walk",
    "city": "Oley",
    "state": "Florida",
    "zip": 38878,
    "country": "Fiji",
    "email": "alissaduncan@scentric.com",
    "phone": "(876) 584-3746",
    "color": "rgb(218,58,52)"
  },
  {
    "index": 10,
    "name": "Mai Shepherd",
    "first": "Christina",
    "last": "Craft",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/mwarkentin/73.jpg",
    "boolean": false,
    "guid": "7b829e11-da52-4302-a645-4711c9af7df2",
    "integer": 40,
    "date": "Sat Apr 18 1992 20:34:36 GMT-0700 (PDT)",
    "address": "3 Ocean Court",
    "city": "Fairmount",
    "state": "New Jersey",
    "zip": 95002,
    "country": "Viet Nam",
    "email": "christinacraft@scentric.com",
    "phone": "(842) 503-2389",
    "color": "rgb(181,253,141)"
  },
  {
    "index": 11,
    "name": "Flora Tran",
    "first": "Burt",
    "last": "Landry",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/herkulano/73.jpg",
    "boolean": false,
    "guid": "3efeb9cc-5705-4e17-b800-42ee8e354d30",
    "integer": 64,
    "date": "Fri Apr 30 1982 14:23:53 GMT-0700 (PDT)",
    "address": "2 Butler Street",
    "city": "Walker",
    "state": "Wisconsin",
    "zip": 56241,
    "country": "France, Metropolitan",
    "email": "burtlandry@scentric.com",
    "phone": "(914) 461-3510",
    "color": "rgb(95,147,193)"
  },
  {
    "index": 12,
    "name": "Crawford Jordan",
    "first": "Baldwin",
    "last": "Hammond",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/jonny_moon/73.jpg",
    "boolean": true,
    "guid": "758e8af9-6a3c-47e1-a062-b49e6263b6e8",
    "integer": 80,
    "date": "Sat Sep 22 2012 18:24:55 GMT-0700 (PDT)",
    "address": "3 Preston Court",
    "city": "Vincent",
    "state": "Washington",
    "zip": 47560,
    "country": "Uganda",
    "email": "baldwinhammond@scentric.com",
    "phone": "(800) 559-2165",
    "color": "rgb(175,176,59)"
  },
  {
    "index": 13,
    "name": "Stanley Williams",
    "first": "Laverne",
    "last": "Hampton",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/alyssalowww/73.jpg",
    "boolean": false,
    "guid": "718262e9-01e7-4016-b068-6edd11a14a38",
    "integer": 62,
    "date": "Sat Sep 27 1975 16:25:15 GMT-0700 (PDT)",
    "address": "4 Varet Street",
    "city": "Breinigsville",
    "state": "Oregon",
    "zip": 54164,
    "country": "Antarctica",
    "email": "lavernehampton@scentric.com",
    "phone": "(988) 478-3842",
    "color": "rgb(225,78,134)"
  },
  {
    "index": 14,
    "name": "Key Keith",
    "first": "Kirsten",
    "last": "Chang",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/rafelorden/73.jpg",
    "boolean": true,
    "guid": "1e75c394-1574-4168-a33d-c5895f7af76d",
    "integer": 47,
    "date": "Tue Sep 18 1990 08:36:33 GMT-0700 (PDT)",
    "address": "4 Ryder Avenue",
    "city": "Wheatfields",
    "state": "Illinois",
    "zip": 28092,
    "country": "Kiribati",
    "email": "kirstenchang@scentric.com",
    "phone": "(882) 531-2818",
    "color": "rgb(118,83,134)"
  },
  {
    "index": 15,
    "name": "Lizzie Oneal",
    "first": "Mercado",
    "last": "Hancock",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/wim1k/73.jpg",
    "boolean": false,
    "guid": "8fbb9f3a-64df-4069-9aec-0d3dd0c2dd3f",
    "integer": 22,
    "date": "Thu Jan 02 1986 03:48:22 GMT-0800 (PST)",
    "address": "4 Sumner Place",
    "city": "Ruckersville",
    "state": "West Virginia",
    "zip": 65886,
    "country": "Ecuador",
    "email": "mercadohancock@scentric.com",
    "phone": "(996) 557-3624",
    "color": "rgb(244,178,231)"
  },
  {
    "index": 16,
    "name": "Bentley Guthrie",
    "first": "Obrien",
    "last": "Bruce",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/rpeezy/73.jpg",
    "boolean": false,
    "guid": "720e6095-dc65-4bef-b8bf-56b3e43c13e8",
    "integer": 33,
    "date": "Sat Sep 09 1989 04:51:19 GMT-0700 (PDT)",
    "address": "2 Chester Street",
    "city": "Finzel",
    "state": "Mississippi",
    "zip": 52444,
    "country": "Bulgaria",
    "email": "obrienbruce@scentric.com",
    "phone": "(923) 461-2312",
    "color": "rgb(52,103,133)"
  },
  {
    "index": 17,
    "name": "Marsh Cleveland",
    "first": "Pearl",
    "last": "Moran",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/sectronov/73.jpg",
    "boolean": true,
    "guid": "9b385d87-2847-44f4-acae-a47970ff7c9f",
    "integer": 8,
    "date": "Tue Apr 26 1988 18:46:50 GMT-0700 (PDT)",
    "address": "4 Portland Avenue",
    "city": "Henrietta",
    "state": "Rhode Island",
    "zip": 53764,
    "country": "American Samoa",
    "email": "pearlmoran@scentric.com",
    "phone": "(964) 543-3486",
    "color": "rgb(168,119,234)"
  },
  {
    "index": 18,
    "name": "Maude Perry",
    "first": "Underwood",
    "last": "Barton",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/starburst1977/73.jpg",
    "boolean": true,
    "guid": "0f6385b5-481e-4ddf-9ad4-b91f8e951922",
    "integer": 33,
    "date": "Wed Apr 23 2014 06:02:36 GMT-0700 (PDT)",
    "address": "3 Mermaid Avenue",
    "city": "Deputy",
    "state": "Georgia",
    "zip": 58449,
    "country": "Angola",
    "email": "underwoodbarton@scentric.com",
    "phone": "(946) 414-3492",
    "color": "rgb(112,197,153)"
  },
  {
    "index": 19,
    "name": "Knapp Pratt",
    "first": "Solomon",
    "last": "Lloyd",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/mocabyte/73.jpg",
    "boolean": true,
    "guid": "895a8dab-d037-46f4-b822-795814f418d9",
    "integer": 72,
    "date": "Thu Apr 13 1978 08:14:17 GMT-0800 (PST)",
    "address": "4 Glenwood Road",
    "city": "Berlin",
    "state": "New Mexico",
    "zip": 64625,
    "country": "Bhutan",
    "email": "solomonlloyd@scentric.com",
    "phone": "(802) 539-3360",
    "color": "rgb(69,68,176)"
  },
  {
    "index": 20,
    "name": "Jodi Tanner",
    "first": "Lyons",
    "last": "Stevenson",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iamasifmirza/73.jpg",
    "boolean": false,
    "guid": "f6a0ef12-6a1e-48a8-990a-da79c0bbf30e",
    "integer": 79,
    "date": "Tue Feb 11 2003 17:16:18 GMT-0800 (PST)",
    "address": "3 Cropsey Avenue",
    "city": "Lewis",
    "state": "Arizona",
    "zip": 89420,
    "country": "Dominica",
    "email": "lyonsstevenson@scentric.com",
    "phone": "(818) 424-2348",
    "color": "rgb(178,99,182)"
  },
  {
    "index": 21,
    "name": "Mamie Crane",
    "first": "Swanson",
    "last": "Richardson",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/benoitboucart/73.jpg",
    "boolean": true,
    "guid": "66c048df-eefc-4c09-a468-b3044e4e7f11",
    "integer": 26,
    "date": "Sun Jun 30 2002 05:57:21 GMT-0700 (PDT)",
    "address": "3 Aurelia Court",
    "city": "Inkerman",
    "state": "Texas",
    "zip": 10482,
    "country": "Egypt",
    "email": "swansonrichardson@scentric.com",
    "phone": "(810) 406-3416",
    "color": "rgb(230,107,202)"
  },
  {
    "index": 22,
    "name": "Cooley Macdonald",
    "first": "Aida",
    "last": "Hurley",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/73.jpg",
    "boolean": false,
    "guid": "466a665b-b7b6-4eae-b404-e9b5a8d1641d",
    "integer": 20,
    "date": "Sun Jan 05 2014 15:48:57 GMT-0800 (PST)",
    "address": "4 Hall Street",
    "city": "Stouchsburg",
    "state": "District Of Columbia",
    "zip": 32399,
    "country": "Chile",
    "email": "aidahurley@scentric.com",
    "phone": "(975) 451-3272",
    "color": "rgb(119,239,85)"
  },
  {
    "index": 23,
    "name": "Snow Blankenship",
    "first": "Mccormick",
    "last": "Jensen",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/menghe/73.jpg",
    "boolean": false,
    "guid": "961f5da2-2479-4f45-9132-9e89a8bc32e4",
    "integer": 70,
    "date": "Tue Jan 22 1974 01:18:15 GMT-0700 (PDT)",
    "address": "3 Lewis Place",
    "city": "Elizaville",
    "state": "Virgin Islands",
    "zip": 32784,
    "country": "Norfolk Island",
    "email": "mccormickjensen@scentric.com",
    "phone": "(961) 443-3343",
    "color": "rgb(204,198,130)"
  },
  {
    "index": 24,
    "name": "Gabriela Brock",
    "first": "Ramona",
    "last": "Meyers",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/heyanata/73.jpg",
    "boolean": false,
    "guid": "07133f92-9308-420e-ae7b-e5ecd657aa85",
    "integer": 76,
    "date": "Sat Sep 15 1984 07:22:38 GMT-0700 (PDT)",
    "address": "3 Rodney Street",
    "city": "Orin",
    "state": "Puerto Rico",
    "zip": 60446,
    "country": "Japan",
    "email": "ramonameyers@scentric.com",
    "phone": "(839) 591-3993",
    "color": "rgb(236,222,59)"
  },
  {
    "index": 25,
    "name": "Graciela Orr",
    "first": "Sharp",
    "last": "Lindsay",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thibaut_re/73.jpg",
    "boolean": true,
    "guid": "0ea67b0a-5ea7-4e07-8d06-48b6e2a00c6e",
    "integer": 39,
    "date": "Mon May 25 1970 21:04:46 GMT-0700 (PDT)",
    "address": "2 Tech Place",
    "city": "Kraemer",
    "state": "Maryland",
    "zip": 24019,
    "country": "Saudi Arabia",
    "email": "sharplindsay@scentric.com",
    "phone": "(852) 538-3232",
    "color": "rgb(218,74,95)"
  }
];

var additionalData = [
  {
  "index": 26,
  "name": "Cooley Macdonald Two",
  "first": "Aida",
  "last": "Hurley",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/73.jpg",
  "boolean": false,
  "guid": "466a665b-b7b6-4eae-b404-e9b5a8d1641d",
  "integer": 20,
  "date": "Sun Jan 05 2014 15:48:57 GMT-0800 (PST)",
  "address": "4 Hall Street",
  "city": "Stouchsburg",
  "state": "District Of Columbia",
  "zip": 32399,
  "country": "Chile",
  "email": "aidahurley@scentric.com",
  "phone": "(975) 451-3272",
  "color": "rgb(119,239,85)"
  },
  {
    "index": 27,
    "name": "Snow Blankenship Two",
    "first": "Mccormick",
    "last": "Jensen",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/menghe/73.jpg",
    "boolean": false,
    "guid": "961f5da2-2479-4f45-9132-9e89a8bc32e4",
    "integer": 70,
    "date": "Tue Jan 22 1974 01:18:15 GMT-0700 (PDT)",
    "address": "3 Lewis Place",
    "city": "Elizaville",
    "state": "Virgin Islands",
    "zip": 32784,
    "country": "Norfolk Island",
    "email": "mccormickjensen@scentric.com",
    "phone": "(961) 443-3343",
    "color": "rgb(204,198,130)"
  },
  {
    "index": 28,
    "name": "Gabriela Brock Two",
    "first": "Ramona",
    "last": "Meyers",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/heyanata/73.jpg",
    "boolean": false,
    "guid": "07133f92-9308-420e-ae7b-e5ecd657aa85",
    "integer": 76,
    "date": "Sat Sep 15 1984 07:22:38 GMT-0700 (PDT)",
    "address": "3 Rodney Street",
    "city": "Orin",
    "state": "Puerto Rico",
    "zip": 60446,
    "country": "Japan",
    "email": "ramonameyers@scentric.com",
    "phone": "(839) 591-3993",
    "color": "rgb(236,222,59)"
  },
  {
    "index": 29,
    "name": "Graciela Orr Two",
    "first": "Sharp",
    "last": "Lindsay",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thibaut_re/73.jpg",
    "boolean": true,
    "guid": "0ea67b0a-5ea7-4e07-8d06-48b6e2a00c6e",
    "integer": 39,
    "date": "Mon May 25 1970 21:04:46 GMT-0700 (PDT)",
    "address": "2 Tech Place",
    "city": "Kraemer",
    "state": "Maryland",
    "zip": 24019,
    "country": "Saudi Arabia",
    "email": "sharplindsay@scentric.com",
    "phone": "(852) 538-3232",
    "color": "rgb(218,74,95)"
  }
  ];
  var minidata =
  [
  {
    "first": "Valentine",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "valentinemeyer@scentric.com",
    "phone": "(956) 428-2996",
    "color": "<button class='btn' style='color:rgb(201,142,97);'>Blue Bottle cardigan</button>"
  },
  {
    "first": "Silva",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "silvaalexander@gmail.com",
    "phone": "(823) 415-2224",
    "color": "<button class='btn' style='color:rgb(113,105,251);'>Freegan tilde</button>"
  },
  {
    "first": "Hopkins",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "hopkinswong@hotmail.com",
    "phone": "(814) 488-2063",
    "color": "<button class='btn' style='color:rgb(133,126,66);'>bespoke gastropub</button>"
  },
  {
    "first": "Harriet",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "harrietsherman@scentric.com",
    "phone": "(887) 497-3612",
    "color": "<button class='btn' style='color:rgb(195,89,110);'>dreamcatcher fingerstache</button>"
  },
  {
    "first": "Stacie",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "staciebartlett@scentric.com",
    "phone": "(957) 412-3261",
    "color": "<button class='btn' style='color:rgb(164,84,221);'>Etsy beard</button>"
  },
  {
    "first": "Lindsay",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "lindsay@gmail.com",
    "phone": "(956) 428-2996",
    "color": "<button class='btn' style='color:rgb(201,142,97);'>Austin meggings</button>"
  },
  {
    "first": "Shelley",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "shelley@hotmail.com",
    "phone": "(823) 415-2224",
    "color": "<button class='btn' style='color:rgb(113,105,251);'>Kitsch banjo</button>"
  },
  {
    "first": "Rita",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "rita@yahoo.com",
    "phone": "(814) 488-2063",
    "color": "<button class='btn' style='color:rgb(133,126,66);'>Brooklyn authentic</button>"
  },
  {
    "first": "Joe",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "joejoe@yahoo.com",
    "phone": "(887) 497-3612",
    "color": "<button class='btn' style='color:rgb(195,89,110);'>Pickled cray scenester</button>"
  },
  {
    "first": "Jane",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "jane@scentric.com",
    "phone": "(957) 412-3261",
    "color": "<button class='btn' style='color:rgb(164,84,221);'>8-bit migas</button>"
  }
];

document.addEventListener("WebComponentsReady", function() {

  table1Fixture = document.getElementById('table1');
  table1Fixture.tableData = data;

  table2Fixture = document.getElementById('table2');
  table2Fixture.tableData = minidata;

  table3Fixture = document.getElementById('table3');
  table3Fixture.tableData = minidata;

  table4Fixture = document.getElementById('table4');
  table4Fixture.tableData = data;

  table5Fixture = document.getElementById('myTable');
  table5Fixture.tableData = data;

  filtertest = document.getElementById('filtertest');
  filtertest.tableData = minidata;

  resetDataFixture = document.getElementById('resetTableWithNewData');
  resetDataFixture.tableData = minidata;

  additionalDataFixture = document.getElementById('updateTableWithAdditionalData');
  additionalDataFixture.tableData = data;

  updateSelectFixture = document.getElementById('updateTableWithSelection');
  // use `data.slice()` to avoid breaking `additionalDataFixture` tests
  updateSelectFixture.tableData = data.slice();

  remoteDataFixture1 = document.getElementById('remoteData1');
  remoteDataFixture1.tableData = minidata;

  remoteDataFixture2 = document.getElementById('remoteData2');
  remoteDataFixture2.tableData = minidata;

  remoteDataFixture3 = document.getElementById('remoteData3');
  remoteDataFixture3.tableData = minidata;

  remoteDataFilteringFixture1 = document.getElementById('remoteDataFiltering1');
  remoteDataFilteringFixture1.tableData = minidata;

  remoteDataFilteringFixture2 = document.getElementById('remoteDataFiltering2');
  remoteDataFilteringFixture2.tableData = minidata;

  remoteDataSortingFixture1 = document.getElementById('remoteDataSorting1');
  remoteDataSortingFixture1.tableData = minidata;

  remoteDataSortingFixture2 = document.getElementById('remoteDataSorting2');
  remoteDataSortingFixture2.tableData = minidata;

  runTests();
});



function runTests() {

  suite('Unit Tests for Data Table', function() {

    test('Polymer exists', function() {
      assert.isTrue(Polymer !== null);
    });
    test('table1 fixture is created', function() {
      assert.isTrue(document.getElementById('table1') !== null);
    });

    test('table2 fixture is created', function() {
      assert.isTrue(document.getElementById('table2') !== null);
    });
    test('table3 fixture is created', function() {
      assert.isTrue(document.getElementById('table3') !== null);
    });
    test('table4 fixture is created', function() {
      assert.isTrue(document.getElementById('table4') !== null);
    });
    test('myTable fixture is created', function() {
      assert.isTrue(document.getElementById('myTable') !== null);
    });

    // Spot checks for correct table structure, cell values and control states

    test('There should be 17 columns in the myTable fixture', function() {

      // Select a div corresponding to a data row in the table
      var divSelector = '#dataTable > .scroll-body.aha-table > div > :nth-child(4)';
      var columnCount = table5Fixture.querySelectorAll('aha-table px-data-table-column').length;
      // There should be 17 such spans
      assert.equal(columnCount, 17);
    });
    test('Value of 5th data row 2nd column of first table should be "Rita Lopez"', function() {
      var tb = Polymer.dom(table1Fixture.root).querySelector('aha-table'),
          cell = Polymer.dom(tb.root).querySelectorAll('.aha-name-td')[4];
      assert.include(cell.textContent, 'Rita Lopez');
    });
    test('Row count for first table should be 26', function() {
      var fixture = document.getElementById('table1');
      var selector = '.summary.style-scope.px-pagination :nth-child(3)';
      var span = fixture.querySelector(selector);
      assert.equal(span.innerHTML, '26');
    });
    // Spot checks for correct values in table cells and controls'
    test('First Name displays only first 10 characters  if length of the text is greater than 10 characters and elipse at the right', function() {
      var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
          cell = Polymer.dom(tb.root).querySelectorAll('.aha-first-td')[0];
      assert.include(cell.textContent, 'Isabel lon…');
    });
    test('Email displays only last 10 characters displayed if length of the text is greater than 10 characters', function() {
      var selector = '#dataTable > div.scroll-body div:nth-child(3) > .aha-image-td';
      var span = table5Fixture.querySelector(selector);
      assert.equal(span.innerHTML.indexOf('…/twitter/enda/73.jpg') >= 0, true);
    });
    test('Address displays total 10 characters with ellipse in the center if length of the text is greater than 10 characters', function() {
      var selector = '#dataTable > div.scroll-body div:nth-child(3) > .aha-address-td';
      var span = table5Fixture.querySelector(selector);
      assert.equal(span.innerHTML.indexOf('3 Vis…Place') >= 0, true);
    });

    // Spot checks for event upon interaction with pagination controls
    // The root element for pagination
    var paginationRoot = document.getElementById('pagination');
    // Selector for page 3 link
    var span3Selector = '.px-pagination > .px-pagination > :nth-child(5)';
    test('Pagination updates when page 3 link is clicked', function(done) {
      // Page 3 link
      var span3 = paginationRoot.querySelector(span3Selector);
      span3.addEventListener('click', function(e) {
        var startCountSelector = 'span.summary.px-pagination > :nth-child(1)';
        // Element that shows starting record number in '<start>-<end> of <total> in Pagination'
        var startCount = paginationRoot.querySelector(startCountSelector);
        // startCount should show '21' when page 3 is clicked
        assert.equal(startCount.innerHTML, '21-26');
        // End the test
        done();
      });
      // Trigger the CLICK event on page 3 link
      span3.click();
    });

    // Spot checks for filtering functionality
    test('Matching records are returned when filter text is entered', function(done) {
      var filterableTableRoot = document.querySelector('#table2');
      var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
      var lastNameFilter = filterableTableRoot.querySelector(lastNameFilterSelector);
      lastNameFilter.addEventListener('keyup', function(e){
        setTimeout(function() {
          var secondReturnedRowFirstNameSelector = '#dataTable :nth-child(4) .aha-first-td';
          var secondReturnedRowFirstName = filterableTableRoot.querySelector(secondReturnedRowFirstNameSelector);
          assert.equal(secondReturnedRowFirstName.innerHTML.indexOf('Rita') >= 0, true);
          done(); // end the test
        }, 1000);
      });
      // Trigger filter edit event and provide a filter value
      lastNameFilter.value = 'wo';
      lastNameFilter.dispatchEvent(new Event('keyup'));
    });

    test('When selecting all, select only what is filtered', function(done){

      var tb = Polymer.dom(table2Fixture.root).querySelector('aha-table');

      var filterableTableRoot = document.querySelector('#table2');
      var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
      var lastNameFilter = filterableTableRoot.querySelector(lastNameFilterSelector);

      var secondReturnedRowFirstNameSelector = '#dataTable :nth-child(4) .aha-first-td';
      var secondReturnedRowFirstName = filterableTableRoot.querySelector(secondReturnedRowFirstNameSelector);

      var selectionPath = '#dataTable';
      filterableTableRoot.querySelector("#selectAllCheckbox").checked = true;

      assert.equal(table2Fixture.selectedRows.length < table2Fixture.tableData.length, true, 'selceted row is not less that all rows');
      done();
    });

    // Spot checks for sorting functionality
    test('Records are sorted correctly when a sortable column header is clicked', function(done) {
      var sortableTableRoot = document.querySelector('#table1');
      var firstNameHeaderSelector = '.aha-first-th > div > span';
      var firstNameHeader = sortableTableRoot.querySelector(firstNameHeaderSelector);
      firstNameHeader.addEventListener('click', function(e){
        setTimeout(function() {
          var tb = Polymer.dom(sortableTableRoot.root).querySelector('aha-table'),
              lastNameRow = Polymer.dom(tb.root).querySelectorAll('.aha-last-td');

          assert.include(lastNameRow[9].textContent, 'Wooten');
          done(); // end the test
        }, 0);
      });
      // Trigger a click on the First Name column header
      firstNameHeader.click();
    });

    test('Table font is GE Inspira Sans', function(done){
      var tableFontFam = getStyle(table1Fixture, 'font-family');
      assert.include(tableFontFam, 'GE Inspira Sans');
      done();
    });

    test('Clicking on an editable cell switches to edit mode', function(done){
      var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
          cell = Polymer.dom(tb.root).querySelectorAll('.aha-last-td')[0];

      cell.click();

      flush(function(){
        var editCell = Polymer.dom(cell.root).querySelector('px-edit-cell'),
            editCellToTheLeft = Polymer.dom(cell.parentElement.querySelector('.aha-first-td').root).querySelector('px-edit-cell');
        assert.isFalse(editCell.classList.contains('hidden'));
        assert.isTrue(editCellToTheLeft.classList.contains('hidden'));
        done();
      });
    });

    test('Clicking on an editable cell has the correct style', function(done){
      var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
          cell = Polymer.dom(tb.root).querySelectorAll('.aha-last-td')[0];

      cell.click();

      flush(function(){
        assert.oneOf(getStyle(cell, 'background-color'), ['rgba(0, 0, 0, 0)', 'transparent']);
        assert.oneOf(getStyle(cell, 'border-right-width'), ['1px', '0.5px']);
        assert.equal(getStyle(cell, 'border-right-style'), 'double');
        assert.equal(getStyle(cell, 'border-right-color'), 'rgb(0, 122, 204)');
        assert.equal(getStyle(cell, 'box-shadow'), 'none');

        done();
      });
    });

    test('Test that the presence of the hide-pagination-control property hide these controls', function(done){
      var tb = Polymer.dom(table4Fixture.root).querySelector('aha-table'),
          paginationControl = Polymer.dom(tb.root).querySelector('px-pagination');

      assert.isTrue(paginationControl.classList.contains('visuallyhidden'));
      done();
    });

    test('Test that the hide-pagination-control property can be programmatically controlled', function(done){
      var tb = Polymer.dom(table4Fixture.root).querySelector('aha-table'),
          paginationControl = Polymer.dom(tb.root).querySelector('px-pagination');

      tb.hidePaginationControl = false;
      assert.isFalse(paginationControl.classList.contains('visuallyhidden'));
      tb.hidePaginationControl = true;
      assert.isTrue(paginationControl.classList.contains('visuallyhidden'));
      done();
    });

    test('Check consistent border-collapse fixing 1px padding on each side of table', function(done){
      var tb = Polymer.dom(table4Fixture.root).querySelector('aha-table'),
          tableScrollBody = Polymer.dom(tb.root).querySelector('.scroll-body');
      assert.equal(getStyle(tableScrollBody, 'padding-right'), '1px');
      assert.equal(getStyle(tableScrollBody, 'padding-left'), '1px');
      done();
    });

    test('_findMetaIndexFromColumnElement function returns 4 for email column', function(done){
      var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
          emailColumn = tb.children[3];
      assert.equal(tb._findMetaIndexFromColumnElement(emailColumn), 4);
      done();
    });

    test('_findMetaIndexFromColumnElement function returns 4 for email column', function(done){
      var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
          emailColumn = tb.children[3];
      assert.equal(tb._findMetaIndexFromColumnElement(emailColumn), 4);
      done();
    });

    test('dropdown opens on click', function(done){
      var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
          px_dropdown_cell = Polymer.dom(tb.root).querySelector('.td__dropdown'),
          px_dropdown = Polymer.dom(px_dropdown_cell.root).querySelector('px-dropdown'),
          button = px_dropdown.$.button,
          dropdown = px_dropdown.$.dropdown;
      assert.equal(getStyle(dropdown,'display'), 'none');
      button.click();
      setTimeout(function() {

        assert.notEqual(getStyle(dropdown, 'display'), 'none');
      },50);
      done();
    });
    test('items passed into dropdown are the ones shown', function(done){
      var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
          px_dropdown_cell = Polymer.dom(tb.root).querySelector('.td__dropdown'),
          px_dropdown = Polymer.dom(px_dropdown_cell.root).querySelector('px-dropdown'),
          dropdown = Polymer.dom(px_dropdown.root).querySelector('#dropdown'),
          selector = Polymer.dom(dropdown).querySelector('iron-selector'),
          firstDiv = Polymer.dom(selector.root).querySelector('div');
      assert.include(firstDiv.textContent, 'United');
      done();
    });

  });

  suite('Data table column manipulation tests', function() {
    // var tableWithColumnRepeat = document.getElementById('domrepeat');
    var tableWithColumnRepeat = document.getElementById('domrepeat');
    test('px-data-table-column elements added dynamically force the table to update and add the new column', function(done){
      var tb = Polymer.dom(tableWithColumnRepeat.root).querySelector('aha-table');

      assert.equal(tableWithColumnRepeat.nodeName, "PX-DATA-TABLE");
      var noCols = tableWithColumnRepeat.getEffectiveChildren().length;
      var noHeaderElements = Polymer.dom(tb.root).querySelectorAll(".th").length;
      var newEl = Polymer.Base.create('px-data-table-column', {'name': 'boolean', 'filterable': true});

      Polymer.dom(tableWithColumnRepeat).appendChild(newEl);
      flush(function(){
        assert.equal(tableWithColumnRepeat.getEffectiveChildren().length, noCols + 1);
        assert.equal(Polymer.dom(tb.root).querySelectorAll(".th").length, noHeaderElements + 1);
        done();
      });

    });

  });

  suite('Additional unit tests for when hide-pagination-control is used.', function(){

    test('Pagination controls are not displayed.', function(done){
        var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table');
        var paginationControl = Polymer.dom(tb.root).querySelector('px-pagination');
        table5Fixture.setAttribute('hide-pagination-control', true);
        flush(function(){
          assert.isTrue(paginationControl.classList.contains('visuallyhidden'));
          done();
        });
    });

  });

  suite('Column reordering', function(){

      test('Moving a column through drag and drop', function(done){
        //simulate moving column 'index' to column 'color'
        var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
            dragStart = new Event('dragstart'),
            drop = new Event('drop'),
            startElem = Polymer.dom(tb.root).querySelector('.aha-index-th'),
            stopElem  = Polymer.dom(tb.root).querySelector('.aha-color-th'),
            effChild = tb.getEffectiveChildren(),
            headers = Polymer.dom(tb.root).querySelectorAll('.th');


        //do all checks in light dom + shadow dom + meta
        //make sure 'index' is first
        assert.equal(effChild[0].name, 'index');
        assert.equal(tb.meta[1].name, 'index');
        assert.equal(headers[1].textContent.trim(), 'Index');

        //try moving the column
        startElem.dispatchEvent(dragStart);
        stopElem.dispatchEvent(drop);

        flush(function(){
          //verify order, 'index' should be last
          effChild = tb.getEffectiveChildren();
          headers = Polymer.dom(tb.root).querySelectorAll('.th');
          assert.equal(effChild[effChild.length-1].name, 'index');
          assert.equal(tb.meta[tb.meta.length-1].name, 'index');
          assert.equal(headers[headers.length-1].textContent.trim(), 'Index');

          done();
        });
      });
  });

  suite('Table data mutations tests', function(){
    //uses table3Fixture - no other tests using this. Adding/removing rows could unsettle other tests if they were using this fixture.

    test('Test table has 10 visible rows', function(done){
      var tb = Polymer.dom(table3Fixture.root).querySelector('aha-table');
      assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 10);
      done();
    });

    test('Setting table-data to empty array removes all rows from table', function(done){
      var tb = Polymer.dom(table3Fixture.root).querySelector('aha-table');
      var tableData = table3Fixture.tableData;
      assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 10);

      table3Fixture.tableData = [];
      flush(function(){
        assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 0);
        table3Fixture.tableData = tableData;
        flush(function(){
          assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 10);
          done();
        });
      });

    });

    test('Modifying data with selected rows updates `selectedRows`', function(done){
      var tableData = updateSelectFixture.tableData;
      assert.equal(updateSelectFixture.selectedRows.length, 0);

      // select the checkbox on the first row (the first one is global selector!)
      var firstRowCheckbox = updateSelectFixture.querySelectorAll("input[type=checkbox]")[1];

      // click on the checkbox to select the row
      firstRowCheckbox.click();
      flush(function(){
        assert.equal(updateSelectFixture.selectedRows.length, 1);

        // update table data. every operation will work.
        updateSelectFixture.push("tableData", tableData[0]);
        flush(function(){
          // de-select the row
          firstRowCheckbox.click();

          flush(function() {
            assert.equal(updateSelectFixture.selectedRows.length, 0);
            done();
          });
        });
      });
    });

  });

  suite('Table filtering tests', function() {
    var tb = Polymer.dom(filtertest.root).querySelector("aha-table");

    test('Filter header row should not be visible by default', function(done){
      var filterRowEl = Polymer.dom(tb.root).querySelector('.tr--filter');
      flush(function(){
        assert.isTrue(filterRowEl.classList.contains('hidden'), 'tr--filter row should have hidden class');
        done();
      });
    });

    test('When table set to filterable but no child columns are, filter row should be hidden', function(done){
      var filterInnerTable = Polymer.dom(filtertest.root).querySelector("aha-table");
      var filterRowEl = Polymer.dom(filterInnerTable.root).querySelector('.tr--filter');

      filtertest.filterable = true;

      assert.isTrue(filterRowEl.classList.contains('hidden'), 'tr--filter should have hidden class');
      done();
    });

    test('When table set to filterable and a child column is set to filterable, filter row should be visible', function(done){
      var filterInnerTable = Polymer.dom(filtertest.root).querySelector("aha-table");
      var filterRowEl = Polymer.dom(filterInnerTable.root).querySelector('.tr--filter');

      var colEl = filtertest.getEffectiveChildren()[0];

      filterInnerTable.set('meta.0.filterable', true);
      filtertest.filterable = true;

      assert.isFalse(filterRowEl.classList.contains('hidden'), 'tr--filter row should not have hidden class');
      done();
    });

    test('When table set to selectable, filter row should be visible', function(done){
      var filterInnerTable = Polymer.dom(filtertest.root).querySelector("aha-table");
      var filterRowEl = Polymer.dom(filterInnerTable.root).querySelector('.tr--filter');
      var selectionPath = '#dataTable :nth-child(3) .td input[type=checkbox]';
      filtertest.filterable = false;
      filtertest.selectable = true;
      filtertest.singleSelect = false;
      flush(function() {
        var selectionEls = Polymer.dom(filterInnerTable.root).querySelectorAll(selectionPath);
        assert.isFalse(filterRowEl.classList.contains('hidden'), 'tr--filter row should not have hidden class');
        assert.equal(selectionEls.length, 11);
        done();
      });
    });

    test('When table set to singleSelect, selection column should switch to radio buttons', function(done){
      var filterInnerTable = Polymer.dom(filtertest.root).querySelector("aha-table");
      var filterRowEl = Polymer.dom(filterInnerTable.root).querySelector('.tr--filter');
      var selectionPath = '#dataTable :nth-child(3) .td input[type=radio]';

      filtertest.filterable = false;
      filtertest.selectable = true;
      filtertest.singleSelect = true;
      flush(function() {
        var selectionEls = Polymer.dom(filterInnerTable.root).querySelectorAll(selectionPath);
        assert.isTrue(filterRowEl.classList.contains('hidden'), 'tr--filter row should have hidden class');
        assert.equal(selectionEls.length, 10);
        done();
      });
    });
});

  suite('Column show/hide tests', function(){

      var countHidden = function(headers) {
        var hiddenNumber = 0;
        headers.forEach(function(header, index) {
          if(header.style.display === 'none') {
            hiddenNumber++;
          }
        });
        return hiddenNumber;
      };

      test('show column already shown', function(done){
        var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table');

        assert.equal(table5Fixture.nodeName, "PX-DATA-TABLE");
        var headers = Polymer.dom(tb.root).querySelectorAll(".th");
        var hiddenNumber = 0;

        //make sure no headers are hidden
        assert.equal(countHidden(headers), 0);
        //and we have as many headers as column defs
        assert.equal(tb.meta.length, headers.length);

        //should already be shown so no diff
        tb.showColumn('email');
        flush(function(){

          headers = Polymer.dom(tb.root).querySelectorAll(".th");

          //make sure no headers are hidden
          assert.equal(countHidden(headers), 0);
          assert.equal(tb.meta.length, headers.length);
          done();
        });
      });

      test('hide then show column already shown', function(done){
        var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table');

        assert.equal(table5Fixture.nodeName, "PX-DATA-TABLE");
        var headers = Polymer.dom(tb.root).querySelectorAll(".th");

        //make sure no headers are hidden
        assert.equal(countHidden(headers), 0);
        //and we have as many headers as column defs
        assert.equal(tb.meta.length, headers.length);

        //should already be shown so no diff
        tb.hideColumn('email');
        flush(function(){

          headers = Polymer.dom(tb.root).querySelectorAll(".th");
          //make sure 1 is hidden
          assert.equal(countHidden(headers), 1);

          tb.showColumn('email');
          flush(function() {

            //make sure none are hidden
            assert.equal(countHidden(headers), 0);
            assert.equal(tb.meta.length, headers.length);
            done();
          });
        });
      });
      //
      test('hide column through column chooser', function(done){
        var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
            chooser = Polymer.dom(tb.root).querySelector('.columnChooser px-dropdown'),
            dropdown = Polymer.dom(chooser.root).querySelector('#dropdown'),
            selector = Polymer.dom(dropdown).querySelector('#selector'),
            ddItems = Polymer.dom(selector.root).querySelectorAll('div');

        //column chooser should exists
        assert.isDefined(chooser);

        //third column is shown
        assert.isTrue(ddItems[3].classList.contains('iron-selected'));
        var columnLabel = ddItems[3].val;

        //change the state of the dropdown item
        ddItems[3].click();
        flush(function(){

          var headers = Polymer.dom(tb.root).querySelectorAll(".th");
          assert.equal(countHidden(headers), 1);

          //cick again
          ddItems[3].click();
          flush(function(){

            headers = Polymer.dom(tb.root).querySelectorAll(".th");
            assert.equal(countHidden(headers), 0);
            //double check we've been reinserted at the same place, check header 3 + 1 to account for "select" column
            assert.equal(columnLabel, Polymer.dom(tb.root).querySelectorAll(".th")[4].textContent.trim());

            done();
          });
        });
      });

      test('Column chooser registers new columns', function(done){
        var tb = Polymer.dom(table5Fixture.root).querySelector('aha-table'),
            chooser = Polymer.dom(tb.root).querySelector('.columnChooser px-dropdown'),
            dropdown = Polymer.dom(chooser.root).querySelector('#dropdown'),
            selector = Polymer.dom(dropdown).querySelector('#selector'),
            ddItems = Polymer.dom(selector.root).querySelectorAll('div');

        var noItems = ddItems.length;
        var newEl = Polymer.Base.create('px-data-table-column', {'name': 'whatevs', 'filterable': true});

        Polymer.dom(table5Fixture).appendChild(newEl);
        flush(function(){
          setTimeout(function() {
            assert.equal(Polymer.dom(selector.root).querySelectorAll('div').length, noItems + 1);
            done();
          }, 200);
        });
    });
  });

  suite('Unit Tests for updating the data for Data Table', function () {

    test('Setting table-data to different set of data removes all rows from table and sets the new data', function (done) {
      var tb = Polymer.dom(resetDataFixture.root).querySelector('aha-table');
      var tableData = resetDataFixture.tableData;
      assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 10);

      resetDataFixture.tableData = [];
      flush(function () {
        assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 0);
        resetDataFixture.tableData = data;
        flush(function () {
          assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 26);
          done();
        });
      });

    });

    test('Adding another set of data to the table-data', function (done) {
      var tb = Polymer.dom(additionalDataFixture.root).querySelector('aha-table');
      var tableData = additionalDataFixture.tableData;
      assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 26);

      additionalDataFixture.tableData = tableData.concat(additionalData);
      flush(function () {
        assert.equal(Polymer.dom(tb.root).querySelectorAll('.rows').length, 30);
        done();
      });
    });
  });

  suite('Unit Tests for page size property', function () {

    test('Default pagination size is 10', function(){
      assert.equal(table1Fixture.pageSize, 10, 'Default page size should be 10 rows.');
    });

    test('Default rows displayed size is 10', function(){
      var tb = Polymer.dom(table1Fixture.root).querySelector('aha-table'),
          rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
      assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
    });

    test('Switching pageSize property to 20 should make table re-render', function(done){
      var tb = Polymer.dom(table1Fixture.root).querySelector('aha-table'),
          rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
      assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');

      table1Fixture.pageSize = 20;
      flush(function(){
        var newRowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(newRowCount, 20, 'Default rows displayed should be 20 rows.');
        done();
      });
    });
  });


  suite('Unit tests for px-data-table-column dropdown mode', function() {
    test('Changing a dropdown cell updates the table data', function() {
      var tableFixture = document.getElementById('tableWithDropdownColumn');
      var dropdownCell = Polymer.dom(tableFixture.root).querySelector('aha-table').querySelectorAll('px-data-table-cell')[0];
      var dropdown = Polymer.dom(dropdownCell.root).querySelector('px-dropdown');
      // Open dropdown
      dropdown.$.button.click();
      // Get "Wei" dropdown choice button and select it
      var weiChoiceButton = Polymer.dom(dropdown.root).querySelector('.dropdown-option[title="Wei"]');
      weiChoiceButton.click();
      assert.equal(tableFixture.tableData[0].first, 'Wei', 'Wei should be set as the first name in the first table data entry.');
    });
  });


  suite('Unit Tests for data remote property being `true`', function () {

    suite('Page 1', function () {

      test('Default pagination size is 10', function(){
        assert.equal(remoteDataFixture1.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = Polymer.dom(remoteDataFixture1.root).querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 1-10 of 100', function(){
        var paginationSpan = document.getElementById('remoteData1').querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 100', 'Shows correct pagination counts.');
      });

      test('Page 1 should be selected', function(){
        var paginationPager = document.getElementById('remoteData1').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert(page1IconClassList.indexOf('btn--icon') > -1 && page1IconClassList.indexOf('btn--pagination--number') > -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert.equal(page1IconClassList.indexOf('btn--bare'), -1, 'Does not have btn-bare class.');
      });

      test('Page 2 should NOT be selected', function(){
        var paginationPager = document.getElementById('remoteData1').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert(page2IconClassList.indexOf('btn--icon') === -1 && page2IconClassList.indexOf('btn--pagination--number') === -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert(page2IconClassList.indexOf('btn--bare') > -1, 'Does not have btn-bare class.');
      });

      test('Clicking Next Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData1');
        var pageChangeButton = dataTable.querySelector('.paging.px-pagination .btn--pagination.next');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 2, 'Requesting page 2');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 2', function() {
        var page = 2;
        var dataTable = document.getElementById('remoteData1');

        dataTable.firstItemIndex = 11;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert(pageNIconClass.indexOf('btn--icon') > -1 && pageNIconClass.indexOf('btn--pagination--number') > -1,
          'Page '+page+' is selected.');
      });

    });

    suite('Page 2', function () {

      test('Default pagination size is 10', function(){
        assert.equal(remoteDataFixture2.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = Polymer.dom(remoteDataFixture2.root).querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 11-20 of 100', function(){
        var paginationSpan = document.getElementById('remoteData2').querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 100', 'Shows correct pagination counts.');
      });

      test('Page 1 should NOT be selected', function(){
        var paginationPager = document.getElementById('remoteData2').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert(page1IconClassList.indexOf('btn--icon') === -1 && page1IconClassList.indexOf('btn--pagination--number') === -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert(page1IconClassList.indexOf('btn--bare') > -1, 'Does not have btn-bare class.');
      });

      test('Page 2 should be selected', function() {
        var paginationPager = document.getElementById('remoteData2').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert(page2IconClassList.indexOf('btn--icon') > -1 && page2IconClassList.indexOf('btn--pagination--number') > -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert.equal(page2IconClassList.indexOf('btn--bare'), -1, 'Does not have btn-bare class.');
      });

      test('Clicking Previous Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData2');
        var pageChangeButton = dataTable.querySelector('.paging.px-pagination .btn--pagination.previous');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 1, 'Requesting page 1');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 1', function() {
        var page = 1;
        var dataTable = document.getElementById('remoteData2');

        dataTable.firstItemIndex = 1;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert(pageNIconClass.indexOf('btn--icon') > -1 && pageNIconClass.indexOf('btn--pagination--number') > -1,
          'Page '+page+' is selected.');
      });

    });

    suite('Rows per Page Dropdown', function () {

      test('On change, it fires a `px-page-size-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData3');
        var pageSizeSelectDropdown = dataTable.querySelector('#pageSizeSelect');


        dataTable.addEventListener('px-page-size-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 50, 'Requesting page size of 50');
          done();
        });

        pageSizeSelectDropdown.selectedIndex = 2;
        // trigger "change" even that would happen naturally in a browser
        simulateChangeEvent(pageSizeSelectDropdown);
      });


      test('Updates value accordingly when value is passed in', function() {
        var dataTable = document.getElementById('remoteData3');
        var pageSizeSelectDropdown = dataTable.querySelector('#pageSizeSelect');

        dataTable.pageSize = 20;
        dataTable.totalEntries = 100;

        assert.equal(pageSizeSelectDropdown.selectedIndex, 1);

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-20 of 100', 'Shows correct pagination counts.');
      });

    });

    suite('Filtering', function () {

      test('Send event with combined filter string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataFiltering1');
          var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
          var lastNameFilter = dataTable.querySelector(lastNameFilterSelector);

          dataTable.addEventListener('px-filter-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","userEntry":"ab"}]', 'Requesting filter change');
            done();
          });

          lastNameFilter.value = 'ab';
          lastNameFilter.dispatchEvent(new Event('keyup'));
      });

      test('Send event with combined filter string for all columns', function (done) {

          var filters = [{name:'first', userEntry:'ab'}, {name:'last', userEntry:'cd'}];

          var dataTable = document.querySelector('#remoteDataFiltering2');
          var ahaTable = dataTable.querySelector('#dataTable');

          var firstNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(1) > input';
          var firstNameFilter = dataTable.querySelector(firstNameFilterSelector);

          var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
          var lastNameFilter = dataTable.querySelector(lastNameFilterSelector);

          var imageFilterSelector = 'div > div.tr.tr--filter > :nth-child(3) > input';
          var imageFilter = dataTable.querySelector(imageFilterSelector);

          dataTable.addEventListener('px-filter-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, JSON.stringify(filters), 'Requesting filter change on multiple columns');
            done();
          });

          ahaTable.filteredColumns = filters;
          imageFilter.dispatchEvent(new Event('keyup'));

      });
    });

    suite('Sorting', function () {

      test('Send event with combined sort string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataSorting1');
          var sortHeadingSelector = 'div > div.tr .th:nth-of-type(2) .column-head.sorted-text-hover';
          var sortHeading = dataTable.querySelector(sortHeadingSelector);

          dataTable.addEventListener('px-sort-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","direction":"ascending"}]', 'Requesting sort change');
            done();
          });

          sortHeading.dispatchEvent(new Event('click'));
      });

      test('Send event with combined sort string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataSorting2');
          var sortHeadingSelector = 'div > div.tr .th:nth-of-type(2) .column-head.sorted-text-hover';
          var sortHeading = dataTable.querySelector(sortHeadingSelector);

          sortHeading.dispatchEvent(new Event('click'));

          dataTable.addEventListener('px-sort-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","direction":"descending"}]', 'Requesting sort change');
            done();
          });

          // second click
          sortHeading.dispatchEvent(new Event('click'));
      });

    });

  });

}


// HELPER FUNCTIONS

function simulateChangeEvent(el)
{
    if (document.all)
    {
        el.change();
    }
    else
    {
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('change', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
        el.dispatchEvent(evObj);
    }
}
