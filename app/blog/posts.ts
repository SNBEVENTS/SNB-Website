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
  readingTime: string;
  intro: string;
  body: Section[];
  closing: string;
};

export const posts: Post[] = [
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
