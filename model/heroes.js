const mongoose = require('mongoose')

const Heroes = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    critRatePercent: {
        type: Number,
        required: true
    },
    critDamagePercent: {
        type: Number,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    elementalType: {
        type: String,
        required: true
    },
    FrameData: {
        noCancelNoHitlag: String,
        url1: String,
        noCancelSoftHitlag: String,
        noCancelHardHitlag: String,
        shiftCancelNoHitlag: String,
        url2: String,
        shiftCancelSoftHitlag: String,
        shiftCancelHardHitlag: String,
        jumpCancelNoHitlag: String,
        url3: String,
        jumpCancelSoftHitlag: String,
        jumpCancelHardHitlag: String
    },
    constellations: {

    },
    levels: {
        Ascension0Lvl1: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension0Lvl20: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension1Lvl20: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension1Lvl40: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension2Lvl40: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension2Lvl50: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension3Lvl50: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension3Lvl60: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension4Lvl60: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension4Lvl70: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension5Lvl70: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension5Lvl80: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension6Lvl80: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
        Ascension6Lvl90: {
            baseHP: Number,
            baseATK: Number,
            baseDEF: Number,
            percentDEF: Number
        },
    },
    talents: {
        talant1: {
            name: String,
            firstHitDMGPercent: {
                levelPercentageBuff: Array
            },
            secondHitDMGPercent: {
                levelPercentageBuff: Array
            },
            thirdHitDMGPercent: {
                levelPercentageBuff: Array
            },
            forthHitDMGPercent: {
                levelPercentageBuff: Array
            },
            chargedATKSpinningDMGPercent: {
                levelPercentageBuff: Array
            },
            chargedATKFinalDMGPercent: {
                levelPercentageBuff: Array
            },
            plungeDMGPercent: {
                levelPercentageBuff: Array
            },
            lowPlungeDMGPercent: {
                levelPercentageBuff: Array
            },
            highPlungeDMGPercent: {
                levelPercentageBuff: Array
            },
            chargedATKStaminaCostPerSecond: Number,
            chargedATKmaxDurationInSeconds: Number
        },
        talant2: {
            name: String,
            skillDMGFromDEF: {
                levelPercentageBuff: Array
            },
            dmgAbsorption: {
                levelPercentageBuff: Array,
                additiveDMGAbsorption: Array
            },
            healing: {
                levelPercentageBuff: Array,
                additiveHealing: Array
            },
            healingTriggeringChance: {
                levelPercentageBuff: Array,
            },
            durationInSeconds: Number,
            cooldownInSeconds: Number
        },
        talant3: {
            name: String,
            burstDMG: {
                levelPercentageBuff: Array
            },
            skillDMG: {
                levelPercentageBuff: Array
            },
            bonusATKFromDEF: Array,
            durationInSeconds: Number,
            cooldownInSeconds: Number,
            energyCost: Number
        }
    }
})

module.exports = mongoose.model("Heroes", Heroes)