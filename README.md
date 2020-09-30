# How it works

A [Post](https://github.com/elijahleinkram/feed-samples/blob/master/classes/post.js) enters the feed. The person who makes the post is the [Author](https://github.com/elijahleinkram/feed-samples/blob/master/classes/author.js). The person who views the post is the [Reader](https://github.com/elijahleinkram/feed-samples/blob/master/classes/reader.js).

Each post has a ranking. The ranking is calculated by the [computeRanking](https://github.com/elijahleinkram/feed-samples/blob/master/ranking/compute_ranking) function. The higher the ranking the higher the post will show in the feed. 

You can write your own functions, but the layout should look something like [this](https://github.com/elijahleinkram/feed-samples/blob/master/ranking/compute_ranking).

# Rules

If the ranking is less than or equal to zero, the post will be excluded from the feed. 

The feed sorts posts from highest to lowest. That means that if postA has a ranking of 100 and postB has a ranking of 3, then postA will be served before postB.

Q. What if they have the same ranking?

A. Then the order will be random.

# Examples

[In Dogs We Trust](https://github.com/elijahleinkram/feed-samples/blob/master/functions/in_dogs_we_trust.js)

[The Road Not Taken](https://github.com/elijahleinkram/feed-samples/blob/master/functions/the_road_not_taken.js)

[FOMO](https://github.com/elijahleinkram/feed-samples/blob/master/functions/fomo.js)

# But what is the poinst...

The point of Jasper is to give us humans...

1. Transparency as to why posts end up in our feeds. 
2. Control over the algorithms that determine our feeds. 







