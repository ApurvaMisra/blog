

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "Accessories":"Accessories",
    "Adult":"Adult",
    "Air":"Air",
    "Alternative":"Alternative",
    "Alumni":"Alumni",
    "Animal Welfare":"Animal Welfare",
    "Anime":"Anime",
    "Anime \u0026 Comics":"Anime \u0026 Comics",
    "Anime/Comics":"Anime/Comics",
    "Appearance":"Appearance",
    "Appearance or Signing":"Appearance or Signing",
    "Arts":"Arts",
    "Attraction":"Attraction",
    "Auto":"Auto",
    "Auto, Boat \u0026 Air":"Auto, Boat \u0026 Air",
    "Baby":"Baby",
    "Ballet":"Ballet",
    "Baseball":"Baseball",
    "Basketball":"Basketball",
    "Beauty":"Beauty",
    "Beer":"Beer",
    "Biotech":"Biotech",
    "Blues \u0026 Jazz":"Blues \u0026 Jazz",
    "Boat":"Boat",
    "Books":"Books",
    "Bridal":"Bridal",
    "Buddhism":"Buddhism",
    "Business":"Business",
    "Business \u0026 Professional":"Business \u0026 Professional",
    "Camp, Trip, or Retreat":"Camp, Trip, or Retreat",
    "Canoeing":"Canoeing",
    "Career":"Career",
    "Channukah":"Channukah",
    "Charity \u0026 Causes":"Charity \u0026 Causes",
    "Children \u0026 Youth ":"Children \u0026 Youth ",
    "Christianity":"Christianity",
    "Christmas":"Christmas",
    "City \u0026 Town":"City \u0026 Town",
    "City/Town":"City/Town",
    "Class":"Class",
    "Class, Training, or Workshop":"Class, Training, or Workshop",
    "Classical":"Classical",
    "Climbing":"Climbing",
    "Comedy":"Comedy",
    "Comics":"Comics",
    "Community":"Community",
    "Community \u0026 Culture":"Community \u0026 Culture",
    "Concert or Performance":"Concert or Performance",
    "Conference":"Conference",
    "Convention":"Convention",
    "Country":"Country",
    "County":"County",
    "County \u0026 Municipal Government ":"County \u0026 Municipal Government ",
    "County/Municipal Government ":"County/Municipal Government ",
    "Craft":"Craft",
    "Cultural":"Cultural",
    "Cycling":"Cycling",
    "DIY":"DIY",
    "Dance":"Dance",
    "Dating":"Dating",
    "Democratic Party":"Democratic Party",
    "Design":"Design",
    "Dinner or Gala":"Dinner or Gala",
    "Disaster Relief":"Disaster Relief",
    "Drawing \u0026 Painting":"Drawing \u0026 Painting",
    "EDM / Electronic":"EDM / Electronic",
    "Easter":"Easter",
    "Eastern Religion":"Eastern Religion",
    "Education":"Education",
    "Educators":"Educators",
    "Electronic \u0026 EDM":"Electronic \u0026 EDM",
    "Environment":"Environment",
    "Environment \u0026 Sustainability":"Environment \u0026 Sustainability",
    "Exercise":"Exercise",
    "Expo":"Expo",
    "Fall events":"Fall events",
    "Family \u0026 Education":"Family \u0026 Education",
    "Fashion":"Fashion",
    "Fashion \u0026 Beauty":"Fashion \u0026 Beauty",
    "Federal Government":"Federal Government",
    "Festival":"Festival",
    "Festival or Fair":"Festival or Fair",
    "Fighting \u0026 Martial Arts":"Fighting \u0026 Martial Arts",
    "Film":"Film",
    "Film \u0026 Media":"Film \u0026 Media",
    "Film, Media \u0026 Entertainment":"Film, Media \u0026 Entertainment",
    "Finance":"Finance",
    "Fine Art":"Fine Art",
    "Folk":"Folk",
    "Food":"Food",
    "Food \u0026 Drink":"Food \u0026 Drink",
    "Football":"Football",
    "Gala":"Gala",
    "Game":"Game",
    "Game or Competition":"Game or Competition",
    "Gaming":"Gaming",
    "Golf":"Golf",
    "Government":"Government",
    "Government \u0026 Politics":"Government \u0026 Politics",
    "Halloween":"Halloween",
    "Halloween/Haunt":"Halloween/Haunt",
    "Health":"Health",
    "Health \u0026 Wellness":"Health \u0026 Wellness",
    "Healthcare":"Healthcare",
    "Heritage":"Heritage",
    "High Tech":"High Tech",
    "Hiking":"Hiking",
    "Hip Hop \u0026 Rap":"Hip Hop \u0026 Rap",
    "Hip Hop / Rap":"Hip Hop / Rap",
    "Hobbies":"Hobbies",
    "Hobbies \u0026 Special Interest":"Hobbies \u0026 Special Interest",
    "Hockey":"Hockey",
    "Holiday":"Holiday",
    "Home \u0026 Garden":"Home \u0026 Garden",
    "Home \u0026 Lifestyle":"Home \u0026 Lifestyle",
    "Human Rights":"Human Rights",
    "Independence Day":"Independence Day",
    "Indie":"Indie",
    "International Aid":"International Aid",
    "Islam":"Islam",
    "Judaism":"Judaism",
    "Kayaking":"Kayaking",
    "Knitting":"Knitting",
    "LGBT":"LGBT",
    "Language":"Language",
    "Latin":"Latin",
    "Literary Arts":"Literary Arts",
    "Media":"Media",
    "Medical":"Medical",
    "Medicine":"Medicine",
    "Medieval":"Medieval",
    "Meeting or Networking Event":"Meeting or Networking Event",
    "Mental health":"Mental health",
    "Metal":"Metal",
    "Mobile":"Mobile",
    "Mormonism":"Mormonism",
    "Motorcycle":"Motorcycle",
    "Motorcycle/ATV":"Motorcycle/ATV",
    "Motorsports":"Motorsports",
    "Mountain Biking":"Mountain Biking",
    "Music":"Music",
    "Musical":"Musical",
    "Mysticism":"Mysticism",
    "Mysticism and Occult":"Mysticism and Occult",
    "Nationality":"Nationality",
    "Networking":"Networking",
    "New Age":"New Age",
    "New Years Eve":"New Years Eve",
    "Non Profit":"Non Profit",
    "Non Profit \u0026 NGOs":"Non Profit \u0026 NGOs",
    "Non-partisan":"Non-partisan",
    "Obstacles":"Obstacles",
    "Opera":"Opera",
    "Orchestra":"Orchestra",
    "Other":"Other",
    "Other Party":"Other Party",
    "Parenting":"Parenting",
    "Parents Association":"Parents Association",
    "Party":"Party",
    "Party or Social Gathering":"Party or Social Gathering",
    "Performance":"Performance",
    "Performing \u0026 Visual Arts":"Performing \u0026 Visual Arts",
    "Personal health":"Personal health",
    "Pets \u0026 Animals":"Pets \u0026 Animals",
    "Photography":"Photography",
    "Pop":"Pop",
    "Poverty":"Poverty",
    "R\u0026B":"R\u0026B",
    "Race":"Race",
    "Race or Endurance Event":"Race or Endurance Event",
    "Rafting":"Rafting",
    "Rally":"Rally",
    "Real Estate":"Real Estate",
    "Reggae":"Reggae",
    "Religion \u0026 Spirituality":"Religion \u0026 Spirituality",
    "Religious/Spiritual":"Religious/Spiritual",
    "Renaissance":"Renaissance",
    "Republican Party":"Republican Party",
    "Retreat":"Retreat",
    "Reunion":"Reunion",
    "Robotics":"Robotics",
    "Rock":"Rock",
    "Rugby":"Rugby",
    "Running":"Running",
    "Sales \u0026 Marketing":"Sales \u0026 Marketing",
    "Science":"Science",
    "Science \u0026 Tech":"Science \u0026 Tech",
    "Science \u0026 Technology":"Science \u0026 Technology",
    "Screening":"Screening",
    "Seasonal \u0026 Holiday":"Seasonal \u0026 Holiday",
    "Seminar":"Seminar",
    "Seminar or Talk":"Seminar or Talk",
    "Sikhism":"Sikhism",
    "Snow Sports":"Snow Sports",
    "Soccer":"Soccer",
    "Social Media":"Social Media",
    "Spa":"Spa",
    "Spirits":"Spirits",
    "Spiritual \u0026 Religious":"Spiritual \u0026 Religious",
    "Spirituality":"Spirituality",
    "Sports \u0026 Fitness":"Sports \u0026 Fitness",
    "St Patricks Day":"St Patricks Day",
    "St. Patricks Day":"St. Patricks Day",
    "Startups":"Startups",
    "Startups \u0026 Small Business":"Startups \u0026 Small Business",
    "State":"State",
    "State Government":"State Government",
    "Swimming \u0026 Water Sports":"Swimming \u0026 Water Sports",
    "TV":"TV",
    "Tennis":"Tennis",
    "Thanksgiving":"Thanksgiving",
    "Theatre":"Theatre",
    "Top 40":"Top 40",
    "Tour":"Tour",
    "Tournament":"Tournament",
    "Tradeshow, Consumer Show, or Expo":"Tradeshow, Consumer Show or Expo",
    "Travel":"Travel",
    "Travel \u0026 Outdoor":"Travel \u0026 Outdoor",
    "Volleyball":"Volleyball",
    "Walking":"Walking",
    "Wine":"Wine",
    "Yoga":"Yoga"
  };

  django.gettext = function (msgid, interpolation) {
    var value = django.catalog[msgid],
        text;

    if (typeof(value) == 'undefined') {
        text = msgid;
    } else {
        text = (typeof(value) == 'string') ? value : value[0];
    }

    if (interpolation) {
        return window.interpolate(text, interpolation, !(length in interpolation));
    } else {
        return text;
    }
  };

  django.ngettext = function(singular, plural, count, interpolation) {
    var value = django.catalog[singular],
        text;

    if (typeof(value) == 'undefined') {
        text = (count == 1) ? singular : plural;
    } else {
        text = value[django.pluralidx(count)];
    }

    if (interpolation) {
        text = window.interpolate(text, interpolation, !(length in interpolation));
    }

    return text;
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };

  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT":"N j, Y, P",
    "DATETIME_INPUT_FORMATS":[
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
    ],
    "DATE_FORMAT":"N j, Y",
    "DATE_INPUT_FORMATS":[
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y"
    ],
    "DECIMAL_SEPARATOR":".",
    "FIRST_DAY_OF_WEEK":"0",
    "MONTH_DAY_FORMAT":"F j",
    "NUMBER_GROUPING":"3",
    "SHORT_DATETIME_FORMAT":"m/d/Y P",
    "SHORT_DATE_FORMAT":"m/d/Y",
    "THOUSAND_SEPARATOR":",",
    "TIME_FORMAT":"P",
    "TIME_INPUT_FORMATS":[
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT":"F Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.interpolate = django.interpolate;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.get_format = django.get_format;

  /* Eventbrite */
  globals.window.EB_I18N = {
    "datepickerFormat":"dd/mm/yy",
    "dayNamesFull":[
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "dayNamesMedium":[
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "dayNamesShort":[
      "S",
      "M",
      "T",
      "W",
      "T",
      "F",
      "S"
    ],
    "firstWeekDay":0,
    "monthNamesFull":[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "monthNamesMedium":[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "monthNamesShort":[
      "J",
      "F",
      "M",
      "A",
      "M",
      "J",
      "J",
      "A",
      "S",
      "O",
      "N",
      "D"
    ]
  };

}(this));

