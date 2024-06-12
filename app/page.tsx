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
        <p>4)Create video tutorials to help teach users a specific feature or use case: Very much the same as 3-- I currently create probably 6-12 Looms a week, but it is just so much easier when it's directed at a specific person</p>
      </div>
    </main>
  );
}
