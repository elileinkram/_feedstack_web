# Feed samples for Jasper 

Here are some examples of feeds that you can create. 

All of these feeds curate content a different way. Some show you posts of dogs, some show you posts your friends have reacted to, some might even show you posts that most people have not seen. The main idea behind Jasper, is that as consumers of social products, we have missed out on 2 key things. 

1. Transparency as to why and how posts end up in our feeds. 
2. Control over the switches that determine what we see. 

And at Jasper, we aim to fix that.

# How it works

We provide you with 3 classes. Author, Post and Reader. You can find these classes and a description of their properties in the 'classes' directory. You job is to export a function called computeRanking. Compute ranking takes in the 3 classes as input, and spits back a number as output. That number is now the ranking of the post.

# Rules

If the ranking is greater than 0. Then the post will be included in the feed. If the ranking is less than zero, the post will be excluded from the feed. The feed then sorts the posts from highest to lowest. That means that if postA has a ranking of 100 and postB has a ranking of 1, postA will go before postB. If they are the same ranking then the order will be random.

# Example

One of the properties belonging to Post, is hashtags. Post.hashtags is a set of strings, containing hashtags the user has included within the post. By accessing hashtags you can show posts of a certain type, say "dogs", "paris" or "guitar". Post.whenWasThisMade is a number in milliseconds since epoch telling you when the post was made. The higher this number, the more recent the post. The lower this number, the older the post. 

By using both these properties, we can create a feed which shows the most recent dog posts.

# This example is just a start...

There are heaps of other interesting properties you can access, be sure to check them out.









