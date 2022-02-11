/**
 * QueryBuilder datasource
 */
export let books = [
  {
    name: "Introduction To Algorithms",
    description:
      "By Thomas H. Cormen (+3). This is a must have book for DSA. Little tough for beginners but worth it.",
    category: "Technical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Introduction-Algorithms-Eastern-Economy-Thomas/dp/8120340078?dchild=1&keywords=dsa+clrs&qid=1611658027&sr=8-14&linkCode=sl1&tag=learncodeonli-21&linkId=31e60aaee31a13b94417ede39db66eea&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Cracking The Coding Interview",
    description:
      "Personally read it, cracked it and now recommending it. Can take more than 6 months to finish.",
    category: "Technical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Cracking-the-Coding-Interview/dp/0984782869?crid=DQATLYDQYP7L&dchild=1&keywords=cracking+the+coding+interview&qid=1611660128&sprefix=cracking+the+co,aps,293&sr=8-1&linkCode=sl1&tag=learncodeonli-21&linkId=d3129518161969d2e3e71806a9a521f9&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Clean Code",
    description:
      "Good book. Little longer to read and could be shrinked a little. Get kindle version as lots of fakes in market.",
    category: "Technical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Clean-Code-Robert-C-Martin/dp/8131773388?dchild=1&keywords=clean+code&qid=1611661297&s=books&sr=1-1&linkCode=sl1&tag=learncodeonli-21&linkId=73447a6b6773a2b729a16b37e52ea4ef&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Cryptography & Network Security",
    description:
      "Read it during Engineering and loved it. Every software developer should read this book end to end.",
    category: "Technical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Cryptography-Network-Security-Principles-Practice/dp/9332585229/ref=sr_1_1?crid=25KOLEL04BGTX&dchild=1&keywords=cryptography&qid=1611661520&s=books&sprefix=cryptog%2Cstripbooks%2C298&sr=1-1",
  },
  {
    name: "Node JS Design Patterns",
    description:
      "A very clean book and helped me in shipping clean software to clients. It's a new guide for system design.",
    category: "Technical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Node-js-Design-Patterns-production-grade-applications/dp/1839214112?crid=OITSUH0499HI&dchild=1&keywords=design+patterns&qid=1611662146&s=books&sprefix=design+pa,stripbooks,299&sr=1-8&linkCode=sl1&tag=learncodeonli-21&linkId=4a087928d372e56f57de66742e4e29d6&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Database Design Solutions",
    description:
      "Just get it, read it in chunks and you will find gold everyday. This book needs time to fully grasp.",
    category: "Technical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Beginning-Database-Design-Solutions-Programmer/dp/0470385499?crid=264JB8ITX8LB6&dchild=1&keywords=database+design&qid=1611662718&s=books&sprefix=database+de,stripbooks,293&sr=1-3&linkCode=sl1&tag=learncodeonli-21&linkId=b8a159f8278b38c5145b1caf9aabd0c0&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Who Moved My Cheese?",
    description:
      "If you want to read just 1 book, I would easily recommend this one.",
    category: "NonTechnical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Who-Moved-Cheese-Spencer-Johnson/dp/0091883768?crid=1FFWEZLY6XKQN&dchild=1&keywords=who+moved+my+cheese+by+spencer+johnson&qid=1611660940&s=books&sprefix=who+mo,stripbooks,307&sr=1-1&linkCode=sl1&tag=learncodeonli-21&linkId=2398cf20e3737ebf1a8a5a4119c91318&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Bad Blood",
    description:
      "Very interesting one. Watch out, you might not be able to put it down.",
    category: "NonTechnical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Bad-Blood-Secrets-Silicon-Startup/dp/152473165X?dchild=1&keywords=theranos&qid=1611661041&s=books&sr=1-1&linkCode=sl1&tag=learncodeonli-21&linkId=95cd1c0d8c1c2fc660ee2228cf5e1405&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Why We Sleep",
    description: "Picked it up in 2020 and changed my routine after reading.",
    category: "NonTechnical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Why-We-Sleep-Matthew-Walker/dp/0141983760?pd_rd_w=UyHSL&pf_rd_p=c10d0b9c-438d-4711-90c0-57b4b7f6b336&pf_rd_r=RNNED96TY2PZNJ6C1H2H&pd_rd_r=a3446420-2131-4bc0-8c6d-5ac419e97ff8&pd_rd_wg=Dp9f0&pd_rd_i=0141983760&psc=1&linkCode=sl1&tag=learncodeonli-21&linkId=c7296ea74470bb0d0d24d90eb5f21c48&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "Atomic Habits",
    description:
      "Picked it up at an Airport and it turns out to be a great book. Pick a paperback, worth it. Don't just read, apply too!",
    category: "NonTechnical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834?crid=R07LH0PB0W8O&dchild=1&keywords=atomic+habits&qid=1611661872&s=books&sprefix=atomic+ha,stripbooks,301&sr=1-1&linkCode=sl1&tag=learncodeonli-21&linkId=4880d6f814276396b867947cffe046b5&language=en_IN&ref_=as_li_ss_tl",
  },
  {
    name: "World History",
    description:
      "A very odd recommendation but I loved it and this may give you some travel inspiration",
    category: "NonTechnical",
    buttonText: "Amazon Link",
    link: "https://www.amazon.in/Everything-Need-World-History-Notebook/dp/0761160949?dchild=1&keywords=world+history+book&qid=1611662399&s=books&sr=1-6&linkCode=sl1&tag=learncodeonli-21&linkId=641e7ce880b7e838b1783219c7fb81ff&language=en_IN&ref_=as_li_ss_tl",
  },
];
