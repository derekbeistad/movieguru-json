const movies = [
  {
    _id: { $oid: "63a366228d95e3a532db1037" },
    title: "George",
    description:
      "Montana, 1920. A loner copes with sudden changes in his life.",
    image:
      "https://images.unsplash.com/photo-1665777916560-60bbcb0ce05b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&",
    mainCategory: "drama",
    __v: 0,
    type: "movie",
  },
  {
    _id: { $oid: "63a366788d95e3a532db1039" },
    title: "Haunting",
    description: "A ghost story exploring the feeling of lost love.",
    image:
      "https://images.unsplash.com/photo-1665807946084-7a56cffefff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&",
    mainCategory: "drama",
    __v: 0,
    type: "movie",
  },
  {
    _id: { $oid: "63a366c18d95e3a532db103b" },
    title: "Feeling Holi",
    description: "This documentary follows last years' Holi festival.",
    image:
      "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&",
    mainCategory: "documentary",
    __v: 0,
    type: "movie",
  },
  {
    _id: { $oid: "63a367358d95e3a532db103f" },
    title: "i'm Cracked",
    description:
      "This hilarious feature film follows the life of an egg coming to age.",
    image:
      "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&",
    mainCategory: "comedy",
    __v: 0,
    type: "movie",
  },
  {
    _id: { $oid: "63a367e48d95e3a532db1041" },
    title: "Jen's Story",
    description: "Jen is an up-and-coming writer dealing with lost love",
    image:
      "https://images.unsplash.com/photo-1621165307542-855e1b6e7e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "drama",
    __v: 0,
    type: "movie",
  },
  {
    _id: { $oid: "63a368a18d95e3a532db1043" },
    title: "A Day in Paris",
    description: "Tiffany experience her first work trip abroad",
    image:
      "https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "drama",
    __v: 0,
    type: "movie",
  },
  {
    _id: { $oid: "63a36d098d95e3a532db104f" },
    title: "Deep",
    description:
      "George away to live as a Floridian life-gaurd when life catches up with him.",
    image:
      "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvcnJvcnxlbnwwfHwwfHw%3D&",
    mainCategory: "drama",
    __v: 0,
    type: "movie",
  },
  {
    _id: { $oid: "63a4838ead4b2b69fa722c19" },
    title: "The Walk",
    description: "John looks back on his life as we walks from coast to coast.",
    image:
      "https://images.unsplash.com/photo-1657444984080-5c08464bde8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&",
    mainCategory: "drama",
    type: "movie",
  },
  {
    _id: { $oid: "63a4858b9de7e4a15ad3a254" },
    title: "Along The Tracks",
    description:
      "Sara and Brad reflect on the past week as the take the long train ride home.",
    image:
      "https://images.unsplash.com/photo-1669719467618-d0f2c82972cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "drama",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a4861f9de7e4a15ad3a256" },
    title: "Thread upon a Time",
    description:
      "Follow along as the crew shows what working in a thread factory looks like.",
    image:
      "https://images.unsplash.com/photo-1669556979519-99357ca828c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a4868f9de7e4a15ad3a258" },
    title: "We Persevere",
    description: "Learn the inspiring story of Jane and Joseph.",
    image:
      "https://images.unsplash.com/photo-1669516064139-a619446fe4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a486fc9de7e4a15ad3a25a" },
    title: "Street Food Life",
    description:
      "Love street food? Learn what it take to live and work as a street foods vendor.",
    image:
      "https://images.unsplash.com/photo-1668613962616-3e01fb649595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a487f79de7e4a15ad3a25c" },
    title: "Surf, Surf, Surf",
    description:
      "Follow as world renowned Surfers attempt to teach beginners how ride the waves.",
    image:
      "https://images.unsplash.com/photo-1506797220058-533e019ac7fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN1cmZ8ZW58MHx8MHx8&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a488ce9de7e4a15ad3a25e" },
    title: "Check Mate",
    description: "One of the worlds top chess players reflects on his life.",
    image:
      "https://images.unsplash.com/photo-1668816143737-b820e308fe6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwM3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a489419de7e4a15ad3a260" },
    title: "Life Through a Lens",
    description:
      "Top travel photographer Sven travels the world and share his life lessons learnt from years of backpacking through the world.",
    image:
      "https://images.unsplash.com/photo-1654252548194-86bbe56878ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a48b0b9de7e4a15ad3a262" },
    title: "Mental Metal",
    description: "Learn the process of metallurgy.",
    image:
      "https://images.unsplash.com/photo-1668957507185-f9560bb08ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a48b5c9de7e4a15ad3a264" },
    title: "Droning Dones",
    description:
      "Dones are taking over the world, but how difficult can they actually be to fly?",
    image:
      "https://images.unsplash.com/photo-1669104732072-cb994e0eda95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a48bd99de7e4a15ad3a266" },
    title: "Mountains",
    description:
      "Explore the largest mountain ranges like you've never seen before.",
    image:
      "https://images.unsplash.com/photo-1671047928516-40537cf7f592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Xzh6Rkh1aFJoeW98fGVufDB8fHx8&",
    mainCategory: "documentary",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a48f609de7e4a15ad3a268" },
    title: "Jenny's Party",
    description:
      "This story follows Jenny as she fumbles through her birthday party.",
    image:
      "https://images.unsplash.com/photo-1667328167872-24cdb3e2437e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "comedy",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a4904c9de7e4a15ad3a26a" },
    title: "Just Horsing Around",
    description:
      "Two buskers, Jeremy and Philip, decide to take things up a notch when they need a few extra bucks.",
    image:
      "https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVubnl8ZW58MHx8MHx8&",
    mainCategory: "comedy",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a490bb9de7e4a15ad3a26c" },
    title: "Just Some Eggular Guys",
    description:
      "This stop-motion comedy follows a group of friends stuck in their carton.",
    image:
      "https://images.unsplash.com/photo-1612878010854-1250dfc5000a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVubnl8ZW58MHx8MHx8&",
    mainCategory: "comedy",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a491959de7e4a15ad3a270" },
    title: "Starwalks",
    description:
      "Mr. Trooper must walk through the desert on his journey for freedom in this comedic stop-motion feature.",
    image:
      "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVubnl8ZW58MHx8MHx8&",
    mainCategory: "comedy",
    type: "movie",
    __v: 0,
  },
  {
    _id: { $oid: "63a492279de7e4a15ad3a272" },
    title: "Cool Guy",
    description: "Jones thinks he's a ghost, but can't give up his shades.",
    image:
      "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxmdW5ueXxlbnwwfHwwfHw%3D&",
    mainCategory: "comedy",
    type: "movie",
    __v: 0,
  },
];

export default movies;
