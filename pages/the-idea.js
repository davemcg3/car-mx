import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Header />

      <h2>TL;DR, AKA The Eleveator Pitch</h2>
      <p>An app that allows you to track maintenance events on a vehicle and notifies you when the next maintenance event is due.</p>

      <h2>Prologue</h2>
      <p>My wife and I traveled across the country by car when we were newly married. We started the trip in Los Angeles and drove all the way out to New York through the northern part of the country and then returned to Los Angeles across the southern part of the country. We kept track of our fill-ups on a spreadsheet. I set up some formulas to calculate our fuel mileage based on the miles we drove and the amount of gas we added to the car. I played around with some formulas for average cost per fill-up and did some things to total our costs for the trip. It was an effective spreadsheet and I kept it going for several months after we got back, but ultimately I found myself skipping logging during fill-ups because I didn't have easy access to the internet from my flip-phone (this was 2005 after all) and I ultimately gave up on the spreadsheet, but I never gave up on the idea. I often find myself not remembering the mileage when I last did an oil change on the car, or a year after buying tires I can't remember if I bought the 20k-, 30k-, or 40k mile tires and even if I remembered that I don't remember the mileage when I installed them. I need a system to keep track of that information for me.</p>
      <p>I took my first programming course in 2005 learning C++. I figured I could write a command-line program to enter the information, but ultimately landed on the idea that this would be worse than using a spreadsheet. Not only did I have to wait until I got to a computer but now it would have to this program installed on it too? This wouldn't do. In the early part of 2006 I started learning PHP and I realized I could pretty easily build a website to run this program with a nice form for adding new entries. Except I didn't know how to store them because I didn't know databases. So I shelved the idea determined to revisit it once I understood databases.</p>
      <p>Later that year I learned databases but I didn't pick the idea back up. I had some side projects I was already working on and landed some paid gigs that kept me from working on this idea. It was there in the back of my mind, and I figured I'd build it later. I ended up getting pretty good with PHP, and then I learned some Python, and I learned Ruby on Rails, and then I learned React, and life has just kept me spinning on other projects. I spent several years occasionally thinking about the idea, refining the idea, but I never built the idea.</p>
      <p>I now have this insanely complicated idea for an application with an API back-end that can feed a website, an Android app, and an iOS app that uses machine learning and AI to predictively determine when you've missed fill-ups, can handle any maintenance you can do on a car, knows based on the model which maintenance you need (like a car with a timing chain doesn't need the timing belt replaced, etc.), and can suggest to you when you've missed or never done maintenance on a car. I have no idea where I would get any of the data I need to build this thing, I don't know how to do machine learning, I don't know how to build an AI. There's so much overhead of things to do and learn before I can even <em>start</em> to build this <strike>app</strike> <em>system</em>. It's 2021 and I'm actually further away from building this thing than I was in 2005.</p>
      <p>So scratch all that. What's the smallest thing I can build that can be usable by other people?</p>

      <h2>The Idea</h2>
      <p>There's a few core pieces to this system that I think I can glue together fairly quickly. The core models I need are:</p>
      <ol>
        <li>User</li>
	<li>User login</li>
	<li>Vehicle</li>
	<li>Vehicle Part</li>
	<li>Maintenance Event</li>
      </ol>
      <p>I want users to be able to login multiple ways so I've separated out a user from a user login, that way I can associate multiple user logins with the same user object.</p>
      <p>A user has a vehicle. But also, a user can have many vehicles. And also, a vehicle can belong to many users. I'll need to model a many-to-many relationship there. A vehicle can also belong to a family or to a company or to an organization and then a user can be associated with a vehicle through different roles in the family/company/organization, maybe as a driver or as a maintainer or as- STOP. Let's keep this simple for the MVP and we can model out these more complex relationships after we get an MVP up. For the MVP a user can have many vehicles and a vehicle can belong to many users.</p> 
      <p>A vehicle can have many vehicle parts. For purposes of this app I'm going to define a vehicle part as anything <em>changeable</em> on a vehicle, things like tires or oil or an air filter. They are changed through a maintenance event. A maintenance event is just a log that something was done to the vehicle.</p>
      <p>That's the absolute simplest core of the app. I have lots of other features I'd like to add. Someday. But not today.</p>

      <h2>The Plan</h2>
      <p>I asked on <a href="https://twitter.com/davemcg3/status/1441780101981503497">Twitter</a> what people would want to see from an app built in public and was given this reply:</p>
      <quote>
I'm always interested to know how people:<br />
- decide what tech to use<br />
- approach planning and design<br />
- prioritize what to build when<br />
- stay organized<br />
- choose/set up hosting infrastructure<br />
- create a build process
      </quote>
      <p>Let's briefly discuss each of these things.</p>

      <h3>The Tech</h3>
      <p>I usually use side projects like this as a way to learn new tech, e.g. this blog is built in Next.js which I'm using as a way to learn the framework. Since I'm aiming for pure speed of implementation on this project (minus the time it takes to #buildinpublic) I want to use something I'm familiar with and that is proven to be able to spin up apps quickly. For that I choose Ruby on Rails. I've used it both personally and professionally for several years now and I love it. It's perfect for building fast prototypes that can be evolved into complex apps with strong design patterns and can even scale. Both Shopify and Github are built on Ruby on Rails. This project will <strong>NEVER</strong> see that kind of scale, so I know Ruby on Rails can handle all my needs here.</p>
      <p>I'm going to build the API in Ruby on Rails. At some point I <em>might</em> explore the concept of web sockets in Rails. I know there's some hotwire support in Rails now, but I'm not sure what I can do with that in an API or what my limits are. That's stuff to play with later anyway. The API will be a simple RESTful API, because that's what Rails absolutely shines in.</p>
      <p>The web front-end I'll build in React because I know React and I can build it quickly. I might (probably will) use Next.js because it's so fast. The mobile apps I'll build in Flutter for a few reasons: 1) I've already built a Flutter app (that I never put in production) so I'm at least passingly familiar with connecting a Flutter app up to an API. I'm still working out best practices for the UI patterns to follow, but I can at least put something together there. Also choosing Flutter because I'm incredibly lazy and I can build both the Android and iOS apps in the same codebase. Flutter can also do web apps so if that looks good and is easy to build I might replace the React app with it at some point. Not sure yet.</p>

      <h3>The Planning</h3>
      <p>A lot of the time when I'm building something I'll just wing it and build whatever I want to build on any given day. I keep track of where I left off with a TODO in the code at the end of the session so I know where to pick up the next time. This usually leads to me missing things or not building the features I necessarily should.</p>
      <p>I've overcome this in a few projects now by keeping a Trello board or similar with "cards" that describe the features I want to build and that break down the pieces I need to implement for it to be successful. I'm planning on taking that approach here, but will keep the details on it light enough that it (hopefully) won't slow me down. I'll explore using the new-ish built-in github feature for this and if that doesn't work for me I'll just fall back to Trello because it's easy and I know how to use it, but I'd prefer github so that I can share it out more easily.</p>

      <h3>The Design</h3>
      <p>Anyone that's seen my designs can confirm that I am an engineer at heart. For the MVP my goal isn't to design the most beautiful perfect app possible. I will sketch out some <em>very</em> basic layouts of needed pages and I will build them with the second least amount of design possible. I would probably be better off sticking to no design at all, but there's a few things about the basic html designs that I don't like (for example the font). So I'll tweak the things that annoy me, but this is not going to win any design awards.</p>

      <h3>The Prioritization</h3>
      <p>I've already prioritized the features by cutting everything out of MVP that I'm comfortable with. I cut some abstractions that I'll have to add in later, and I left some that aren't <em>strictly</em> necessary, but anything around the user will be annoying to refactor later and if I know I'm going to abstract something later I might as well do it now, at least mostly. I'm going to build the user stuff first because I find the user associations useful to have in place when I build out the core models. It helps me think through the relationships.</p>

      <h3>The Organization of Code</h3>
      <p>Rails does a lot of the organization for me as far as the API is concerned. It will be MVC. I like to build a Services layer for operations that involve more than one model. An example of where I might need a service is at the creation of a maintenance event because I expect to add a new maintenance event record but also potentially update a car part record to record the new expected replacement date for the next maintenance event. Today I'm not exactly certain how that will look or work but it will likely utilize a service that will both add the maintenance event record and update any associated models that need an update.</p>
      <p>For the React and Flutter apps I'll do my best to split the API calls out away from the UI and the business logic. I like to keep those 3 things separate where possible because I believe it makes the app more maintainable as you refactor and add new functionality.</p>

      <h3>Hosting Infrastructure</h3>
      <p>The Rails API will be hosted, at least initially, on Heroku. It's cheap enough to start, it's easy enough, and I know how to do it. The front-end if built in React I'm not sure where I'll host it. If I use Next.js with a static build that's pretty easy to put on github pages, so I might do that. Not sure yet. The mobile apps will be available on the respective stores and those live on the user's devices.</p>

      <h3>The Build Process</h3>
      <p>I'll leverage github actions as much as I can for this part. I know heroku has its own thing and if I need to use it I will, but I'm cheap and I like free and I like being in control of where my steps and data go. I haven't decided what I want to use for a CI system yet. More to come on this section as the project progresses.</p>

      <h2>The Epilogue</h2>
      <p>That's what I'm building. If this interests you or you have suggestions or feedback I'd love to hear about it. Please reach out to me on Twitter (<a href="https://twitter.com/davemcg3">davemcg3</a>) and let me know what you think. Maybe someday I'll add comments here or build a mailing list or something, so check back for that. Meanwhile I'm just trying to get something going quickly so Twitter is the place to catch me. Thanks for reading!</p>
    </div>
  )
}

