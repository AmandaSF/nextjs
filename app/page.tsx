import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <p>
          
    Ranked 5 most favourite and 5 least favourite support tasks.
          Favorites;
          1)Analyze hundreds of support tickets to spot trends the product team can use: I really enjoy finding trends, and determing solutions, what the lift is for changes, and faster/easier ways to get to a resulution
          2)Run ticket review sessions to make sure tone is consistent: I think finding the balance between consistent tone and allowing agents to use their own personalities in responses allows for work to be a lot more enjoyable. Supporting those efforts is enjoyable to me, and crafting ideal responses or reworking responses is also a great place to create new macros
          3)Manage a support team: Having the luxury of dedicated time for managing a team is a dream. Having that chance to dig into goals, where people are spiking, what they're struggling with, and getting to think about how to level people is really rewarding
          4)Work with the product team to develop a new feature based on feedback from customers: Cross functional work tends to drive a product forward like nothing else. It can be hard to allocate time for it, but the reward when a desired feature launches is very high
          5)Help train and onboard new support teammates: This goes hand in hand with 3, but iterating and making sure your training stays relevant is an ongoing process that allwos you to see how much the product has matured. When you get to remove a training module because those problems have been solved, or bring in a new one due to new product launches-- it's fun!

          Least Favorite:
          1)Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel: I've always preferred working with a wide variety of customers, and solving new problems. Dedicated support is key for relationship management, but it's not my cup of tea
          2) Write and maintain support articles and docs pages: I have a much easier time writing responses for a specific person, so writing general documentation tends to be a little tricker for me. Generally, I have to create a Reader Persona to trick myself into thinking that creating documentation is just writing for a specific person.
          3)Scheduling time-off coverage and collaborating as part of a growing cohesive support team: I got spoiled at a previous company where this was mostly automated, so doing this just makes me nostalgic 
          4)Create video tutorials to help teach users a specific feature or use case: Very much the same as 3-- I currently create probably 6-12 Looms a week, but it's just so much easier when it's directed at a specific person
          5)Dig through logs to troubleshoot a customer's broken project: I prefer to work a little more collaboratively, and while I absolutely will dive deep into a customer's log or other setup to understand what's gone wrong, it's not my favorite thing
    
          What do you want to learn or do more of at work?
          The work I'm most passionate about is helping to develop the skills of the people I work with. I'd like my role to enclude a lot of coaching, and to have enough autonomy to help build strong, resilient support teams. I do feel like I have a gap in knowledge about how Sales works, so working more closely with Sales would be a nice to have. 
          
    Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?
          For context, at Persona, the language around selecting the correct ID for verification is set per language, not per country. This can have impacts when multiple countries use the same language (like Spanish), but don't call their IDs the same thing. Recently, a customer reached out to let us know that they were seeing unhappy end users who were selecting the wrong IDs, or were confused by the names and reaching out to support, and they wanted the ability to change the title of the ID by country. 
          That is not currently available, so after I put in a feature request to solve this, I talk to the customer about three different work arounds (updating the default language for their biggest market, updating the error page when an end user is asked to retry, and setting up custom screens prior to ID selection. I made sure to lay out how to accomplish these options, how we put together all three of them, and potential downsides. I also made sure to let them know that a feature request was underway. I felt confident that my work arounds would work because after we implemnted the changes, I was able to use our analytics to show an increased conversion rate. We also spent a lot of time talking through the use case to make sure I was suggesting changes that would actually support the end users where they were. 
          
    When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
          Edge Functions: 
    Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
    The customer from question 5 replies to your response with the below:
        “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.” 
        Please write a follow-up reply to the customer.
    A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
    A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
    What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
    How could we improve or alter this familiarisation exercise?

        </p>
      </div>
    </main>
  );
}
