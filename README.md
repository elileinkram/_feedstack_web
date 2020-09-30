# About

Jasper is a programmable social network.

We give people the tools to build their own ranking algorithms that can be used to make purpose-built feeds.

# How it works

Each post has a number associated with it. This number is called the ranking.

Posts with higher rankings will feature in the feed before posts with lower rankings.

The ranking is calculated by the [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) function.

This function takes in 3 classes as input.

[Author](https://github.com/elijahleinkram/jasper/blob/master/classes/author.js), [Reader](https://github.com/elijahleinkram/jasper/blob/master/classes/reader.js) and [Post](https://github.com/elijahleinkram/jasper/blob/master/classes/post.js).

And then spits back a number as output, which becomes the new ranking.

# Rules

If [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) returns a number that is less than or equal to zero, the post will not enter the feed at all.

If you write your own [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) function be sure it follows the same structure as the one shown [here](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking). 

# Examples

[In Dogs We Trust](https://github.com/elijahleinkram/feed-samples/blob/master/functions/in_dogs_we_trust.js)

[The Road Not Taken](https://github.com/elijahleinkram/feed-samples/blob/master/functions/the_road_not_taken.js)

[FOMO](https://github.com/elijahleinkram/feed-samples/blob/master/functions/fomo.js)

# But what is the point...

The point of Jasper is to give us humans,

1. Transparency as to why posts end up in our feeds. 
2. Control over the algorithms that determine our feeds. 










