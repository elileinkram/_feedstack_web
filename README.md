# Feed samples for Jasper 

Here are some examples of feeds that you can create. 

All of these feeds curate content a different way. Some show you posts of dogs, some show you posts your friends have reacted to, some might even show you posts that most people have not seen. 

# Examples

[In Dogs We Trust](https://github.com/elijahleinkram/feed-samples/blob/master/functions/in_dogs_we_trust.js)

[The Road Not Taken](https://github.com/elijahleinkram/feed-samples/blob/master/functions/the_road_not_taken.js)

[FOMO](https://github.com/elijahleinkram/feed-samples/blob/master/functions/fomo.js)

# Why though?

The main idea behind Jasper, is that as consumers of social products, we have missed out on 2 key things. 

1. Transparency as to why posts end up in our feeds. 
2. Control over the algorithms that determine our feeds. 

And at Jasper, we aim to fix that.

# How it works

You are provided with 3 classes. 

[Author](https://github.com/elijahleinkram/feed-samples/blob/master/classes/author.js), [Post](https://github.com/elijahleinkram/feed-samples/blob/master/classes/post.js) and [Reader](https://github.com/elijahleinkram/feed-samples/blob/master/classes/reader.js).

We use these classes to calculate a ranking for the post so that it knows how high it should show in the feed. The calculation is to be performed inside the [computeRanking](https://github.com/elijahleinkram/feed-samples/edit/master/ranking/computeRanking) function.

It takes the 3 classes as input, and spits back a number as output. That number beomes the ranking of the post.

The code must be written with the same boilerplate as the [computeRanking](https://github.com/elijahleinkram/feed-samples/edit/master/ranking/computeRanking) function. Else, it will not work.

# Rules

If the ranking is less than or equal to zero, the post will be excluded from the feed. The feed sorts posts from highest to lowest. That means that if postA has a ranking of 100 and postB has a ranking of 3, then postA will go before postB. 

Q. What if they have the same ranking?

A. Then the order will be random.









