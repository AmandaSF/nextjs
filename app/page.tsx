import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        </div>
      <div>
        <p>Ranked 5 most favourite and 5 least favourite support tasks.</p>
        <p>Favorites</p>
        <p>1)Analyze hundreds of support tickets to spot trends the product team can use: I really enjoy finding trends, and determining solutions, what the lift is for changes, and faster/easier ways to get to a resolution</p>
        <p>2)Run ticket review sessions to make sure tone is consistent: I think finding the balance between consistent tone and allowing agents to use their own personalities in responses allows for work to be a lot more enjoyable. Supporting those efforts is enjoyable to me, and crafting ideal responses or reworking responses is also a great place to create new macros</p>
        <p>{'3)Manage a support team: Having the luxury of dedicated time for managing a team is a dream. Having that chance to dig into goals, where people are spiking, what they are struggling with, and getting to think about how to level people is really rewarding'}</p>
        <p>4)Work with the product team to develop a new feature based on feedback from customers: Cross functional work tends to drive a product forward like nothing else. It can be hard to allocate time for it, but the reward when a desired feature launches is very high</p>
        <p>5)Help train and onboard new support teammates: This goes hand in hand with 3, but iterating and making sure your training stays relevant is an ongoing process that allows you to see how much the product has matured. When you get to remove a training module because those problems have been solved, or bring in a new one due to new product launches-- that is my kind of fun!</p>
        <p>Least Favorite</p>
        <p>1)Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel: I have always preferred working with a wide variety of customers, and solving new problems. Dedicated support is key for relationship management, but it is not my cup of tea</p>
        <p>2) Write and maintain support articles and docs pages: I have a much easier time writing responses for a specific person, so writing general documentation tends to be a little tricker for me. Generally, I have to create a Reader Persona to trick myself into thinking that creating documentation is just writing for a specific person.</p>
        <p>{'3)Scheduling time-off coverage and collaborating as part of a growing cohesive support team: I got spoiled at a previous company where this was mostly automated, so doing this just makes me nostalgic'}</p>
        <p>{'4)Create video tutorials to help teach users a specific feature or use case: Very much the same as 3-- I currently create probably 6-12 Looms a week, but it is just so much easier when it\'s directed at a specific person'}</p>
        <p>{'5)Dig through logs to troubleshoot a customer\'s broken project: I prefer to work a little more collaboratively, and while I absolutely will dive deep into customer logs or other setups to understand what\'s gone wrong, it\’s not my favorite thing'}</p>
        <p>What do you want to learn or do more of at work?</p>
        <p>{'The work I\'m most passionate about is helping to develop the skills of the people I work with. I\'d like my role to include a lot of coaching, and to have enough autonomy to help build strong, resilient support teams. I do feel like I have a gap in knowledge about how Sales works, so working more closely with Sales would be a nice to have.'}</p>
        <p>Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</p>
        <p>{'For context, at Persona, the language around selecting the correct ID for verification is set per language, not per country. This can have impacts when multiple countries use the same language (like Spanish), but don\'t call their IDs the same thing. Recently, a customer reached out to let us know that they were seeing unhappy end users who were selecting the wrong IDs, or were confused by the names and reaching out to support, and they wanted the ability to change the title of the ID by country.'}</p>
        <p>{'That is not currently available, so after I put in a feature request to solve this, I talked to the customer about three different workarounds (updating the default language for their biggest market, updating the error page when an end user is asked to retry, and setting up custom screens prior to ID selection.'}</p>
        <p>{'I made sure to lay out how to accomplish these options, why I picked the three of them, and potential downsides. I also made sure to let them know that a feature request was underway. I felt confident that my workarounds would work because after we implemented the changes, I was able to use our analytics to show an increased conversion rate. We also spent a lot of time talking through the use case to make sure I was suggesting changes that would actually support the end users where they were.'}</p>
        <p>When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</p>
        <p>Edge Functions: for Middleware and other functions using the edge runtime</p>
        <p>Serverless Functions: handling API routes and server-side rendered pages</p>
        <p>Edge Middleware: Running redirects, rewrites, as a function to support A/B testing (or in the same vein, feature flags).</p>
        <p>{'Imagine a customer writes in requesting help with a build issue on a framework or technology that you\'ve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?'}</p>
        <p>{'The first thing I\’m going to do is get my bearings: I\’m going to see if the customer has written in before, and whether or not previous questions are related. I\’m going to see if the error they’re seeing has been seen before (search relevant documents or tickets for keywords, potentially search things like Stackoverflow as well), and determine if previous fixes will apply.'}</p>
        <p>{'If the easy search doesn\’t turn anything up, I\’m going to ask them to provide steps to reproduce, and see if I can reproduce it. At this point, I may touch base with the team to see if anyone else has familiarity, especially if this is a production blocking issue, as reproducing in a technology you\’re not fluent in can be time consuming.'}</p>
        <p>{'In either case, I\’m going to try to reproduce the issue. If I can reproduce, and it was working before a change, I\’m going to try to whittle down the changes until I find the exact problem section. Then, I\’m going to work with the customer to determine what they were trying to accomplish, and see if there\’s an alternate way of going about it. If it wasn\’t working previously, I\’ll see about supporting the customer through getting started.'}</p>
        <p>The customer from question 5 replies to your response with the below:</p>
        <p>{'“I\’m so frustrated. I\’ve been trying to make this work for hours and I just can\’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.”'}</p>
        <p>Please write a follow-up reply to the customer.</p>
        <p>Hello Friend,</p>
        <p>{'I understand that fixing issues like this can be frustrating, especially when it feels like we aren\’t making progress. However, we are eliminating potential causes of this issue as we go through this process. Thank you so much for being a partner, and working with me on this.'}</p>
        <p>['I do have more questions (and I know that\’s not what you want to hear), but I want us to get to a resolution on the issue we\’re seeing.'}</p>
        <p>(insert additional follow up questions here)</p>
        <p>best,</p>
        <p>Amanda</p>
      </div>
    </main>
  );
}
