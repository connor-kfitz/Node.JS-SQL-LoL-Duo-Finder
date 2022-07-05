module.exports = {
    getName: (input) => {
            return input.gameName;    
    },
    getSoloRank: (input) => {
        return input.soloDuoRank;
    },
    getFlexRank: (input) => {
        return input.flexRank;
    },
    getRole: (input) => {
        if(input == '1'){
            return true;
        };
    },
    diamondCheck: (input) => {
        if((input.soloDuoRank == 'Diamond') || (input.flexRank == '')) {
            return true;
        };
    },
    dCheck: (input) => {
        if(input == 'Diamond'){
            return true;
        };
    },
    pCheck: (input) => {
        if(input == 'Platinum'){
            return true;
        };
    },
    gCheck: (input) => {
        if(input == 'Gold'){
            return true;
        };
    },
    sCheck: (input) => {
        if(input == 'Silver'){
            return true;
        };
    },
    bCheck: (input) => {
        if(input == 'Bronze'){
            return true;
        };
    },
    iCheck: (input) => {
        if(input == 'Iron'){
            return true;
        };
    },
}