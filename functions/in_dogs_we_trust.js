// "Show me posts of dogs that make people happy"

module.exports = {

    computeRanking: function (author, post, reader) {

        let ranking = 0;

        const hashtags = Array.from(post.hashtags.values());
        
        let isDogPost = false;
        
        for (const hashtag of hashtags) {
            
            if (hashtag.toLowerCase().includes('dog') || hashtag.toLowerCase().includes('puppy') || hashtag.toLowerCase().includes('puppies')) {
                
                isDogPost = true;
                
            }
        
        }
                
        if (isDogPost) {
    
            const numberOfPeopleThisHasMadeHappy = post.numberOfPeopleThisHasMade.get('happy');

            ranking = numberOfPeopleThisHasMadeHappy + 1;        
                
        }
            
        return ranking;
       
    }

};
