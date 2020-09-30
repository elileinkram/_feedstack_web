# About

Jasper is a programmable social network.

We give people the tools to build their own ranking algorithms that can be used to make purpose-built feeds.

# How it works

Each post has a number associated with it. This number is called the ranking.

Posts with higher rankings will feature in the feed before posts with lower rankings.

The value of the ranking is calculated by the [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) function.

This function takes in 3 classes as input.

[Author](https://github.com/elijahleinkram/jasper/blob/master/classes/author.js), [Reader](https://github.com/elijahleinkram/jasper/blob/master/classes/reader.js) and [Post](https://github.com/elijahleinkram/jasper/blob/master/classes/post.js).

And then the function spits back a number as output. That number becomes the new ranking.

If [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) returns a number that is less than or equal to zero, the post will not enter the feed at all.

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










