const shows = [
  {
    _id: { $oid: "63a368e18d95e3a532db1045" },
    title: "The Witching",
    description:
      "A young adult stumbles into an awkward situation in this comedic show.",
    image:
      "https://images.unsplash.com/photo-1665883268480-aca4cf374d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&",
    mainCategory: "comedy",
    __v: 0,
    type: "show",
  },
  {
    _id: { $oid: "63a369888d95e3a532db1047" },
    title: "Explore via Hot Air",
    description:
      "Follow Dan and Greg as they explore a new part of the world each episode in a way you've never seen before",
    image:
      "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&",
    mainCategory: "travel",
    __v: 0,
    type: "show",
  },
  {
    _id: { $oid: "63a36a948d95e3a532db1049" },
    title: "Hike With Anna",
    description:
      "Anna shows the intricacies of her favorites Hikes in the world.",
    image:
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "travel",
    __v: 0,
    type: "show",
  },
  {
    _id: { $oid: "63a36b648d95e3a532db104b" },
    title: "Unknown Journeys",
    description:
      "Freja leaves her homeland of Sweden each episode to explore the culture and people from around the world.",
    image:
      "https://images.unsplash.com/photo-1510662145379-13537db782dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "travel",
    __v: 0,
    type: "show",
  },
  {
    _id: { $oid: "63a36c0e8d95e3a532db104d" },
    title: "Surf with Dave",
    description:
      "This series follows the daily life of world renowned surfer Dave.",
    image:
      "https://images.unsplash.com/photo-1522931698295-e7b4d3e4188f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzV8fHxlbnwwfHx8fA%3D%3D&",
    mainCategory: "documentary",
    __v: 0,
    type: "show",
  },
  {
    _id: { $oid: "63a5eefc90649329dc571282" },
    title: "Travel VAN-ia",
    description: "Dan the van man travel the US in his van.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&",
    mainCategory: "travel",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5ef7090649329dc571284" },
    title: "1 Backpack, 1 World",
    description: "Follow Tricia as she travels world on her back.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHw%3D&",
    mainCategory: "travel",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f00190649329dc571286" },
    title: "Where am I",
    description:
      "Steve travels to relatively unknown locations to share the world with viewers.",
    image:
      "https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&",
    mainCategory: "travel",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f1c190649329dc571288" },
    title: "Destinations Magnified",
    description:
      "Amy and Jim magnify each destination in this series by bringing to light little-known facts about each region of the world.",
    image:
      "https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRyYXZlbHxlbnwwfHwwfHw%3D&",
    mainCategory: "travel",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f26f90649329dc57128c" },
    title: "Camper Life",
    description:
      "This series examines the new culture phenomena of camper life.",
    image:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBpbmd8ZW58MHx8MHx8&",
    mainCategory: "documentary",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f2f690649329dc57128e" },
    title: "Synth is Everything",
    description:
      "Explore the history and importance of synthesizers in modern music.",
    image:
      "https://images.unsplash.com/photo-1560849807-bae5314c9e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3ludGh8ZW58MHx8MHx8&",
    mainCategory: "documentary",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f34790649329dc571290" },
    title: "Humans and The World",
    description: "Explore the impact humanity his making on the Earth.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHw%3D&",
    mainCategory: "documentary",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f3ab90649329dc571294" },
    title: "Coffee Rules All",
    description:
      "Everyone love coffee, but what is the science on the world favorite drink?",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&",
    mainCategory: "documentary",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f42e90649329dc571296" },
    title: "Revolution: Sourdough",
    description:
      "Everyone and their mother now makes sourdough, but the importance of this sacred loaf in the history of humanity is often forgotten.",
    image:
      "https://images.unsplash.com/photo-1590301157172-7ba48dd1c2b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZWFkfGVufDB8fDB8fA%3D%3D&",
    mainCategory: "documentary",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f51190649329dc57129e" },
    title: "Succulents Reign",
    description:
      "Take a depper look at succulent fever as people expand theri collections.",
    image:
      "https://images.unsplash.com/photo-1560244691-c59cfcc671fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VjY3VsZW50c3xlbnwwfHwwfHw%3D&",
    mainCategory: "documentary",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f62090649329dc5712ac" },
    title: "3 Painters, 1 Mission",
    description:
      "Watch as 3 renowned painters takle the same assignments in different ways.",
    image:
      "https://images.unsplash.com/photo-1535407338890-e52101286bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhaW50fGVufDB8fDB8fA%3D%3D&",
    mainCategory: "documentary",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f6b290649329dc5712ae" },
    title: "No Clowning Around",
    description:
      "Feddie the cop is no regular cop. He's not joking around; make sure to be on your best behavior.",
    image:
      "https://images.unsplash.com/photo-1587504218914-44346092cef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tZWR5fGVufDB8fDB8fA%3D%3D&",
    mainCategory: "comedy",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f73e90649329dc5712b0" },
    title: "Joe's Standup Special",
    description:
      "Joe is back with his next standup special series, filmed live across the country.",
    image:
      "https://images.unsplash.com/photo-1610964199517-5330d06631ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbWVkeXxlbnwwfHwwfHw%3D&",
    mainCategory: "comedy",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f7cf90649329dc5712b2" },
    title: "Worlds' Funniest Creatures",
    description: "Check out some of the world's cutest and funiest animals.",
    image:
      "https://images.unsplash.com/photo-1577617042081-e52d480158dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbWVkeXxlbnwwfHwwfHw%3D&",
    mainCategory: "comedy",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f83790649329dc5712b4" },
    title: "Jimmy's Adventures",
    description:
      "This childrens' series explores summer vacation as a child's immaginary friend.",
    image:
      "https://images.unsplash.com/photo-1649446801521-61ea6333f4c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvbWVkeXxlbnwwfHwwfHw%3D&",
    mainCategory: "comedy",
    type: "show",
    __v: 0,
  },
  {
    _id: { $oid: "63a5f8b590649329dc5712b8" },
    title: "My Fav Snacks",
    description:
      "Mr. Johnson displays and creates works of art out of his favorite snacks.",
    image:
      "https://images.unsplash.com/photo-1658959601071-4e83a82f262d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxjb21lZHl8ZW58MHx8MHx8&",
    mainCategory: "comedy",
    type: "show",
    __v: 0,
  },
];

export default shows;
