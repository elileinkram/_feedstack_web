# About

[Jasper](https://play.google.com/store/apps/details?id=com.jasper.jasper) is a programmable social network.

We give people the tools to build their own ranking algorithms that can be used to make purpose-built feeds.

# How it works

Each post has a ranking number.

Posts with higher rankings will feature in the feed before posts with lower rankings.

The ranking is calculated by [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking).

The [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) function takes in 3 classes as input.

[Author](https://github.com/elijahleinkram/jasper/blob/master/classes/author.js), [Reader](https://github.com/elijahleinkram/jasper/blob/master/classes/reader.js) and [Post](https://github.com/elijahleinkram/jasper/blob/master/classes/post.js).

And then spits back a number as output, which becomes the new ranking.

Implement [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) to create a custom feed that shows you what you want to see.

Upload your implementation of [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) to [Jasper](https://play.google.com/store/apps/details?id=com.jasper.jasper) so that we can generate your new feed. 

If you need help uploading your code watch [this](https://j.gifs.com/K1pmOx.gif).

# Rules

If [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) returns a number that is less than or equal to zero, the post will not enter the feed at all.

If your implementation of [computeRanking](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) does not follow the same structure as the one shown [here](https://github.com/elijahleinkram/jasper/blob/master/ranking/compute_ranking) then it will not work. 

# Examples

[In Dogs We Trust](https://github.com/elijahleinkram/feed-samples/blob/master/functions/in_dogs_we_trust.js)

[The Road Not Taken](https://github.com/elijahleinkram/feed-samples/blob/master/functions/the_road_not_taken.js)

[FOMO](https://github.com/elijahleinkram/feed-samples/blob/master/functions/fomo.js)











