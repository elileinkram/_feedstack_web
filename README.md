# About

Jasper is a programmable social network.

We give people the tools to build their own ranking algorithms that can be used to make purpose-built feeds.

# How it works

How does it work?

Each post has a number associated with it. This number is called the ranking. Posts with higher rankings
will feature in the feed before posts with lower rankings.

What determines the value of the ranking is the algorithm. The algorithm is a function which
takes in input, and spits back a number as ouptut.

As each post enters the algorithm, it is up to the user to decide what number the algorithm should return.

We provide you with 3 classes which will help you determine the ranking.

Author, Reader and Post.

These classes are sent into the computeRanking function as input, and the function then returns the ranking for the post.

By accessing the properties of these classes, you will be able to tell the algorithm exactly what posts you want to see.

If the algorithm returns a number that is less than or equal to zero, the post will not enter the feed at all.

After you have written the computeRanking function. You can upload it to the app. And create a new feed that shows you content based on the new algorithm.

# Rules

If the ranking is less than or equal to zero, the post will be excluded from the feed. 

The feed sorts posts from highest to lowest. That means that if postA has a ranking of 100 and postB has a ranking of 3, then postA will be served before postB.

Q. What if they have the same ranking?

A. Then the order will be random.

# Examples

[In Dogs We Trust](https://github.com/elijahleinkram/feed-samples/blob/master/functions/in_dogs_we_trust.js)

[The Road Not Taken](https://github.com/elijahleinkram/feed-samples/blob/master/functions/the_road_not_taken.js)

[FOMO](https://github.com/elijahleinkram/feed-samples/blob/master/functions/fomo.js)

# But what is the point...

The point of Jasper is to give us humans,

1. Transparency as to why posts end up in our feeds. 
2. Control over the algorithms that determine our feeds. 










