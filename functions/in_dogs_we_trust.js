// "Show me posts of dogs that make people happy"

module.exports = {

    computeRanking: function (author, post, reader) {

        let ranking = 0;
        
        const caption = post.caption;
        
        if (caption.includes('dog') || caption.includes('puppy') || caption.includes('puppies')) {
                
            const numberOfPeopleThisHasMadeHappy = post.numberOfPeopleThisHasMade.get('happy');

            ranking = numberOfPeopleThisHasMadeHappy + 1;    
                
        }
            
        return ranking;
       
    }

};
