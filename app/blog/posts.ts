/*
  Blog posts live here as data rather than MDX files: there are six of them,
  they share one layout, and keeping them in one typed array means the listing
  page, the article pages and the sitemap all read from the same source and
  cannot drift apart.

  `body` is an array of sections so the article page can render consistent
  headings without any of the posts carrying markup of their own.
*/

export type Section = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  date: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /* object-position for the hero crop. Several of these are portrait photos
     in a wide banner, so centring them lands on the wrong part of the frame.
     Omitted means centre. */
  imagePosition?: string;
  readingTime: string;
  intro: string;
  body: Section[];
  closing: string;
};

export const posts: Post[] = [
  {
    slug: "briefing-an-events-agency",
    date: "November 2026",
    tag: "Working With Us",
    tagColor: "text-pop-pink",
    title: "How to Brief an Events Agency So You Get What You Want",
    excerpt:
      "Most briefs are too polite to be useful. The ones that produce good work say the awkward things early, starting with the budget.",
    image: "/portfolio/berry-connected-networking/guests-talking.jpg",
    imageAlt: "Guests talking at an SNB Events Agency event",
    readingTime: "5 min read",
    intro:
      "A brief is not a test. You are not trying to see whether the agency can read your mind, and holding things back does not get you a better proposal. It gets you three proposals that are all slightly wrong in different ways, and a round of meetings to find out why. Here is what makes the difference.",
    body: [
      {
        heading: "Lead with the budget",
        paragraphs: [
          "This is the one people hold back, usually because they are worried the number will simply be spent. It is also the single most useful thing you can tell us.",
          "Without it we are guessing at the scale of the thing. The proposal for sixty people at one budget and sixty people at three times that are not the same event with better flowers. They are different venues, different formats, different evenings.",
          "If you genuinely do not have a number yet, give a range, or give the number you would struggle to get approved. Either is more useful than nothing. A good agency will tell you honestly if what you want is not possible at that level, which is information you want in week one rather than week six.",
        ],
      },
      {
        heading: "Say what the event is for, not what it should look like",
        paragraphs: [
          "Briefs often arrive describing a mood: elegant, relaxed, high-energy. That is useful colour but it is not a brief, because every proposal can claim to deliver it.",
          "What helps is the purpose underneath. You are bringing two merged teams together for the first time. You are thanking people after a brutal year. You are trying to get a specific decision made. Each of those produces a different room, a different schedule and a different budget split.",
          "The most useful sentence you can write is what should be different afterwards.",
        ],
      },
      {
        heading: "Give the constraints early, especially the awkward ones",
        paragraphs: [
          "The CEO cannot arrive before Tuesday evening. Two people on the leadership team will not fly. There is a company policy on alcohol. Someone senior had a bad experience with a particular format and will veto it.",
          "None of these are problems if they are known at the start. All of them are problems if they emerge after a proposal has been built around them.",
          "Constraints are not a sign of a difficult client. They are the actual shape of the brief, and the earlier they appear the better the work gets.",
        ],
      },
      {
        heading: "Say who decides, and how",
        paragraphs: [
          "A proposal that goes to one person for sign-off and a proposal that goes to a committee are different documents, and they take different amounts of time to get through.",
          "Tell us who needs to approve, what they care about, and roughly when they are available. If three people have to agree and one of them is away for a fortnight, that fortnight is part of the timeline and it is better to plan around it than to discover it.",
        ],
      },
      {
        heading: "Tell us what happened last time",
        paragraphs: [
          "What worked, what did not, and what people complained about afterwards. This is worth more than any amount of inspiration imagery.",
          "If last year's dinner ran long and people left before the speeches, that is a design problem with a known solution. If the venue was beautiful and freezing, that tells us something about what to check this time.",
          "It also tells us what you are being compared against, which is useful to know before we start rather than after.",
        ],
      },
    ],
    closing:
      "The best briefs we get are often short. Half a page, honest about money, clear about purpose, with the awkward constraints stated plainly. Everything else can be worked out in a conversation.",
  },
  {
    slug: "questions-before-booking-a-venue",
    date: "October 2026",
    tag: "Venues",
    tagColor: "text-pop-orange",
    title: "The Questions to Ask Before You Book a Venue",
    excerpt:
      "A venue looks its best on a site visit with nobody in it. These are the questions that tell you how it behaves on the day.",
    image: "/portfolio/fomo-hotel-takeover/hotel-entrance.jpg",
    imageAlt: "The entrance to an event venue in Barcelona",
    readingTime: "5 min read",
    intro:
      "Every venue photographs well and every venue manager is helpful on the viewing. The difference between a space that works and one that causes problems is almost never visible in the room. It is in the answers to a handful of unglamorous questions.",
    body: [
      {
        heading: "What is actually included?",
        paragraphs: [
          "Tables, chairs, linen, glassware, staff, cleaning, a sound system. Any of these can be included or can be a line item, and the quote often does not say.",
          "A venue that is cheaper on paper and includes nothing is frequently the more expensive one once you have hired furniture and brought in a supplier for sound. Ask for the list of what comes with the room, in writing, before comparing prices between venues.",
        ],
      },
      {
        heading: "What time can we get in, and what time must we be out?",
        paragraphs: [
          "Access time decides how much is possible. A venue that opens to you at four for a seven o'clock start rules out anything that needs building, and that constraint will not be obvious when you are standing in an empty room on a Tuesday afternoon.",
          "Ask about the night before too. If the space is free, an evening set-up turns a frantic day into a calm one, and it is often cheaper than it sounds.",
        ],
      },
      {
        heading: "What happens if it rains?",
        paragraphs: [
          "For any event with an outdoor element, this is the question that matters most, and the honest answer is sometimes that there is no good plan.",
          "You want specifics. Which indoor space, how many people does it actually hold seated, how late can the call be made, and does moving inside cost extra. A venue that says it will be fine, without naming the room, does not have a plan.",
        ],
      },
      {
        heading: "What are the noise limits and the hard finish time?",
        paragraphs: [
          "Many venues, particularly in residential parts of a city, have a licensed finish time and a decibel limit that cuts in earlier than people expect. Some have a limiter wired into the sound system that will cut the music regardless of what anybody wants.",
          "Find this out before you plan an evening around a band. A party that has to end at eleven is a perfectly good party, as long as it was designed to end at eleven.",
        ],
      },
      {
        heading: "Who will actually be here on the day?",
        paragraphs: [
          "The person showing you round is frequently not the person who will be working your event. Ask who is on site, how many of them, and until when.",
          "This single question predicts more about how an evening goes than anything about the room. A modest space with an experienced team who are present throughout beats an impressive space where the manager leaves at eight.",
        ],
      },
      {
        heading: "What else is happening that day?",
        paragraphs: [
          "Shared venues frequently run more than one event. That can be fine, or it can mean your guests arriving through somebody else's reception, a shared bathroom queue, and the other party's music coming through the wall.",
          "Ask what else is booked, where it is, and how the two are separated. If nothing is booked yet, ask what would happen if something were.",
        ],
      },
    ],
    closing:
      "None of these questions are about how the venue looks, which is the part you can already judge. They are about how it behaves when there are two hundred people in it and something has gone wrong. That is the part you are really booking.",
  },
  {
    slug: "offsite-planning-timeline",
    date: "September 2026",
    tag: "Planning",
    tagColor: "text-pop-yellow",
    title: "A Realistic Timeline for Planning a Company Offsite",
    excerpt:
      "Most offsites are planned in a rush because the early months felt like there was time. Here is what should be happening when.",
    image: "/portfolio/vintage-summer-party/welcome-station.jpg",
    imageAlt: "A welcome station set up before an event",
    readingTime: "5 min read",
    intro:
      "The pattern is familiar. Six months out there is plenty of time, so nothing is decided. Two months out everything is urgent at once, the venues that were available have gone, and the agenda gets written on the plane. This is roughly how the months should be used instead.",
    body: [
      {
        heading: "Six to nine months out: dates, budget, purpose",
        paragraphs: [
          "Nothing else can be booked until these three exist, and they are the ones that take longest because they need other people to agree.",
          "Fix the dates first, even before the location. Dates are what everybody else plans around, and moving them later invalidates everything booked against them. Get the budget approved in principle at the same time, and write down in one sentence what the offsite is for.",
          "If your dates land in a peak period, this is also when you want to be looking at venues. In our experience the good properties in and around Barcelona go well before the three-month mark for popular weeks.",
        ],
      },
      {
        heading: "Four to six months out: venue and beds",
        paragraphs: [
          "Shortlist, visit if you can, and book. Accommodation at the same time, because for most offsites the beds are the binding constraint rather than the meeting space.",
          "Get the contract read properly now, not later. Access times, cancellation terms, minimum spend and what happens if numbers change are all much easier to negotiate before you have signed than after.",
        ],
      },
      {
        heading: "Two to three months out: the programme",
        paragraphs: [
          "Now the agenda, in detail, hour by hour. Who is leading each session, how long it really takes, and where the gaps are.",
          "This is also when to book anything that needs a supplier: transfers, the off-site dinner, the activity, a facilitator, the photographer. Those diaries fill at roughly the same rate as venues.",
          "Send the save-the-date to attendees here if you have not already. People need lead time for their own diaries, and late notice is the most common reason senior people cannot come.",
        ],
      },
      {
        heading: "One month out: the details",
        paragraphs: [
          "Final numbers, dietary requirements, rooming list, flight arrival times and the transfer schedule built around them.",
          "Share the agenda with everyone attending, including what to bring and what the dress code is for each evening. Half the questions you will otherwise field in the last week are answered by one clear email now.",
          "Walk the schedule looking for the things that are physically impossible: the session that ends at the same moment the coach leaves, the dinner that assumes everyone has changed in fifteen minutes.",
        ],
      },
      {
        heading: "The final fortnight: hold the line",
        paragraphs: [
          "Something will change. A speaker drops out, numbers move, someone decides the agenda needs reworking. The job in the last two weeks is to absorb those without redesigning the week.",
          "Resist additions. Late additions are the main way a well-paced offsite turns into a packed one, and the thing that gets squeezed is always the unstructured time that was doing the real work.",
        ],
      },
    ],
    closing:
      "The timeline is not complicated. The discipline is in treating the first three months as real work rather than as the comfortable period before the work starts. Everything that goes wrong late is usually something that was not decided early.",
  },
  {
    slug: "city-or-coast-offsite",
    date: "August 2026",
    tag: "Offsites",
    tagColor: "text-pop-pink",
    title: "City or Coast? Choosing Where to Hold Your Offsite",
    excerpt:
      "A city hotel and a coastal villa produce completely different weeks. The right answer depends on your agenda, not on which sounds nicer.",
    image: "/portfolio/hackathon-offsite-sitges/sangria-bar.jpg",
    imageAlt: "An outdoor bar set up at a villa in Sitges",
    imagePosition: "object-[center_45%]",
    readingTime: "4 min read",
    intro:
      "Almost every offsite conversation we have includes this question, and the coastal villa usually wins the vote in the room. Sometimes that is right. Often the city was the better answer and the decision was made on photographs.",
    body: [
      {
        heading: "Start with how people arrive",
        paragraphs: [
          "If your team is flying in from several countries on different airlines, a city hotel twenty minutes from the airport is worth more than any view. People arrive at eleven at night, they get to a bed, and they are functional the next morning.",
          "A villa an hour out means either a coach that waits for the last flight, leaving the early arrivals sitting at the airport, or several transfers, which costs more than people expect. Neither is a reason not to do it. Both are reasons to cost it properly before deciding.",
        ],
      },
      {
        heading: "Ask what the agenda needs from the building",
        paragraphs: [
          "This is the practical question that settles most of these decisions. Count the rooms you need simultaneously.",
          "A week that is one group in one room is easy anywhere. A week with breakouts needs three or four separate spaces at the same time, and most villas have one good indoor room and some lovely terraces. Lovely terraces are not breakout rooms in August at two in the afternoon, and they are not breakout rooms at all if it rains.",
          "Hotels are unglamorous but they are built for exactly this. If your agenda is session-heavy, that matters more than the setting.",
        ],
      },
      {
        heading: "Decide whether evenings should be planned or found",
        paragraphs: [
          "In the city, evenings organise themselves. You can leave a night free and people will find dinner, split into groups, and come back with something to talk about. That is genuinely valuable and it costs you nothing.",
          "At a villa, every evening is one you have to design and pay for, because there is nowhere else to go. That can be exactly the point, and a villa where the group eats together every night builds something a city week does not. But it is a budget line and some planning, not a saving.",
        ],
      },
      {
        heading: "Count the cost that is not on the quote",
        paragraphs: [
          "Remote venues move cost around rather than removing it. Catering is brought in rather than being downstairs. Anything forgotten is a forty-minute round trip. Staff may need to stay on site. Transport appears everywhere: the airport, the dinner, the activity, the departure.",
          "A villa that seems cheaper per head than a hotel frequently is not, once those are counted. It may still be the right choice. Just make the comparison with the real numbers.",
        ],
      },
      {
        heading: "A rough rule",
        paragraphs: [
          "If the point of the week is to get work done with a distributed team, the city usually wins: easier arrivals, more usable rooms, free evenings that cost nothing to run.",
          "If the point is to change how the group feels about each other, the coast usually wins: shared meals, no escape to a hotel room, and the sense of having gone somewhere.",
          "When teams want both, the pattern that works is two nights in the city for the sessions, then moving out for the final night and the dinner.",
        ],
      },
    ],
    closing:
      "The decision is not city versus coast. It is what the week has to achieve, and then which of the two is better built for it. The photographs are a tie-breaker, not the brief.",
  },
  {
    slug: "summer-events-barcelona-heat",
    date: "July 2026",
    tag: "Destinations",
    tagColor: "text-pop-orange",
    title: "Summer Events in Barcelona: What Works in the Heat",
    excerpt:
      "July and August here are glorious and genuinely hot. A few adjustments are the difference between a summer event people love and one they endure.",
    image: "/portfolio/summer-garden-party/terrace-bar.webp",
    imageAlt: "A terrace bar set up for a summer party in Barcelona",
    readingTime: "4 min read",
    intro:
      "Summer is why a lot of companies bring their events here, and it earns the reputation. It is also hotter and more humid than most visitors plan for, and events designed on a spreadsheet in a cooler country tend to make the same handful of mistakes. These are the adjustments that matter.",
    body: [
      {
        heading: "Move everything later",
        paragraphs: [
          "The single most effective change. An outdoor reception at six in July is not a reception, it is standing in direct sun in business clothes. The same event at eight is a different experience entirely.",
          "This is how the city already works. Spanish dinner times are late for a reason, and events that run on northern European timings fight the climate the whole way. Start later, finish later, and the same budget buys a much better evening.",
        ],
      },
      {
        heading: "Treat shade as a requirement, not a feature",
        paragraphs: [
          "When you view a venue in spring, a terrace reads as a bonus. In July, a terrace with no shade is unusable for several hours of the day.",
          "Ask what the shade situation actually is at the hour your event runs, not in general. Walk the space at that time if you can. If the answer is parasols, check how many and whether they cover the bar, which is where people will cluster.",
        ],
      },
      {
        heading: "Feed people lighter, and earlier",
        paragraphs: [
          "Heavy menus do not work in heat. People eat less, feel worse, and the catering budget is partly wasted.",
          "Lighter food, more of it, available earlier. Seafood, vegetables, things that are good at room temperature. This is also where Catalonia is genuinely easy: the local summer food is already built for the climate, and leaning into it is both better and usually cheaper than importing a menu designed elsewhere.",
        ],
      },
      {
        heading: "Water, everywhere and obvious",
        paragraphs: [
          "Not water available on request at the bar. Water visible, in reach, without anybody having to ask.",
          "Stations around the space, bottles on tables, and someone circulating during anything that keeps people standing. It costs very little and it prevents the thing that actually ruins summer events, which is a handful of guests quietly becoming unwell around hour three.",
        ],
      },
      {
        heading: "Have the indoor answer ready",
        paragraphs: [
          "Summer here is reliably sunny, which makes it tempting to plan with no contingency at all. The risk is less rain than it is a heatwave: a week where the evening temperature does not drop and outdoors stops being pleasant at any hour.",
          "You want a named indoor space with air conditioning that the group can move to, and a decision point for using it. Rarely needed, and the one time it is, it saves the night.",
        ],
      },
    ],
    closing:
      "None of this is a reason to avoid summer. It is the best time of year to be here and outdoor space is the whole reason to choose Barcelona. It just rewards planning around the climate rather than in spite of it.",
  },
  {
    slug: "planning-company-offsite",
    date: "June 2026",
    tag: "Offsites",
    tagColor: "text-pop-pink",
    title: "5 Things to Consider When Planning Your Company Offsite",
    excerpt:
      "An offsite is only as good as its design. Before you book the venue, there are five questions every leadership team should answer, and most don't.",
    image: "/portfolio/hackathon-offsite-sitges/villa-pool.jpg",
    imageAlt: "A villa pool set up for a company offsite in Sitges",
    readingTime: "5 min read",
    intro:
      "Most offsites are booked venue first. Someone finds a place that looks good, the dates get locked, and the agenda is written afterwards to fit the room. It works, in the sense that everyone turns up and nothing catches fire. But it rarely produces the week people remember. These are the five questions worth answering before anything is booked.",
    body: [
      {
        heading: "1. What is this offsite actually for?",
        paragraphs: [
          "There is a real difference between a week designed to make decisions, a week designed to rebuild relationships after a hard quarter, and a week designed to reward people. All three are legitimate. They produce completely different schedules.",
          "A decision-making offsite needs long uninterrupted blocks, a room that works for difficult conversations, and far less on the social programme than people expect. A relationship offsite is almost the opposite: the value is in the dinners and the walks, and the formal sessions are mostly there to give the days a shape.",
          "If you cannot answer this in one sentence, the agenda will end up trying to do all three and doing none of them well.",
        ],
      },
      {
        heading: "2. Choose the location around the agenda, not the other way round",
        paragraphs: [
          "A city-centre hotel is the right answer when people are flying in from six countries and you need everyone in a room by nine. A villa an hour outside the city is the right answer when the point is to be unreachable.",
          "The mistake is picking the more attractive location and then discovering the agenda does not fit it. A beautiful coastal property with one small indoor space is a problem if it rains and you have forty people who need to be in a workshop.",
          "Decide what the days need to contain first. The shortlist of venues that can actually hold those days is usually much shorter than it first appears.",
        ],
      },
      {
        heading: "3. Protect the downtime deliberately",
        paragraphs: [
          "The instinct when an offsite is expensive is to fill every hour, to make sure the budget is justified. This is the single most common way to ruin one.",
          "People need gaps to have the conversations the offsite is supposed to produce. The useful exchange almost never happens in the session. It happens walking back from lunch, or over a drink before dinner, when two people who email each other weekly finally talk properly.",
          "Build those gaps into the schedule as though they were sessions, because they are. If they are left as slack they will be the first thing someone fills.",
        ],
      },
      {
        heading: "4. Budget for the parts nobody lists",
        paragraphs: [
          "The venue, the rooms and the flights are easy to cost because someone quotes them. The parts that get missed are transfers, AV, the one dinner that moves off site, dietary requirements that need a separate supplier, and the contingency for the thing that changes in the last fortnight.",
          "Something always changes in the last fortnight. A speaker cancels, numbers move, a venue reveals a restriction nobody mentioned. If there is no room in the budget for that, the fix comes out of the experience.",
          "As a rough discipline, if your budget has no line you would be comfortable not spending, it is too tight.",
        ],
      },
      {
        heading: "5. Decide who is running it on the day",
        paragraphs: [
          "This is the question that decides whether your own team enjoys the offsite or spends it working.",
          "Someone has to chase the coach that is late, handle the room that was set up wrong, and find the vegetarian meal that did not arrive. If you have not named that person, it will default to whoever organised the trip, which is usually someone whose actual job was to be in the sessions.",
          "Either accept that cost and protect that person's time, or hand it to someone outside the team. What you cannot do is assume it will not come up.",
        ],
      },
    ],
    closing:
      "None of this is complicated. It is mostly a matter of answering the questions in the right order, early enough that the answers can still change what you book. Get those five right and the rest of the planning tends to follow.",
  },
  {
    slug: "barcelona-corporate-events",
    date: "May 2026",
    tag: "Destinations",
    tagColor: "text-pop-orange",
    title: "Why Barcelona is Europe's Top City for Corporate Events",
    excerpt:
      "World-class venues, year-round sun, and a city that knows how to host. Here is why more companies are bringing their events to Barcelona.",
    image: "/gallery-outdoor.jpg",
    imageAlt: "An outdoor corporate event in Barcelona",
    readingTime: "4 min read",
    intro:
      "We are based here, so take the enthusiasm with the appropriate pinch of salt. But the reasons companies keep choosing Barcelona are practical ones, and they hold up whether you are bringing twenty people or three hundred.",
    body: [
      {
        heading: "Getting everyone here is genuinely easy",
        paragraphs: [
          "This matters more than anything else on this list, and it is the thing people underweight. El Prat connects directly to most of Europe and a good deal further, and the airport is twenty minutes from the centre rather than an hour.",
          "For a distributed team, that difference compounds. It is the difference between people arriving ready to work and people arriving having spent a full day travelling. If half your group loses a day each way, you have effectively shortened a four-day offsite to two.",
        ],
      },
      {
        heading: "The weather extends what you can plan",
        paragraphs: [
          "Reliable sun from spring through to late autumn means outdoor space is a real option rather than a gamble with a wet-weather plan attached.",
          "That changes the character of an event. Dinner in a courtyard, a session on a terrace, a beach afternoon that does not need to be rescheduled. You get more usable space for the same budget, because the garden counts.",
          "Winter is milder than most of northern Europe too, which is why end-of-year parties here do not have to be entirely indoors.",
        ],
      },
      {
        heading: "The venues are not all conference rooms",
        paragraphs: [
          "Barcelona and the surrounding region have an unusual density of spaces that were built for something other than corporate events: modernist buildings, old industrial spaces in Poblenou, masias and wineries inland, and private villas along the coast at Sitges and the Costa Brava.",
          "This is the real argument for the city. You can put a hundred people somewhere genuinely memorable without chartering anything or building from scratch. A week that happens in interesting rooms feels different from a week that happens in a hotel basement, and it costs less than people assume.",
        ],
      },
      {
        heading: "The city does some of the work for you",
        paragraphs: [
          "Free evenings are not a problem to solve here. People will find dinner, walk somewhere worth walking, and come back with something to talk about the next morning.",
          "That reduces how much programme you need to build, which is both a budget saving and usually a better experience. Not every hour has to be organised when the city outside is this easy to spend time in.",
        ],
      },
      {
        heading: "One honest caution",
        paragraphs: [
          "Barcelona's popularity is also its drawback. Through the main season, and especially around the large tech and industry congresses, the good venues and hotels go early and the prices move with demand.",
          "If your dates are fixed and they fall in a busy window, start six to nine months out rather than three. If your dates are flexible, late spring and early autumn give you the weather without the peak, and your budget goes noticeably further.",
        ],
      },
    ],
    closing:
      "The short version: easy to reach, usable outdoors for most of the year, full of venues that are not conference rooms, and interesting enough that your free evenings plan themselves. Just book earlier than feels necessary.",
  },
  {
    slug: "brand-launch-that-lands",
    date: "April 2026",
    tag: "Brand Events",
    tagColor: "text-pop-yellow",
    title: "How to Make Your Brand Launch Actually Land",
    excerpt:
      "Most brand launches are forgettable. Here is what the best ones have in common, and how to make sure yours is not one of the ones people forget.",
    image: "/brand-activation.jpg",
    imageAlt: "A brand activation event space",
    readingTime: "5 min read",
    intro:
      "A launch event is one of the few occasions where the room itself is the message. Get it right and people leave understanding the brand in a way no deck would have achieved. Get it wrong and you have spent a significant budget on a party that happened to have your logo on the wall.",
    body: [
      {
        heading: "Decide what people should leave with",
        paragraphs: [
          "Not what they should see. What they should be able to say about you the next day, unprompted, to someone who was not there.",
          "That sentence is the brief. Every decision after it, the space, the format, the food, the length, should be tested against whether it makes that sentence more likely or less. Most launch events fail here, not in execution. They are well run and they communicate nothing in particular.",
        ],
      },
      {
        heading: "Invite fewer people",
        paragraphs: [
          "The instinct is to maximise the room. Resist it. A full room of the wrong people is worse than a half-full room of the right ones, because the people who matter cannot move, cannot talk to you, and leave early.",
          "Work out who actually needs to understand this launch. Usually it is a much smaller list than the one you started with. Spend the difference on making their experience better rather than on accommodating people who came for the drinks.",
        ],
      },
      {
        heading: "Design for the phone in the room",
        paragraphs: [
          "Most of the reach from a launch event does not come from the people present. It comes from what they post, and from the footage you use afterwards.",
          "That does not mean building a branded backdrop and hoping. It means designing at least one thing in the space that is genuinely worth photographing, placing it where people will encounter it naturally rather than queue for it, and making sure it is lit well enough that a phone picture looks good.",
          "If you have to tell people where the photo moment is, it is not working.",
        ],
      },
      {
        heading: "Give press and creators a reason beyond the invitation",
        paragraphs: [
          "Journalists and creators are invited to a great many launches. Attendance is a cost to them, not a favour you are doing them.",
          "The ones who come are the ones who will leave with something they can use: access to a founder, a first look at something nobody has seen, or an experience they cannot write about secondhand. Decide what that is before the invitations go out, and say it on the invitation.",
        ],
      },
      {
        heading: "Plan the week after before the night itself",
        paragraphs: [
          "The event is the beginning of the campaign, not the end of it. The footage, the photography, the follow-up to everyone who attended, and the sequence of posts all need to exist as a plan before the doors open.",
          "In practice this means booking the photographer and videographer with a brief tied to what you want to publish, not just to cover the night. It also means someone owning the follow-up on day one, while the event is still recent enough to be worth mentioning.",
        ],
      },
    ],
    closing:
      "The launches that land are rarely the most expensive ones. They are the ones where somebody decided early what the event was supposed to say, and then had the discipline to cut everything that did not say it.",
  },
  {
    slug: "team-building-that-works",
    date: "March 2026",
    tag: "Team Building",
    tagColor: "text-pop-pink",
    title: "Team Building That People Actually Enjoy",
    excerpt:
      "The words 'team building' make most people cringe. Here is how to design an experience your team will actually talk about, for the right reasons.",
    image: "/team-building.jpg",
    imageAlt: "A team building activity in Barcelona",
    readingTime: "4 min read",
    intro:
      "There is a reason the phrase has a bad reputation. Most people's experience of team building involves being asked to do something slightly embarrassing with colleagues they do not know well, in front of colleagues they do. The activity is not usually the problem. The design around it is.",
    body: [
      {
        heading: "The problem is compulsory performance",
        paragraphs: [
          "What people dread is not spending time with their team. It is being made to perform in front of them: the icebreaker where everyone shares something personal, the exercise where one person has to lead and everyone watches.",
          "That format asks the most of exactly the people who find it hardest, and it asks it in public. The quiet, competent person who is excellent at their job has a bad afternoon, and the lesson they take away is to avoid the next one.",
        ],
      },
      {
        heading: "Build it around something that is genuinely absorbing",
        paragraphs: [
          "The activities that work are the ones where the task is interesting enough that people forget they are team building. Cooking something together, a sailing afternoon, a proper competition with real stakes, building something that has to actually function.",
          "The shared experience does the work. Nobody needs to be told to bond when they are jointly responsible for a paella that is going badly.",
          "The test is simple. Would a group of friends choose to do this on a Saturday? If not, you are relying on obligation to make it happen.",
        ],
      },
      {
        heading: "Make opting out invisible",
        paragraphs: [
          "Someone will not want to do the physical activity, will not drink, or will need to take a call. The design should let them step out without it being a moment.",
          "That usually means having a second thing happening nearby rather than a single activity everyone faces. A group where two people are watching and talking rather than participating is a working group. A group where two people are conspicuously sitting alone is not.",
        ],
      },
      {
        heading: "Mix the groups on purpose",
        paragraphs: [
          "Left alone, people will form teams with the colleagues they already know, and the afternoon will reinforce exactly the silos it was meant to break down.",
          "Assign the groups, and assign them deliberately across functions and seniority. Nobody minds being told which team they are on. Everybody minds being made to pick in a room.",
        ],
      },
      {
        heading: "End at a table",
        paragraphs: [
          "Whatever the activity, finish with everyone sitting down and eating together. This is where the day actually pays off.",
          "The activity gives people something in common to talk about, which is the hard part of a meal with people you do not know well. The meal gives them the time to use it. Doing the activity and then sending everyone home skips the part that produces the result.",
        ],
      },
    ],
    closing:
      "The good version of team building does not announce itself. People come away saying they had a genuinely good afternoon, and the working relationships are better the following week. Nobody has to call it team building for it to have worked.",
  },
  {
    slug: "eoy-party-planning",
    date: "February 2026",
    tag: "Company Events",
    tagColor: "text-pop-orange",
    title: "How to Plan an End-of-Year Party That Feels Effortless",
    excerpt:
      "End-of-year parties should not be stressful to organise. A simple brief, the right supplier, and a bit of lead time is all it takes to get it right.",
    image: "/cheers.jpg",
    imageAlt: "Guests toasting at a company celebration",
    readingTime: "4 min read",
    intro:
      "The end-of-year party is usually organised by somebody whose job it is not, on top of everything else they are doing in the busiest month of the year. That is why so many of them feel rushed. It is almost never a budget problem. It is a lead-time and ownership problem.",
    body: [
      {
        heading: "Start before it feels necessary",
        paragraphs: [
          "The good venues for December are gone by September, and in many cases earlier. If you begin looking in November you are not choosing a venue, you are taking what is left.",
          "Booking early is also the cheapest thing you can do. December pricing moves with scarcity, and the same space costs meaningfully less when you commit in summer than when you commit six weeks out.",
        ],
      },
      {
        heading: "Write the brief on one page",
        paragraphs: [
          "Numbers, date, budget range, and three sentences on what you want the evening to feel like. That is enough for any competent supplier to come back with something useful.",
          "What slows everything down is not having decided. If the headcount is still moving and the budget is unconfirmed, every quote is provisional and nothing can be booked, which is how you end up in November with nothing locked.",
        ],
      },
      {
        heading: "Pick a venue that removes problems",
        paragraphs: [
          "A space with its own kitchen, its own sound system and its own staff is worth more than a more striking space that needs all three brought in. Every element you have to supply is another contract, another delivery window and another thing that can be late.",
          "This is the main lever on how stressful the night is for whoever is running it. A beautiful empty warehouse is a production project. A venue that does this every week is not.",
        ],
      },
      {
        heading: "Feed people properly, and earlier than you think",
        paragraphs: [
          "The single most reliable way to make an evening go badly is drinks at seven and food at ten. People arrive straight from work having not eaten, and the two hours before dinner do the damage.",
          "Put real food out early. Not canapés that require you to catch a waiter, but something substantial that people can reach without hunting. It costs very little relative to the drinks budget and it changes the whole shape of the night.",
        ],
      },
      {
        heading: "Decide how it ends",
        paragraphs: [
          "Parties that drift to a close leave a flat impression, and parties with no transport plan leave people stranded in a city at one in the morning.",
          "Pick a finish time and make it known. Arrange transport or at least tell people clearly what their options are. If there is a second location, decide in advance and tell people at the start, rather than letting it be improvised by whoever is most enthusiastic at midnight.",
        ],
      },
    ],
    closing:
      "An effortless-feeling party is almost always one that was booked early and briefed clearly. The elaborate ideas can come later. The lead time cannot be recovered.",
  },
  {
    slug: "corporate-retreat-roi",
    date: "January 2026",
    tag: "Retreats",
    tagColor: "text-pop-yellow",
    title: "The Real ROI of a Corporate Retreat",
    excerpt:
      "Retreats are often seen as a cost. The companies that get the most out of them treat them as an investment, and design them accordingly.",
    image: "/villa-rosa.jpg",
    imageAlt: "A retreat venue in Catalonia",
    readingTime: "5 min read",
    intro:
      "Retreats are an easy line to question. They are visible, they are not small, and the benefit is harder to point at than the invoice. That is a fair challenge, and it deserves a better answer than the claim that they are good for culture.",
    body: [
      {
        heading: "What you are actually buying",
        paragraphs: [
          "The thing a retreat buys that nothing else does is concentrated, undistracted time between people who normally interact in fragments.",
          "For a distributed team this is the only point in the year when the full context exists in one room. Decisions that have been circling for months get made in an afternoon, not because anyone worked harder, but because everyone needed is present and nobody is half in another meeting.",
          "For a team that shares an office, the value is different and usually smaller. Be honest about which situation you are in, because it changes what the retreat is worth.",
        ],
      },
      {
        heading: "Count the costs people forget",
        paragraphs: [
          "The real cost is not the venue and the flights. It is those plus several days of everybody's time, which for most teams is the larger number by some distance.",
          "This is not an argument against retreats. It is an argument for taking the agenda seriously. If the time is the main cost, then a vague agenda is the expensive mistake, not the venue upgrade.",
        ],
      },
      {
        heading: "Decide how you will know it worked",
        paragraphs: [
          "Before the retreat, write down what should be true afterwards that is not true now. Decisions made, a plan agreed, a specific disagreement resolved, new working relationships between named people.",
          "Then check at ninety days. Not with a survey on the last afternoon, when everyone is well fed and feeling positive about each other, which measures the catering more than the outcome.",
          "The companies that keep running retreats are generally the ones that can point to things that happened because of them. That record is what makes the next one easy to approve.",
        ],
      },
      {
        heading: "What actually separates the good ones",
        paragraphs: [
          "In our experience it is rarely the budget. It is whether somebody owned the agenda with the same seriousness they would a board meeting, and whether the logistics were off the team's plate.",
          "A retreat where the organiser spends three days firefighting is a retreat where one of your most capable people did not attend their own event. That is a real cost, and it is invisible on the invoice.",
        ],
      },
      {
        heading: "When a retreat is the wrong answer",
        paragraphs: [
          "If the problem is a specific unresolved conflict between two people, a retreat will not fix it and may make it more public.",
          "If the problem is that people do not know what the strategy is, a retreat will not substitute for leadership deciding what the strategy is. It is a very expensive way to have that conversation for the first time.",
          "Retreats are good at consolidating, deciding and connecting. They are poor at generating clarity that does not exist yet.",
        ],
      },
    ],
    closing:
      "Treated as a perk, a retreat is a cost with a vague benefit. Treated as the one time all year your team is genuinely in the same room, with an agenda to match, it is usually the cheapest way to get a year's worth of circling decisions finished.",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
