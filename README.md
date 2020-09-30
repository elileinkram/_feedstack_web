# Feed samples for Jasper 

Here are some examples of feeds that you can create. 

All of these feeds curate content a different way. Some show you posts of dogs, some show you posts your friends have reacted to, some might even show you posts that most people have not seen. 

# Examples

[In Dogs We Trust](https://github.com/elijahleinkram/feed-samples/blob/master/functions/in_dogs_we_trust.js)

[The Road Not Taken](https://github.com/elijahleinkram/feed-samples/blob/master/functions/road_not_taken.js)

[FOMO](https://github.com/elijahleinkram/feed-samples/blob/master/functions/fomo.js)

# Why though?

The main idea behind Jasper, is that as consumers of social products, we have missed out on 2 key things. 

1. Transparency as to why posts end up in our feeds. 
2. Control over the algorithms that determine our feeds. 

And at Jasper, we aim to fix that.

# How it works

We provide you with 3 classes. Author, Post and Reader. You can find these classes and a description of their properties in the 'classes' directory. You can then export a function called computeRanking. Compute ranking takes in the 3 classes as input, and spits back a number as an output. That number is the ranking of the post.

# Rules

If the ranking is greater than 0. Then the post will be included in the feed. If the ranking is less than zero, the post will be excluded from the feed. The feed then sorts the posts from highest to lowest. That means that if postA has a ranking of 100 and postB has a ranking of 3, postA will go before postB in the feed. If they are the same ranking then the order will be random.

# These examples are just a start.

There are heaps of other interesting properties you can access, be sure to check them out. 









