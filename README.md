# About

[Feedstack](https://play.google.com/store/apps/details?id=com.jasper.jasper) is a fully progammable social network.

We give developers the tools to make and share their own feeds.

This means you can decide what posts you want to see. And the order in which they appear. 

You can install [Feedstack](https://play.google.com/store/apps/details?id=com.jasper.jasper) on [IOS](https://play.google.com/store/apps/details?id=com.jasper.jasper) and on [Android](https://play.google.com/store/apps/details?id=com.jasper.jasper).

# How it works

Each post has a ranking number.

A post with a higher ranking will show up in the feed before a post with a lower ranking.

The ranking is calculated by [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking.js).

The [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking.js) function takes in 3 classes as input.

[Author](https://github.com/elijahleinkram/jasper/blob/master/classes/author.js), [Post](https://github.com/elijahleinkram/jasper/blob/master/classes/post.js) and [Reader](https://github.com/elijahleinkram/jasper/blob/master/classes/reader.js).

And then spits back a number as output, which becomes the new ranking.

Upload your implementation of [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking.js) to [Feedstack](https://play.google.com/store/apps/details?id=com.jasper.jasper).

[Feedstack](https://play.google.com/store/apps/details?id=com.jasper.jasper) will then generate a new feed based on the new implementation. 

# Rules

If [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking.js) returns a number that is less than or equal to zero, then the post will not enter the feed.

If your implementation of [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking.js) does not follow the same structure as the one shown [here](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking.js) then it will not work. 

# Examples

[In Dogs We Trust](https://github.com/elijahleinkram/feed-samples/blob/master/functions/in_dogs_we_trust.js)

[The Road Not Taken](https://github.com/elijahleinkram/feed-samples/blob/master/functions/the_road_not_taken.js)

[FOMO](https://github.com/elijahleinkram/feed-samples/blob/master/functions/fomo.js)












